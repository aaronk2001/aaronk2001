<img src="assets/aaron-portrait.jpg" alt="Aaron Karsten" width="190" align="right">

# Aaron Karsten

**Robotics and Automation Engineer** | Tempe, AZ

I took a fleet of robotic handwriting machines from zero to 200+ units.

**[Resume](assets/resume.pdf)** &nbsp;|&nbsp; **[LinkedIn](https://www.linkedin.com/in/aaron-karsten)**

<br clear="right">

<table><tr><td align="center"><b>200+</b><br><sub>machines in production</sub></td><td align="center"><b>30,000</b><br><sub>letters per day</sub></td><td align="center"><b>96%</b><br><sub>fleet uptime (OEE)</sub></td><td align="center"><b>10 h to 3.5 h</b><br><sub>mean time to repair</sub></td></tr></table>

## About

I’m a robotics engineer based in Tempe, Arizona. At Handwrytten I helped scale a fleet of proprietary robotic handwriting machines from 0 to 200+ units producing 30,000 letters a day. I built the automated inspection machines, shipped custom PCBs, and ran the telemetry that keeps it all in production.

My background spans the full stack of physical engineering: from SolidWorks CAD and KiCAD PCB design to YOLOv8 computer vision on edge hardware (Hailo-8, Raspberry Pi 5) and PLC programming in Codesys and on Arduino Opta. I’m currently adding welding to that list. Phase 1 MIG is underway.

The work I care most about sits where hardware and software meet. Hardware is the harder thing to fake, and the discipline that keeps software honest. My Handwrytten role ended in September 2026, so I’m looking for the next one. Robotics, controls, or automation engineering, in the Phoenix metro or remote.

## Selected work

<table>
<tr>
<td width="50%" valign="top">

<a href="work/handwrytten-fleet.md"><img src="assets/work/diagram-fleet.svg" alt="Fleet autonomy diagram" width="400"></a>

### [Robotic fleet at production scale](work/handwrytten-fleet.md)

<sub>Sep 2023 to Sep 2026 | Robotics Engineer II, Handwrytten</sub>

0 to 200+ proprietary handwriting machines, 30,000 letters per day

<b>0 to 200+</b> machines in production<br><b>30,000</b> letters/day, 3x growth

</td>
<td width="50%" valign="top">

### [Linda, financial research agent](projects.md#linda-financial-research-agent)

<sub>2026 | Complete</sub>

Autonomous financial research agent that combines the Claude API, live market data feeds, and Exa web search to answer complex investment questions in a conversational CLI.

</td>
</tr>
<tr>
<td width="50%" valign="top">

<a href="projects.md#walrus-local-coding-agent-for-the-terminal"><img src="assets/projects/walrus.webp" alt="Walrus in a terminal, reading a project and asking before it edits" width="400"></a>

### [Walrus, local coding agent for the terminal](projects.md#walrus-local-coding-agent-for-the-terminal)

<sub>2026 | Complete</sub>

A Claude Code-style coding agent for the terminal that runs entirely on local Ollama models: 11 built-in tools, skills, subagents and MCP, with the default qwen3:1.7b fitting in 4 GB of VRAM.

11 built-in tools, skills, subagents and MCP<br>Tool-call repair makes 1.7B models usable

<sub>[Source on GitHub](https://github.com/aaronk2001/walrus)</sub>

</td>
<td width="50%" valign="top">

<a href="projects.md#local-tts-desktop-app"><img src="assets/projects/tts-app.webp" alt="TTS App" width="400"></a>

### [Local TTS Desktop App](projects.md#local-tts-desktop-app)

<sub>2026 | Complete</sub>

A local-first, MIT-licensed Windows text-to-speech app in PySide6: pluggable engines (Supertonic, neural-ONNX Piper, Windows SAPI5), a global clipboard hotkey, and a typed, tested codebase.

3 pluggable TTS engines<br>Neural ONNX (Piper) primary

<sub>[Source on GitHub](https://github.com/aaronk2001/text-to-speech)</sub>

</td>
</tr>
<tr>
<td width="50%" valign="top">

<a href="projects.md#mmm-money-hub"><img src="assets/projects/mmm-money-hub.webp" alt="MMM overview dashboard running on built-in sample data: coach insights, runway, net worth and cash flow" width="400"></a>

### [MMM: money hub](projects.md#mmm-money-hub)

<sub>2026 | Complete</sub>

Local-first Monarch-style personal-finance app for spending tracking and insights.

700 tests across 46 files<br>Rule engine grounds every LLM claim

</td>
<td width="50%" valign="top">

<a href="projects.md#plc-track-desktop-learning-tracker"><img src="assets/projects/plc-track-app.webp" alt="PLC Track week 1 view: objective, vocabulary, lab path and deliverable checklist" width="400"></a>

### [PLC Track, desktop learning tracker](projects.md#plc-track-desktop-learning-tracker)

<sub>2026 | Complete</sub>

A Tauri 2 + React desktop app that tracks progress through the controls learning path from a YAML curriculum file.

Ships as a desktop .exe<br>YAML curriculum as the single source of truth

</td>
</tr>
</table>

## Experience

### Robotics Engineer II
**Handwrytten** | Sep 2023 to Sep 2026<br><sub>Promoted from Robotics Engineer Intern (Sep 2023 to Jun 2024) in 10 months</sub>

- Helped scale a proprietary fleet of robotic handwriting machines from 0 to 200+ units producing 30,000 letters/day. 3× output growth.
- Led the ramp team of 6 (2 engineers, 4 technicians) deploying ~6 machines/week.
- Designed and built 2 automated inspection machines on Arduino Opta and Portenta Machine Control PLCs, cutting labor cost $100K+/year, and deployed YOLO/PyTorch vision inspecting 30,000 letters/day in real time.
- Stood up fleet telemetry: live machine status to AWS, an SQL pipeline computing OEE (96% uptime), and Prometheus/Grafana fault detection that cut MTTR from 10 to 3.5 hours.
- Shipped 4 custom PCBs (EasyEDA) to the fleet and stood up a fabrication cell producing 500+ parts/month, cutting custom-part lead time from 4+ weeks to under 1 week.
- Installed and supported leased robots at customer sites across the US with a 24-hour response and 90%+ customer uptime.

[Read the case study: Robotic fleet at production scale](work/handwrytten-fleet.md)

### Project Manager, Robotic Glovebox Capstone
**Los Alamos National Laboratory × ASU** | Aug 2023 to Apr 2024

- Led a 3-person team through an 8-month LANL-sponsored project automating glovebox operations with a 6-DOF UR5e.
- Designed the workcell in SolidWorks, simulated and validated motion in RoboDK, and wrote URScript control routines.
- Built a flight-stick digital twin via a Python bridge for intuitive teleoperation.
- Delivered 100% of project milestones.

[Read the case study: LANL Robotic Glovebox](work/lanl-glovebox.md)

### B.S.E. Robotics Engineering, Ira A. Fulton Schools of Engineering
**Arizona State University** | Graduated Dec 2024

- Coursework covered kinematics, control systems, embedded systems, computer vision, and machine learning.
- Senior capstone: the LANL robotic glovebox project above.

## In progress

| Discipline | Projects |
|---|---|
| **Robotics** | [12-Node Pi Homelab](projects.md#12-node-pi-homelab)<br>[6-DOF robot arm](projects.md#6-dof-robot-arm-cad-electronics-and-firmware)<br>[RobotCar](projects.md#robotcar-autonomous-fpv-rover) |
| **Controls & Automation** | [Homelab Monitoring Stack](projects.md#homelab-monitoring-stack)<br>[plc-python-bridge](projects.md#plc-python-bridge-allen-bradley-tag-io) |
| **Computer Vision & ML** | [YOLOv8 edge inference on Hailo-8](projects.md#yolov8-edge-inference-on-hailo-8) <sub>([code](https://github.com/aaronk2001/yolov8-hailo-pi5))</sub><br>[AI HAT + VLM Defect Demo](projects.md#ai-hat--vlm-defect-demo) |
| **Fabrication** | [Arcade Cabinet Enclosure](projects.md#arcade-cabinet-enclosure) |
| **Software** | [Ascent](projects.md#ascent-career-tracker) <sub>([code](https://github.com/aaronk2001/ascent-career-os))</sub><br>[PolyMarked](projects.md#polymarked-autonomous-agent) <sub>([code](https://github.com/aaronk2001/polymarked))</sub><br>[Phantom](projects.md#phantom-short-form-video-automation) |

**[Write-ups for all 17 projects](projects.md)**

## Skills

**Robotics & Systems:** ROS2, **Python**, C++, **UR5e / URScript**, **Raspberry Pi 4/5**, MicroPython, PCA9685<br>
**Computer Vision & ML:** YOLOv8, **OpenCV**, ONNX, Label Studio<br>
**Controls & Automation:** Studio 5000 / RSLogix, Allen Bradley, EtherNet/IP, Modbus, SCADA<br>
**Fabrication:** **KiCAD**, **SolidWorks**, Fusion 360, **3D Printing**, OpenSCAD, Sheet Metal<br>
**Foundations:** **Linux**, **Git**, Docker, Ansible, Prometheus, Grafana, **Flask**, Next.js, **TypeScript**, Bun, PostgreSQL, **SQLite**, **Claude API**, Ollama

<details>
<summary><b>Education and certifications</b></summary>

| Credential | Issuer | Status |
|---|---|---|
| [BSE Robotics Engineering](https://engineering.asu.edu/robotics/) | Arizona State University | 2024 |
| [UR Academy Certification](https://academy.universal-robots.com) | Universal Robots | 2023 |
| [Machine Learning Crash Course](https://developers.google.com/machine-learning/crash-course) | Google | In progress |
| [Rockwell Automation Training](https://www.rockwellautomation.com/en-us/training.html) | Rockwell Automation | In progress |
| [Practical Deep Learning for Coders](https://course.fast.ai) | fast.ai | In progress |

</details>

## Now (September 2026)

- **CODESYS + Factory I/O controls sprint:** ladder and ST against simulated plants
- **V3 ARM controller PCB:** SKiDL to KiCad netlist, ESP32-S3 motor drive
- **Edge ML on Hailo-8:** YOLOv8 + VLM defect inspection (26 TOPS)

## Contact

Tempe, AZ. Open to robotics, controls and automation roles, Phoenix metro or remote. Reach me on [LinkedIn](https://www.linkedin.com/in/aaron-karsten), or read the [Resume](assets/resume.pdf).
