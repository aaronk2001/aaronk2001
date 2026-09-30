[Back to portfolio](../README.md)

# LANL Robotic Glovebox

**UR5e glovebox automation with a flight-stick digital twin**<br>
<sub>Aug 2023 to Apr 2024 | Project Manager, 3-person team, ASU capstone sponsored by Los Alamos National Laboratory</sub>

An 8-month LANL-sponsored capstone automating glovebox operations with a 6-DOF UR5e. I managed the 3-person team and built the teleoperation layer: a flight-stick digital twin driving the physical arm through a Python bridge.

<table><tr><td align="center"><b>100%</b><br><sub>project milestones delivered</sub></td><td align="center"><b>6-DOF</b><br><sub>UR5e workcell</sub></td><td align="center"><b>PM</b><br><sub>led 3-person team</sub></td></tr></table>

`UR5e` `URScript` `RoboDK` `SolidWorks` `Python` `Digital twin teleoperation`

## Robotic glovebox automation

**Problem**

- Glovebox work puts human operators in awkward, fatiguing postures around hazardous material handling. A strong candidate for robotic assistance.
- LANL needed a demonstration that a collaborative arm could perform glovebox tasks under intuitive human control.

**Constraints**

- University capstone timeline and budget. 8 months, 3 students, fixed milestone schedule with an external national-lab sponsor.
- Operators are not roboticists. Control had to be intuitive enough to use without teach-pendant expertise.

**What I built**

- Workcell design in SolidWorks around a 6-DOF UR5e.
- Motion simulation and validation in RoboDK before any hardware moves.
- URScript control routines for the glovebox task sequences.
- A flight-stick digital twin: a Python bridge maps joystick input onto a simulated twin and the physical arm, giving operators direct, intuitive teleoperation.

<table><tr><td align="center"><b>100%</b><br><sub>milestones delivered</sub></td><td align="center"><b>6-DOF</b><br><sub>UR5e deployed</sub></td><td align="center"><b>Flight-stick</b><br><sub>digital twin control</sub></td><td align="center"><b>8 months</b><br><sub>capstone timeline</sub></td></tr></table>

---

**More case studies:** [Robotic fleet at production scale](handwrytten-fleet.md) | [Six-axis robot arm, from CAD to firmware](robot-arm.md) | [Twelve-node Pi cluster with edge inference](pi-fleet-edge-ml.md) | [PLC integration and a controls lab](plc-controls.md)

[Back to portfolio](../README.md)
