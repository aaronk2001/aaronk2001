[Back to portfolio](../README.md)

# PLC integration and a controls lab

**Allen Bradley bridge, Modbus, OPC-UA, hardware-free CI**<br>
<sub>2026 | Controls</sub>

A Python bridge to Allen Bradley Studio 5000 exposing tags over EtherNet/IP and OPC-UA. A hardware-free controls lab runs PLC ladder logic in Factory I/O simulator with full sensor and actuator simulation for continuous integration.

<table><tr><td align="center"><b>EtherNet/IP + OPC-UA</b><br><sub>one interface</sub></td><td align="center"><b>Simulator</b><br><sub>hardware-free CI</sub></td><td align="center"><b>IEC 61131-3</b><br><sub>OpenPLC on Opta</sub></td><td align="center"><b>Modbus TCP</b><br><sub>station link</sub></td></tr></table>

`Python` `Allen Bradley Studio 5000` `EtherNet/IP` `OPC-UA` `Modbus TCP` `Factory I/O` `OpenPLC`

## Allen Bradley tag I/O bridge

**Problem**

- Studio 5000 runs on Windows in the plant but Python analytics and robotics code run on Linux or Raspberry Pi.
- Pulling PLC tag state requires either expensive gateway hardware or reinventing the wheel with custom socket code.

**Constraints**

- EtherNet/IP packet parsing is proprietary and undocumented. Leveraging existing libraries saves weeks of reverse engineering.
- Tag reads must be low-latency (under 100 ms) to stay responsive for real-time control loops.

**What I built**

- A Python bridge using the pycomm3 library establishes an EtherNet/IP connection to the Allen Bradley CompactLogix controller.
- Tag state is published over OPC-UA so both legacy SCADA systems and modern cloud integrations can subscribe.
- A Modbus TCP shim translates between continuous-process sensor readings (analog scalars, array data) and the discrete 16-bit registers Modbus expects.
- The bridge runs as a systemd service with automatic reconnect and diagnostic logging for fault isolation.

<table><tr><td align="center"><b>EtherNet/IP</b><br><sub>to Python bridge</sub></td><td align="center"><b>OPC-UA</b><br><sub>publish layer</sub></td><td align="center"><b>Modbus TCP</b><br><sub>legacy compatibility</sub></td><td align="center"><b><100 ms</b><br><sub>tag read latency</sub></td></tr></table>

## Hardware-free controls lab

**Problem**

- Learning PLC programming requires hardware: a real controller, I/O cards, sensors, and actuators. Cost and safety liability block experimentation.
- Continuous integration for PLC code is nearly impossible without a simulator that tracks state across test runs.

**Constraints**

- A simulator must behave like real hardware: sensor reads must complete in the same cycle time as a real PLC (10-50 ms), and state must persist across rungs.
- Ladder logic relies on rising/falling edge detection and boolean latch logic that simulators often oversimplify.

**What I built**

- Factory I/O provides a complete plant simulator: conveyor belts, sensors (proximity, photoelectric), pneumatic actuators, and a visual timeline of state changes.
- Ladder logic runs in Studio 5000 Echo (a free IDE) and connects to Factory I/O over Modbus TCP.
- A pytest harness logs the simulator state after each rung cycle and compares against expected behavior (e.g., motor on after detect, motor off after timeout).
- The entire lab (IDE, simulator, test suite) runs in Docker Compose, so any developer can spin up a full environment in one command.

<table><tr><td align="center"><b>Simulator</b><br><sub>Factory I/O + Modbus</sub></td><td align="center"><b>IEC 61131-3</b><br><sub>Studio 5000 Echo</sub></td><td align="center"><b>pytest CI</b><br><sub>automated verification</sub></td><td align="center"><b>Docker Compose</b><br><sub>full reproducibility</sub></td></tr></table>

## Related projects

- [plc-python-bridge, Allen Bradley tag I/O](../projects.md#plc-python-bridge-allen-bradley-tag-io)

---

**More case studies:** [Robotic fleet at production scale](handwrytten-fleet.md) | [Six-axis robot arm, from CAD to firmware](robot-arm.md) | [Edge inference on a Raspberry Pi 5](pi-fleet-edge-ml.md) | [LANL Robotic Glovebox](lanl-glovebox.md)

[Back to portfolio](../README.md)
