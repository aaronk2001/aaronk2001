[Back to portfolio](../README.md)

# Six-axis robot arm, from CAD to firmware

**Parametric CAD, a Teensy 4.1 controller board, ESP32-S3 firmware and ROS2 kinematics**<br>
<sub>2026 | Design, electronics and firmware</sub>

A 6-axis robot arm in the design stage, taken from parametric CAD through a custom controller board to firmware and a ROS2 kinematics stack. The physical build is next.

<table><tr><td align="center"><b>65</b><br><sub>STEP files</sub></td><td align="center"><b>6x TMC2209</b><br><sub>stepper drivers</sub></td><td align="center"><b>3</b><br><sub>controller design reviews</sub></td><td align="center"><b>ROS2 Jazzy</b><br><sub>driver and kinematics</sub></td></tr></table>

`SolidWorks` `Python` `EasyEDA` `KiCad` `Teensy 4.1` `ESP32-S3` `PlatformIO` `ROS2 Jazzy` `NumPy`

## CAD and mechanical design

**Problem**

- A printed arm has to balance stiffness, weight and printability across six joints.
- Each link carries its own motor plus everything downstream, so joint geometry drives positional accuracy.

**Constraints**

- Parts have to print in PETG on a consumer FDM printer.
- Revisions have to be cheap: changing a link length should not mean redrawing the arm.

**What I built**

- Structural parts in SolidWorks, plus Python scripts that generate each joint and link from one shared dimensions file, exported as 65 STEP files.
- Link lengths and motor-mount offsets are parameters, so a revision regenerates the parts.
- Designed around closed-loop NEMA-17 steppers on TMC2209 drivers.

<table><tr><td align="center"><b>65</b><br><sub>STEP files</sub></td><td align="center"><b>1</b><br><sub>shared dimensions file drives every part</sub></td></tr></table>

## Controller board

**Problem**

- Six steppers need precise step timing, fault detection and a clean link to a higher-level controller.
- A breadboard of modules adds latency and debug friction compared to one integrated board.

**Constraints**

- The board has to fit inside the arm base.
- Six motors plus logic need stable 12 V, 5 V and 3.3 V rails with thermal headroom.

**What I built**

- The V2 board (EasyEDA) puts a Teensy 4.1, six TMC2209 stepper driver channels, CAN, limit-switch inputs and regulated 12 V, 5 V and 3.3 V rails on one board.
- An engineering change order corrected the 5 V rail and documented the Teensy pinout and buck-rail power distribution.
- Three written design reviews cover the Teensy connections, an ESP32-S3 versus Teensy 4.1 comparison and a final checklist. V3 moves to an ESP32-S3, with the netlist generated from Python (SKiDL) into KiCad.

<table><tr><td align="center"><b>3 rails</b><br><sub>12 V, 5 V, 3.3 V</sub></td><td align="center"><b>6x TMC2209</b><br><sub>stepper drivers</sub></td><td align="center"><b>3</b><br><sub>written design reviews</sub></td></tr></table>

## Firmware and ROS2

**Problem**

- Six synchronized motors need firmware that keeps motion, safety and communication separate.
- Higher-level code needs a clean command interface instead of low-level step details.

**Constraints**

- Joint limits and faults have to be enforced in firmware, not trusted to the host.
- ROS2 messaging must not disturb step timing.

**What I built**

- ESP32-S3 firmware built with PlatformIO, split into motion.cpp (trajectory interpolation and velocity), safety.cpp (joint limits and faults) and protocol.cpp (serial framing), with the protocol written up in PROTOCOL.md.
- A ROS2 Jazzy workspace with bringup and description packages, launch files and joint_limits.yaml.
- A kinematics package with DH parameters and a damped least-squares IK solver in NumPy, exposed as a service.
- Xbox controller and keyboard teleop for commissioning.

<table><tr><td align="center"><b>ROS2 Jazzy</b><br><sub>workspace</sub></td><td align="center"><b>3</b><br><sub>firmware modules</sub></td><td align="center"><b>Xbox + keyboard</b><br><sub>teleop</sub></td></tr></table>

## Related projects

- [6-DOF robot arm: CAD, controller board and firmware](../projects.md#6-dof-robot-arm-cad-controller-board-and-firmware)

---

**More case studies:** [Robotic fleet at production scale](handwrytten-fleet.md) | [Edge inference on a Raspberry Pi 5](pi-fleet-edge-ml.md) | [PLC controls: simulated plants, real hardware and a Python tag bridge](plc-controls.md) | [LANL Robotic Glovebox](lanl-glovebox.md)

[Back to portfolio](../README.md)
