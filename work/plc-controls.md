[Back to portfolio](../README.md)

# PLC controls: simulated plants, real hardware and a Python tag bridge

**CODESYS and Factory I/O over Modbus TCP, ladder on Arduino Opta, Allen Bradley tags from Python**<br>
<sub>2026 | Controls</sub>

IEC 61131-3 logic in a CODESYS SoftPLC driving Factory I/O plants over Modbus TCP, ladder programs on real Arduino Opta and Portenta hardware, and a Python library for Allen Bradley tag I/O.

<table><tr><td align="center"><b>Modbus TCP</b><br><sub>verified on the wire</sub></td><td align="center"><b>11</b><br><sub>faults debugged and written up</sub></td><td align="center"><b>Opta + Portenta</b><br><sub>real hardware</sub></td><td align="center"><b>EtherNet/IP + OPC-UA</b><br><sub>one Python API</sub></td></tr></table>

`CODESYS` `IEC 61131-3` `Factory I/O` `Modbus TCP` `OpenPLC` `Arduino Opta` `Python` `pycomm3` `asyncua`

## CODESYS and Factory I/O, then real hardware

**Problem**

- Most self-taught PLC work never leaves the simulator, and simulator-only logic hides wiring and protocol faults.

**Constraints**

- CODESYS V3.5 and Factory I/O 2.5, no paid PLC hardware beyond the Opta and Portenta.
- Logic stays IEC 61131-3 so it ports to Allen Bradley later.

**What I built**

- A 6-week sprint, one folder per week: toolchain, timers and counters, SFC state machines, function blocks and HMI, a capstone, then hardware.
- The CODESYS SoftPLC runs as a Modbus TCP server and Factory I/O attaches as the client; the link was verified with raw FC01/FC02 probes.
- Eleven real faults debugged and written up, including inverted retro-reflective sensor polarity, a 16-coil request against an 8-coil server (exception 02) and a Slave ID mismatch.
- OpenPLC ladder programs running on an Arduino Opta's relays and a Portenta Machine Control's outputs.

<table><tr><td align="center"><b>Modbus TCP</b><br><sub>verified on the wire</sub></td><td align="center"><b>11</b><br><sub>faults written up</sub></td><td align="center"><b>Opta + Portenta</b><br><sub>real hardware</sub></td></tr></table>

## Allen Bradley tags from Python

**Problem**

- Python analytics and robotics code need PLC tag data without gateway hardware or custom socket code.

**Constraints**

- No ControlLogix rack on the desk, so everything has to be testable without one.

**What I built**

- A Python library wrapping pycomm3 (EtherNet/IP) and asyncua (OPC-UA subscriptions) behind one interface for ControlLogix and CompactLogix tags.
- SQLite tag logging with CSV export, threshold rules that alert to Telegram, and a live CLI dashboard.
- A simulator that stands in for the PLC so the tests run without hardware. Validation against a physical controller is next.

<table><tr><td align="center"><b>EtherNet/IP + OPC-UA</b><br><sub>one interface</sub></td><td align="center"><b>Simulator</b><br><sub>tests without hardware</sub></td><td align="center"><b>Telegram</b><br><sub>threshold alerts</sub></td></tr></table>

## Related projects

- [PLC-Controls: CODESYS, Factory I/O and real Opta hardware](../projects.md#plc-controls-codesys-factory-io-and-real-opta-hardware)
- [plc-python-bridge: Allen Bradley tags from Python](../projects.md#plc-python-bridge-allen-bradley-tags-from-python)

---

**More case studies:** [Robotic fleet at production scale](handwrytten-fleet.md) | [Six-axis robot arm, from CAD to firmware](robot-arm.md) | [Edge inference on a Raspberry Pi 5](pi-fleet-edge-ml.md) | [LANL Robotic Glovebox](lanl-glovebox.md)

[Back to portfolio](../README.md)
