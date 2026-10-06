[Back to portfolio](README.md)

# Projects

16 projects across robotics, controls, vision and software.

[Robotics](#robotics) | [Controls & Automation](#controls--automation) | [Computer Vision & ML](#computer-vision--ml) | [Fabrication](#fabrication) | [Software](#software)

## Robotics

### Handwrytten: 200+ robot production fleet

<sub>2023-2026 | Complete</sub>

Helped scale Handwrytten's fleet of proprietary robotic handwriting machines from 0 to 200+ units producing 30,000 letters a day. Promoted from intern to Robotics Engineer II in 10 months while leading the ramp team.

- 0 to 200+ machines deployed
- 30,000 letters/day (3x growth)
- 96% fleet uptime via OEE
- MTTR 10 h to 3.5 h (65% reduction)
- $100K+/year labor saved
- 4 custom PCBs shipped to the fleet

`Python` `YOLO / PyTorch` `PLC / Ladder Logic` `EasyEDA` `AWS` `SQL` `Prometheus` `Grafana`

[Case study: Robotic fleet at production scale](work/handwrytten-fleet.md)

<details>
<summary>How it works</summary>

Handwrytten (granted patents US 11,052,693 and US 11,260,686) runs a fleet of 200+ proprietary robotic handwriting machines, tripling output from 10,000 to 30,000 letters a day. Every machine runs a multi-threaded Python control application and works autonomously from a single barcode scan, pulling its jobs from the cloud over WiFi.

Each machine posts live status to AWS, where an SQL pipeline computes OEE availability (machines available divided by total machines); the fleet holds 96% uptime. Prometheus/Grafana telemetry and fault detection cut mean time to repair from 10 hours to 3.5 hours. I led the ramp team of 6 (2 engineers, 4 technicians) deploying about 6 machines a week; steady-state support is a 3-person team.

</details>

### 6-DOF robot arm: CAD, controller board and firmware

<sub>2026 | In progress</sub>

A 6-axis robot arm in the design stage: parametric CAD for 3D printing, a Teensy 4.1 controller board with six TMC2209 stepper drivers, ESP32-S3 firmware and a ROS2 Jazzy kinematics stack. The physical build is next.

- 65 STEP files from parametric CAD
- Teensy 4.1 board with 6x TMC2209, an ECO and 3 design reviews
- ESP32-S3 firmware: motion, safety and protocol modules
- ROS2 Jazzy kinematics with a DLS IK solver

`SolidWorks` `Python` `NumPy` `ROS2` `C++` `PlatformIO` `ESP32-S3` `Teensy 4.1` `TMC2209` `EasyEDA` `KiCad`

[Case study: Six-axis robot arm, from CAD to firmware](work/robot-arm.md)

<details>
<summary>How it works</summary>

The mechanical design is SolidWorks plus Python scripts that generate each joint and link from one shared dimensions file, exported as 65 STEP files. Link lengths and motor offsets are parameters, so a revision regenerates parts instead of redrawing them. It is designed around closed-loop NEMA-17 steppers on TMC2209 drivers.

The V2 controller board, drawn in EasyEDA, puts a Teensy 4.1, six TMC2209 driver channels, CAN, limit-switch inputs and 12 V, 5 V and 3.3 V rails on one board, followed by an engineering change order and three written design reviews. V3 moves to an ESP32-S3, with the netlist generated from Python (SKiDL) into KiCad.

The ESP32-S3 firmware (PlatformIO) is split into motion, safety and protocol modules with a written serial protocol. The ROS2 Jazzy workspace has bringup and description packages, joint limits, a DH-parameter kinematics package with a damped least-squares IK solver in NumPy, and Xbox and keyboard teleop.

</details>

### RobotCar: autonomous FPV rover

<sub>2026 | In progress</sub>

Software and chassis for an autonomous rover: OpenCV lane detection feeds a PID steering loop over MQTT at 30 Hz. Seven modules cover vision, control, obstacle avoidance, video and a web UI; the physical build is next.

- 7 software modules: vision, control, obstacle, streaming, web UI
- OpenCV lane detection to MQTT to PID
- Own SolidWorks chassis: motor base, Pi and camera mounts

`Python` `OpenCV` `MQTT` `PID` `SolidWorks` `Mechanical Design` `3D Printing` `Raspberry Pi`

<details>
<summary>How it works</summary>

The vision module applies adaptive thresholding and a bird's-eye perspective warp to isolate lane markings, then computes the lane-center offset as a PID error signal. The target platform is a Raspberry Pi with a SunFounder Robot HAT.

Steering and throttle commands publish to a local MQTT broker at 30 Hz, and a motor-controller node converts them to differential PWM through an H-bridge. Other modules add ultrasonic obstacle avoidance, an MJPEG video stream and a Flask web UI with live PID-tuning sliders.

The chassis is my own SolidWorks design: a two-wheel differential drive on TT gearmotors with a ball-caster rear wheel, a Pi carrier above the motor base, and a forward camera mount for the lane-detection pipeline.

</details>

<sub>[Back to top](#projects)</sub>

## Controls & Automation

### plc-python-bridge: Allen Bradley tags from Python

<sub>2026 | In progress</sub>

A Python library for reading and writing Allen Bradley Logix tags over EtherNet/IP (pycomm3) and OPC-UA (asyncua), with SQLite logging, Telegram threshold alerts, a live CLI dashboard and a simulator that stands in for the PLC.

- EtherNet/IP and OPC-UA behind one interface
- Simulator stands in for the PLC in tests
- SQLite logging with CSV export, Telegram alerts

`Python` `pycomm3` `asyncua` `EtherNet/IP` `OPC-UA` `SQLite`

[Case study: PLC controls: simulated plants, real hardware and a Python tag bridge](work/plc-controls.md)

<details>
<summary>How it works</summary>

It wraps ControlLogix and CompactLogix tag access in one interface: reads and writes over EtherNet/IP through pycomm3, async OPC-UA subscriptions with callbacks through asyncua, SQLite tag logging with CSV export, and threshold rules that alert to Telegram.

A CLI dashboard shows live tag values without writing application code. There is no ControlLogix rack on the desk, so a built-in simulator stands in for the PLC and the tests run against it. It has not been run against a physical controller yet.

</details>

### PLC-Controls: CODESYS, Factory I/O and real Opta hardware

<sub>2026 | In progress</sub>

A 6-week controls sprint: IEC 61131-3 logic in a CODESYS SoftPLC driving Factory I/O plants over Modbus TCP, plus ladder programs running on an Arduino Opta's relays and a Portenta Machine Control's outputs.

- Modbus TCP link verified on the wire
- 11 real faults debugged and written up
- Ladder running on Opta relays and Portenta outputs

`CODESYS` `IEC 61131-3` `Structured Text` `Ladder` `Factory I/O` `Modbus TCP` `OpenPLC` `Arduino Opta`

[Case study: PLC controls: simulated plants, real hardware and a Python tag bridge](work/plc-controls.md)

<details>
<summary>How it works</summary>

The CODESYS SoftPLC runs as a Modbus TCP server and Factory I/O attaches as the client; the link was verified with raw FC01/FC02 probes, not just the simulator UI. Eleven real faults are debugged and written up, from inverted retro-reflective sensor polarity to a 16-coil request against an 8-coil server.

The weeks run from toolchain, timers and counters through SFC state machines and function blocks to a capstone and a hardware week. OpenPLC Editor projects run on the Opta and the Portenta.

</details>

<sub>[Back to top](#projects)</sub>

## Computer Vision & ML

### YOLOv8 on a Hailo-8L: real-time detection on a Pi 5

<sub>2026 | In progress</sub>

<img src="assets/projects/yolov8-hailo.svg" alt="Pipeline from threaded capture through Hailo-8L inference, NMS decode and ByteTrack, with throughput measured at 80.99 FPS before and 144.74 FPS after activating the network group once" width="480">

YOLOv8n detection and ByteTrack tracking on a Raspberry Pi 5 with a Hailo-8L NPU. A profiling fix took throughput from 81 to 145 FPS (640x640, 6.8 ms p50).

- 144.74 FPS on the Hailo-8L, up from 80.99 (yolov8n, 640x640)
- 6.84 ms p50, 7.31 ms p95 inference latency
- Box-order bug found and fixed (x/y swapped on every detection)
- USB webcam live pipeline: 60 s at 15.0 FPS, camera-bound

`Python` `YOLOv8` `ByteTrack` `HailoRT` `Hailo-8L NPU` `Raspberry Pi 5` `OpenCV`

[Source on GitHub](https://github.com/aaronk2001/yolov8-hailo-pi5) | [Case study: Edge inference on a Raspberry Pi 5](work/pi-fleet-edge-ml.md)

<details>
<summary>How it works</summary>

The model is the precompiled YOLOv8n HEF from the Hailo Model Zoo. It runs entirely on the Hailo-8L AI HAT+ (13 TOPS) over PCIe with NMS on the chip, which leaves the CPU free for capture, tracking and drawing.

The first working pipeline activated the network group and opened the inference streams on every frame, to dodge a HAILO_STREAM_NOT_ACTIVATED race. Opening both once at startup, in the right order, took a reproducible 500-frame benchmark from 80.99 to 144.74 FPS (p50 12.06 to 6.84 ms, p95 13.10 to 7.31 ms). A second bug drew every box with x and y swapped: the decoder returns x0,y0,x1,y1 and the drawing code read y0,x0,y1,x1.

The live pipeline runs capture, inference and tracking on separate threads, infers only frames it has not seen, and updates ByteTrack once per inferred frame so the logged FPS is real throughput. On a USB webcam it ran 60 s at 15.0 FPS with every frame inferred: camera-bound, not NPU-bound.

</details>

### Florence-2 defect inspection demo

<sub>2026 | In progress</sub>

In progress: open-vocabulary defect inspection on the Pi 5 with Florence-2. The goal is to prompt it with defect names like scratch or missing pin and have it mark them on the part, with no labeled dataset.

`Python` `Florence-2` `PyTorch` `Hailo-8L NPU` `Flask`

[Case study: Edge inference on a Raspberry Pi 5](work/pi-fleet-edge-ml.md)

<details>
<summary>How it works</summary>

The plan splits Florence-2 across the hardware: the DaViT vision encoder compiled for the Hailo-8L, the language decoder on the Pi 5 CPU. A CPU-only path is the fallback if the encoder compile stalls. An inspection station can tolerate a few seconds per frame; a production line could not.

Prompts use Florence-2's caption-to-phrase grounding task with defect classes such as scratch, crack, chip, missing pin and dent. The pipeline scripts and a Flask page for uploading test images are partly built; benchmarks come after the compile.

</details>

<sub>[Back to top](#projects)</sub>

## Fabrication

### Arcade cabinet: SolidWorks enclosure

<sub>2026 | In progress</sub>

A SolidWorks design for a small arcade cabinet: controls panel, tapered side walls and a screen mount, sized to print in sections.

`SolidWorks` `Mechanical Design` `3D Printing`

<details>
<summary>How it works</summary>

The side walls taper to save material while carrying the monitor load, the screen mount sits the display at standing eye level, and the controls panel takes a joystick and buttons.

</details>

<sub>[Back to top](#projects)</sub>

## Software

### Ascent: career OS desktop app

<sub>2026 | In progress</sub>

<img src="assets/projects/career-planner.webp" alt="Ascent dashboard on demo data: countdowns, sprint rings and next goals" width="480">

A local-first desktop app for running a job search: a generated daily plan, an application pipeline with follow-up automation, learning tracks, certifications and a portfolio checklist, with a local-LLM assistant.

- Daily plan generated from live data
- Kanban pipeline with follow-up automation
- YAML learning tracks and one Gantt with .ics export
- CI on every push

`Python` `Flask` `TypeScript` `Bun` `SQLite` `pywebview`

[Source on GitHub](https://github.com/aaronk2001/ascent-career-os)

<details>
<summary>How it works</summary>

Each day is generated from a schedule template and filled from live data: the next deliverable of each learning track, applications to send, overdue follow-ups and the next certification study step. Applications move across a Kanban board with a follow-up nudge 3 days after applying and a no-reply list after 14 days.

Learning tracks are YAML curricula with weekly deliverables and time estimates, and one Gantt combines track weeks, exams, milestones and follow-ups, with .ics export. Python and Flask on the back end, strict TypeScript built with Bun on the front end, in a desktop window, with CI on every push.

</details>

### Linda: financial research agent

<sub>2026 | Complete</sub>

A command-line agent that answers financial questions with live market data: it plans research steps, picks from 15 tools and checks its own work. Claude does the reasoning, with Ollama as an offline fallback.

- 15 tools across fundamentals, prices, news and search
- Loop detection and a 10-step cap per query
- Claude primary, Ollama offline fallback

`TypeScript` `Node.js` `Claude API` `Ollama` `Exa`

<details>
<summary>How it works</summary>

Given a question in plain English, Linda breaks it into research steps and calls the right tools: income statements, balance sheets, cash flow, key ratios, prices, news, stock screening and web search.

A self-validation loop catches duplicate or looping tool calls, and each query is capped at 10 research steps. Written in TypeScript on Node.js.

</details>

### Walrus: local coding agent for the terminal

<sub>2026 | Complete</sub>

<img src="assets/projects/walrus.webp" alt="Walrus in a terminal, reading a project and asking before it edits" width="480">

A Claude Code-style coding agent for the terminal that runs entirely on local Ollama models: 11 built-in tools, skills, subagents and MCP, with the default qwen3:1.7b fitting in 4 GB of VRAM.

- 11 built-in tools, skills, subagents and MCP
- Tool-call repair makes 1.7B models usable
- Embedding-based skill routing keeps context small
- MIT-licensed, CI on every push

`TypeScript` `Bun` `Ink` `Ollama` `MCP`

[Source on GitHub](https://github.com/aaronk2001/walrus)

<details>
<summary>How it works</summary>

Small models misname tools, send arguments as JSON strings, or print a call as plain text instead of emitting it. Walrus repairs all of that before a tool runs, falls back to a whitespace-tolerant match when an edit gets indentation wrong, and tells the model exactly which argument is missing.

Skill descriptions are embedded once and each request carries only the closest few, so small context windows stay small. Edits, shell commands and web fetches wait for approval with a diff. Sessions resume, context auto-compacts at 80%, and a hub switches models, skills, agents and MCP servers. Built with Bun and TypeScript, MIT-licensed, CI on every push.

</details>

### Text-to-Speech: local desktop app for Windows

<sub>2026 | Complete</sub>

<img src="assets/projects/tts-app.webp" alt="Text-to-speech app: text box, rate, pitch and volume sliders, and playback controls" width="480">

A local-first Windows text-to-speech app: paste text, or press Ctrl+Alt+S anywhere to hear the clipboard. Supertonic, Piper and SAPI5 engines; open source (GPL-3.0), no cloud, no telemetry.

- 3 engines: Supertonic, Piper, SAPI5
- Global Ctrl+Alt+S clipboard reader
- Typed and tested: pytest, ruff, mypy, CI
- Open source, GPL-3.0

`Python` `PySide6` `ONNX` `Piper` `pydantic` `pytest`

[Source on GitHub](https://github.com/aaronk2001/text-to-speech)

<details>
<summary>How it works</summary>

Engines plug in behind one TTSEngine interface and are picked at runtime through a registry: Supertonic and Piper (both neural ONNX on the CPU) and the built-in Windows SAPI5 as a zero-config fallback. A voice browser downloads Piper voices on demand.

The UI is PySide6 with a tray icon. Configuration is validated with pydantic, audio can be exported to WAV, MP3 or OGG through ffmpeg, and the codebase is checked with pytest, ruff and mypy in CI.

</details>

### Phantom: short-form video automation

<sub>2026 | In progress</sub>

<img src="assets/projects/phantom-studio.webp" alt="Phantom Studio Make a video form: topic, platform, visual style and source clips" width="480">

One desktop app that turns long videos into short-form clips and posts them: paste a YouTube, TikTok or Instagram link, and it downloads, transcribes, picks the best moments with a local LLM, and renders captioned 9:16 clips. A Studio mode builds videos from a script, and a tray worker runs it 24/7.

- Link to captioned 9:16 clips on one machine
- Script-to-video Studio mode
- 24/7 tray worker, about 184 MB idle
- Human-paced posting: 2/day per account, jittered
- 200+ automated tests
- $0 local-default generation

`Python` `FastAPI` `faster-whisper` `yt-dlp` `ffmpeg / NVENC` `Ollama` `SQLite` `Patchright`

<details>
<summary>How it works</summary>

The clip pipeline runs on one machine: yt-dlp ingest, faster-whisper transcription on CUDA (CPU fallback), a local Ollama model choosing segments, and an NVENC render with burned captions (x264 fallback). Studio mode goes the other way: script to TTS voiceover, Whisper-aligned captions, multi-clip and music compositing, and 9:16, 16:9 or 1:1 output.

Accounts link by logging in inside a real browser window, with no platform API keys. A tray worker keeps the app running when the window closes (about 184 MB idle) and posts on a human-paced schedule: at most 2 posts a day per account, jittered times, one post at a time, and a Telegram ping per post. Everything defaults to free local models.

</details>

### MMM: personal finance desktop app

<sub>2026 | Complete</sub>

<img src="assets/projects/mmm-money-hub.webp" alt="MMM overview dashboard running on built-in sample data: coach insights, runway, net worth and cash flow" width="480">

A local-first personal finance app with a rule-based coach: a deterministic engine computes every number, and a small local model only writes the wording.

- 700 tests across 46 files
- Rule engine grounds every model claim
- Packaged build verified, not just dev mode

`Electron` `React` `JavaScript` `Vite` `SQLite` `Vitest` `Ollama`

<details>
<summary>How it works</summary>

Advice comes from the rule engine first. The chat coach is grounded on the same rule output through qwen2.5:1.5b on Ollama and falls back to the raw rules when the model is unavailable. Around it sit an insights widget, inline tips, a weekly digest and a toggle for every nudge.

Electron and React with a Vite build, SQLite storage, and 700 Vitest tests across 46 files. It ships as a portable Windows build, and the packaged app was checked to find Ollama at runtime, not only in development.

</details>

### PolyMarked: Polymarket wallet-scoring agent

<sub>2026 | In progress</sub>

<img src="assets/projects/polymarked.webp" alt="PolyMarked dashboard in paper mode: portfolio value, P&L and open positions" width="480">

A desktop agent that watches Polymarket wallets, scores them, mirrors their trades into a paper book, and runs the one strategy that held up in out-of-sample testing. Live trading is locked behind config.

- 55 tests, 30 API routes, 17 Telegram commands
- 10 packages under one async supervisor
- Live mode locked to config, with a kill switch
- Paper engine shares the live code path

`Python` `asyncio` `FastAPI` `SQLAlchemy` `SQLite` `uv`

[Source on GitHub](https://github.com/aaronk2001/polymarked)

<details>
<summary>How it works</summary>

Ten uv-workspace packages (about 5.4k lines of Python) run as async tasks under one supervisor: wallet watcher, scoring, decision pump, a localhost FastAPI dashboard and an owner-only Telegram bot. Scoring is REDEEM-aware, so wallets that hold to resolution are not scored at zero.

Trade modes are off, paper and live. Live can only be enabled in .env plus a restart, never from the dashboard or the bot, and it also needs per-wallet opt-in, risk caps and a /panic kill switch. Paper fills run through the same engine as live ones, and open positions are marked to live CLOB mid-prices.

</details>

### PLC Track: controls learning tracker

<sub>2026 | Complete</sub>

<img src="assets/projects/plc-track-app.webp" alt="PLC Track week 1 view: objective, vocabulary, lab path and deliverable checklist" width="480">

A Tauri 2 and React desktop app that tracks progress through a controls curriculum stored as YAML.

- Ships as a desktop .exe
- YAML curriculum as the single source of truth

`Tauri 2` `React` `TypeScript` `Bun` `js-yaml`

<details>
<summary>How it works</summary>

A YAML curriculum is the source of truth, React renders week-by-week progress, and Tauri 2 wraps it as a native window with filesystem access.

Two bugs worth remembering: js-yaml silently turned date-shaped strings into Date objects (fixed by parsing with JSON_SCHEMA), and Vite emitted a crossorigin attribute that Tauri's asset protocol rejects.

</details>

<sub>[Back to top](#projects)</sub>
