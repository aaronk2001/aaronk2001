import { CaseStudy } from "./types"

export const caseStudies = [
  {
    "slug": "handwrytten-fleet",
    "flagship": true,
    "title": "Robotic fleet at production scale",
    "subtitle": "0 to 200+ proprietary handwriting machines, 30,000 letters per day",
    "period": "Sep 2023 to Sep 2026",
    "role": "Robotics Engineer II, Handwrytten",
    "summary": "Handwrytten runs the largest fleet of robotic handwriting machines in the world (granted patents US 11,052,693 & US 11,260,686). I helped take the current generation of proprietary machines from 0 to 200+ units in production, tripling output from 10,000 to 30,000 letters per day.",
    "outcomes": [
      {"value": "0 to 200+", "label": "machines in production"},
      {"value": "30,000", "label": "letters/day, 3x growth"},
      {"value": "96%", "label": "fleet uptime via OEE"},
      {"value": "3-person", "label": "steady-state support team"}
    ],
    "tech": ["Python (multi-threaded)", "Raspberry Pi", "KiCAD", "AWS", "WiFi fleet management", "Barcode-driven autonomy"],
    "media": {"kind": "none"},
    "chapters": [
      {
        "id": "robotic-fleet",
        "title": "Robotic fleet ramp to 200+ units",
        "problem": [
          "Demand for robot-written letters was outpacing what the previous generation of machines could produce. Output needed to triple without tripling headcount.",
          "Every new machine added manual setup, monitoring, and repair load. At fleet scale, anything that needs a human in the loop becomes the bottleneck."
        ],
        "constraints": [
          "Machines are designed and built in-house. Every unit deployed meant parts fabricated, boards assembled, and software imaged on site.",
          "Production runs continuously; the ramp had to happen alongside live order volume, not instead of it.",
          "Small team: a ramp crew of 6 (2 engineers, 4 technicians), with steady-state support targeted at 3 people."
        ],
        "built": [
          "Co-authored the multi-threaded Python control application that runs on every robot in the fleet, coordinating the writing mechanism, paper handling, and cloud communication.",
          "Single-scan autonomy: an operator scans one barcode and the machine dynamically pulls its jobs from the cloud over WiFi. No per-job setup.",
          "Led the ramp team of 6 deploying ~6 machines per week to reach 200+ units.",
          "4 custom PCBs designed in EasyEDA and shipped fleet-wide: a Pi HAT robot controller, a power-distribution/logic board, a stepper motor driver board, and a Pico relay board.",
          "An in-house fabrication cell (FDM printing, laser cutting) producing 500+ parts/month, cutting custom-part lead time from 4+ weeks to under 1 week."
        ],
        "outcomes": [
          {"value": "0 to 200+", "label": "machines in production"},
          {"value": "30,000", "label": "letters/day, 3x growth"},
          {"value": "96%", "label": "fleet uptime via OEE"},
          {"value": "3-person", "label": "steady-state support team"}
        ],
        "media": {
          "kind": "image",
          "src": "/work/diagram-fleet.svg",
          "alt": "Fleet autonomy diagram",
          "width": 1200,
          "height": 700,
          "caption": "One barcode scan boots a machine into autonomous production: jobs pull from the cloud, letters write locally, status streams back to AWS."
        },
        "videos": [
          {"id": "OPLBY807qeA", "title": "Official Handwrytten robot demo", "source": "Handwrytten"},
          {"id": "ShpuIeOICL4", "title": "NBC News segment on Handwrytten", "source": "NBC News"},
          {"id": "80Bk7ICo9Zk", "title": "Facility tour, 150 robots writing 24/7", "source": "AtoZ60"},
          {"id": "fX6-3gReyLc", "title": "CES coverage", "source": "CES"}
        ]
      },
      {
        "id": "plc-qa-machines",
        "title": "PLC-based automated QA machines",
        "problem": [
          "QA and letter insertion were manual steps. At 30,000 letters/day they consumed operator time that should have gone to running the fleet.",
          "Manual visual inspection misses defects at volume; escaped defects mean reprints and unhappy customers."
        ],
        "constraints": [
          "The machines had to be designed and built in-house, on production timelines, integrating with the existing letter flow.",
          "Inspection couldn't slow throughput. QA had to keep pace with fleet output."
        ],
        "built": [
          "2 automated machines designed and built in-house on Arduino Opta and Portenta Machine Control PLCs. They inspect, sort, and print letters and notes.",
          "Process flow and inspection methodology defined end to end against a 3 to 5% defect rate, removing the manual-inspection bottleneck behind the 3x scale-up.",
          "YOLO/PyTorch vision models on the fleet's embedded Linux systems inspect 30,000 letters/day in real time for ink skips, ink color, smudges, text misalignment, and wrong card or envelope."
        ],
        "outcomes": [
          {"value": "$100K+", "label": "labor cost saved per year"},
          {"value": "30,000", "label": "letters/day inspected in real time"},
          {"value": "In-house", "label": "designed, built, and programmed"}
        ],
        "media": {
          "kind": "image",
          "src": "/work/diagram-plc-qa.svg",
          "alt": "PLC QA machine diagram",
          "width": 1200,
          "height": 700,
          "caption": "Letters feed through PLC-sequenced handling; a vision stage inspects each unit and diverts rejects before packaging."
        }
      },
      {
        "id": "fleet-telemetry",
        "title": "Fleet telemetry and OEE system",
        "problem": [
          "No single source of truth for fleet availability. Finding a down machine relied on operators noticing.",
          "Mean time to repair sat around 10 hours: failures were discovered late and diagnosed slowly."
        ],
        "constraints": [
          "Telemetry had to ride on the machines' existing cloud/WiFi connection without disturbing production code paths.",
          "Metrics needed to be trustworthy enough to report uptime against. Not vanity dashboards."
        ],
        "built": [
          "Every machine posts live status to AWS; an SQL pipeline processes the feed into fleet metrics.",
          "OEE availability computed as machines available / total machines. The number the fleet is managed against.",
          "Prometheus/Grafana telemetry with fault detection, so failures surface as alerts with diagnostic context instead of being discovered hours later."
        ],
        "outcomes": [
          {"value": "96%", "label": "fleet uptime, measured via OEE"},
          {"value": "98.7%", "label": "average quality rate (OEE)"},
          {"value": "10h to 3.5h", "label": "mean time to repair"},
          {"value": "65%", "label": "MTTR reduction"}
        ],
        "media": {
          "kind": "image",
          "src": "/work/diagram-telemetry.svg",
          "alt": "Telemetry pipeline diagram",
          "width": 1200,
          "height": 700,
          "caption": "Machine status flows to AWS, lands in SQL, and resolves into OEE availability and Grafana fault alerts."
        }
      }
    ],
    "disclosure": "This page only covers details Handwrytten has made public via its Robots page, granted patents (US 11,052,693 & US 11,260,686), and press coverage. Machine internals are intentionally not discussed. Specific QA implementation details are intentionally omitted. Only publicly shareable results are described here. Dashboard internals and screenshots are intentionally not shown. Architecture and results only.",
    "projectIds": ["handwrytten-fleet"]
  },
  {
    "slug": "robot-arm",
    "flagship": true,
    "title": "Six-axis robot arm, from CAD to firmware",
    "subtitle": "V4 design, Teensy controller, ROS2 driver stack",
    "period": "2026",
    "role": "Design, electronics and firmware",
    "summary": "A complete 6-axis robot arm from SolidWorks CAD to ROS2 Jazzy firmware. The V4 design uses closed-loop NEMA-17 steppers with TMC2209 drivers, a custom Teensy 4.1 controller, and inverse-kinematics control with vision-guided pick-and-place.",
    "outcomes": [
      {"value": "6", "label": "axes"},
      {"value": "24", "label": "schematic sheets"},
      {"value": "65", "label": "STEP files"},
      {"value": "ROS2 Jazzy", "label": "driver stack"}
    ],
    "tech": ["SolidWorks", "Fusion 360", "KiCAD", "Teensy 4.1", "ROS2 Jazzy", "Python", "OpenCV"],
    "media": {"kind": "none"},
    "chapters": [
      {
        "id": "robot-arm-cad",
        "title": "CAD and mechanical design",
        "problem": [
          "A 3D-printed robot arm needs to balance stiffness, weight, and printability across six joints.",
          "Each link carries both its own motors and the load of everything downstream. Joint geometry and material choice directly impact positional accuracy."
        ],
        "constraints": [
          "3D printing in PETG on consumer hardware (Prusa MK4) limits layer adhesion and thermal cycling performance.",
          "Every joint must use standard M3 fasteners and heat-set inserts for repeatable assembly."
        ],
        "built": [
          "The arm is designed around closed-loop NEMA-17 steppers with TMC2209 drivers, with each link shaped to minimize print-in-place supports while maintaining torsional stiffness.",
          "SolidWorks handles primary structural design and FEA stress analysis on high-load joints. Fusion 360 covers organic fillets and export workflows.",
          "All joints use captured M3 heat-set inserts for repeatable disassembly. The full assembly is parameterized so link lengths and motor mount offsets can be adjusted without redrawing.",
          "The 3D model on the site is posed on the intended UR-style kinematic frames. The current printed V4 stack is a coaxial joint stack."
        ],
        "outcomes": [
          {"value": "6", "label": "axes"},
          {"value": "65", "label": "STEP files"},
          {"value": "Parametric", "label": "assembly for rapid iteration"},
          {"value": "Print-ready", "label": "STL pack with orientations"}
        ],
        "media": {"kind": "none"}
      },
      {
        "id": "robot-arm-v3-controller",
        "title": "V3 controller board",
        "problem": [
          "Coordinating six independent stepper motors requires precise timing, real-time fault detection, and bidirectional communication with high-level controllers.",
          "A breadboard of modules adds latency and debug friction compared to a single integrated board."
        ],
        "constraints": [
          "The PCB must fit inside the robot arm base without compromising structural integrity.",
          "Power delivery for six stepper motors plus microcontroller needs stable 5V and 3.3V rails with thermal headroom."
        ],
        "built": [
          "A four-layer KiCAD-designed PCB consolidates stepper motor control, Teensy 4.1 microcontroller, and regulated 5V and 3.3V power rails onto a single compact board.",
          "Four independent TMC2209 stepper driver footprints provide current control and diagnostics for each motor.",
          "The V2 engineering change order documents a corrected 5V regulated rail, Teensy 4.1 connection details and pinout, and a dedicated buck-rail power distribution sheet.",
          "Three written design reviews address Teensy connections, MCU comparison (ESP32-S3 versus Teensy 4.1), and final checklist. These confirm electrical correctness and thermal margins."
        ],
        "outcomes": [
          {"value": "4-layer", "label": "board design"},
          {"value": "24", "label": "schematic sheets"},
          {"value": "6x TMC2209", "label": "stepper drivers"},
          {"value": "3 design reviews", "label": "with decision trade-offs"}
        ],
        "media": {"kind": "image", "src": "/work/arm-v2-schematic.webp", "alt": "V2 PCB schematic diagram", "width": 1600, "height": 1000}
      },
      {
        "id": "robot-arm-firmware-ros2",
        "title": "Firmware and ROS2",
        "problem": [
          "Real-time control of six synchronized motors requires modular, maintainable firmware that separates motion control, safety, and communication concerns.",
          "External schedulers (like ROS2 trajectory_msgs) need a clean interface to command the arm without fighting over low-level details."
        ],
        "constraints": [
          "Firmware must enforce joint limits and detect electrical faults (stalled motors, overcurrent) in real time.",
          "ROS2 messaging overhead must not interfere with the stepper pulse timing (microsecond-level determinism)."
        ],
        "built": [
          "The firmware is organized into four modules: motion.cpp handles trajectory interpolation and velocity control, safety.cpp enforces joint limits and fault detection, protocol.cpp manages serial command framing, and PROTOCOL.md documents the interfaces.",
          "All modules build under PlatformIO targeting the Teensy 4.1, producing a unified binary with no external dependencies beyond the TMC2209 and motor drivers.",
          "The ROS2 Jazzy driver stack includes arm_bringup and arm_description packages with launch files and joint_limits.yaml for hardware constraints.",
          "Xbox controller and keyboard teleop nodes provide real-time joystick and keystroke input for manual control during commissioning."
        ],
        "outcomes": [
          {"value": "ROS2 Jazzy", "label": "driver stack"},
          {"value": "motion.cpp", "label": "trajectory control"},
          {"value": "Xbox and keyboard", "label": "teleop interface"},
          {"value": "Microsecond timing", "label": "stepper synchronization"}
        ]
      }
    ],
    "projectIds": ["robot-arm-v2", "robot-arm-cad", "pcb-robot-controller", "robot-arm-firmware-ros2", "armv2-pcb-eco"]
  },
  {
    "slug": "pi-fleet-edge-ml",
    "flagship": true,
    "title": "Twelve-node Pi cluster with edge inference",
    "subtitle": "Kubernetes, Hailo-8 NPU, YOLOv8 vision, Prometheus telemetry",
    "period": "2026",
    "role": "Infrastructure and ML",
    "summary": "A 12-node Raspberry Pi 4 and Pi 5 cluster running k3s Kubernetes, with Prometheus/Grafana observability. A Hailo-8 AI HAT runs real-time YOLOv8 object detection (26 TOPS) while Florence-2 vision-language models ground defects on production parts.",
    "outcomes": [
      {"value": "12", "label": "nodes"},
      {"value": "26 TOPS", "label": "Hailo-8 NPU"},
      {"value": "11", "label": "Ansible playbooks"},
      {"value": "k3s", "label": "orchestration"}
    ],
    "tech": ["Kubernetes (k3s)", "Ansible", "Prometheus", "Grafana", "Hailo-8 NPU", "YOLOv8", "Raspberry Pi 4/5", "Docker"],
    "media": {"kind": "none"},
    "chapters": [
      {
        "id": "pi-fleet",
        "title": "Infrastructure and Kubernetes",
        "problem": [
          "Running a distributed robotics pipeline requires managing multiple Raspberry Pi units across SSH, Docker images, and configuration files.",
          "Without infrastructure as code, each node becomes a snowflake and test environments don't mirror production."
        ],
        "constraints": [
          "Raspberry Pi hardware is resource-constrained (4GB to 8GB RAM per node, 2.4 GHz CPU).",
          "Network isolation on commodity WiFi limits throughput and reliability."
        ],
        "built": [
          "Every node is provisioned from a clean Raspberry Pi OS image using idempotent Ansible roles covering SSH hardening, package installation, static IP assignment, and service deployment.",
          "k3s provides lightweight Kubernetes orchestration for containerized workloads, with Helm charts tracked in the repository.",
          "Prometheus scrapes metrics from all nodes and feeds Grafana dashboards for CPU, memory, disk, and network visibility."
        ],
        "outcomes": [
          {"value": "12", "label": "nodes (Pi 4 and Pi 5)"},
          {"value": "11", "label": "Ansible playbooks"},
          {"value": "k3s", "label": "Kubernetes on edge"}
        ]
      },
      {
        "id": "homelab-monitoring",
        "title": "Observability and alerting",
        "problem": [
          "Distributed Pi fleet generates logs and metrics across 12 nodes. Without centralized collection, troubleshooting becomes manual log-digging on each machine.",
          "Alerts on CPU, memory, or network saturation need to surface quickly to prevent cascade failures."
        ],
        "constraints": [
          "Prometheus and Grafana themselves consume RAM and storage. The stack must run on the same constrained hardware it monitors.",
          "Alert rules must be specific enough to catch real issues without flooding on false positives."
        ],
        "built": [
          "Prometheus pulls metrics from every node at 30-second intervals; Grafana renders dashboards with node-level CPU, memory, disk, and network health.",
          "AlertManager triggers on CPU above 80%, memory above 85%, disk above 90%, and network errors. Each alert includes context and a runbook link.",
          "Loki (optional) ships container logs to a central store for historical analysis and debugging.",
          "The stack is fully containerized so upgrades roll across the fleet with zero downtime."
        ],
        "outcomes": [
          {"value": "Prometheus", "label": "metrics collection"},
          {"value": "Grafana", "label": "visualization"},
          {"value": "AlertManager", "label": "firing alerts"},
          {"value": "12-node visibility", "label": "in one UI"}
        ]
      },
      {
        "id": "yolov8-hailo",
        "title": "YOLOv8 on Hailo-8 NPU",
        "problem": [
          "Real-time object detection on a Raspberry Pi CPU alone is too slow for responsive visual feedback.",
          "Offloading to a GPU adds cost and power consumption. An edge NPU solves this on a Raspberry Pi form factor."
        ],
        "constraints": [
          "Hailo-8 output format (HEF) requires model compilation with quantization-aware calibration.",
          "The 26 TOPS compute budget must be shared between inference and any preprocessing."
        ],
        "built": [
          "Starting from an Ultralytics YOLOv8n checkpoint, the model is exported to ONNX and compiled to Hailo Executable Format with quantization-aware calibration on a representative COCO subset.",
          "The compiled HEF runs entirely on the Hailo-8 AI HAT+ (26 TOPS) over PCIe, leaving all four CPU cores free for pre and post processing.",
          "The first working pipeline re-entered network group activation and reopened the inference streams on every frame. Opening both once at startup took a 500-frame benchmark from 80.99 to 144.74 FPS, with p50 latency falling from 12.06 to 6.84 ms and p95 from 13.10 to 7.31 ms.",
          "Fixed a drawing bug that swapped x and y on every box, and made the live loop infer only new frames so its FPS is real throughput. A USB webcam ran 60 s at 15.0 FPS with every frame inferred: the camera is the bottleneck, not the NPU."
        ],
        "outcomes": [
          {"value": "26 TOPS", "label": "Hailo-8 inference"},
          {"value": "144.7 FPS", "label": "yolov8n 640x640, up from 81"},
          {"value": "6.8 ms", "label": "p50 inference latency"},
          {"value": "YOLOv8n", "label": "compiled to HEF"}
        ]
      },
      {
        "id": "edge-defect-detection",
        "title": "VLM-based defect grounding",
        "problem": [
          "Traditional object detection requires a fine-tuned model for each defect class. Training data collection is tedious and models overfit to specific lighting or part geometry.",
          "Open-vocabulary grounding with a vision-language model removes the need for dataset labeling."
        ],
        "constraints": [
          "VLMs like Florence-2 are memory-heavy. Splitting the vision tower (to Hailo) and language head (to CPU) requires careful model export and stitching.",
          "Inference latency must stay under 5 seconds per frame for practical inspection station speed."
        ],
        "built": [
          "The pipeline pivots from a classic YOLO fine-tune toward open-vocabulary defect grounding with Microsoft Florence-2. The DaViT vision tower exports to ONNX and compiles to a Hailo-8 HEF (26 TOPS, AI HAT) so the encoder runs on the NPU while the language head and decoder run on the Pi 5 CPU at roughly 2 to 4 seconds per frame.",
          "Well-matched to a defect inspection station rather than a real-time line. Prompts use the `<CAPTION_TO_PHRASE_GROUNDING>` task with defect classes (scratch, crack, chip, missing pin, dent) and return bounding boxes plus natural-language explanations.",
          "A systemd service runs Flask dashboard for interactive image upload, with Docker Compose staging the full inference pipeline.",
          "A CPU-only fallback path runs Florence-2 entirely on the Pi 5 CPU if HEF compilation of the vision tower stalls."
        ],
        "outcomes": [
          {"value": "Open-vocabulary", "label": "defect grounding"},
          {"value": "No labeled dataset", "label": "required"},
          {"value": "2-4 sec/frame", "label": "inference on Pi 5"},
          {"value": "Flask + Docker", "label": "staging pipeline"}
        ]
      },
      {
        "id": "server-rack-enclosure",
        "title": "Mechanical enclosure",
        "problem": [
          "12 Raspberry Pi units need organized mounting, cable routing, and passive cooling in a compact form factor.",
          "A loose stack overheats and tangles cables. A proper rack provides structure and airflow."
        ],
        "constraints": [
          "Standard racks are too large for a small lab footprint.",
          "3D-printed plastic adds constraints on load-bearing capacity."
        ],
        "built": [
          "The enclosure is a server-rack-compatible cabinet designed to house all 12 Raspberry Pi 4 and Pi 5 units in a vertical stack.",
          "The pi4_rack part provides mounting slots for each compute node with airflow channels for passive cooling between each tier.",
          "Side-wall bases add structural support and cable management channels for Ethernet and power distribution.",
          "The full assembly includes aluminum mounting rails, power-distribution busbar clips, and preparation for future network switch and storage integration."
        ],
        "outcomes": [
          {"value": "12-node", "label": "vertical stack"},
          {"value": "Passive cooling", "label": "airflow channels"},
          {"value": "Cable management", "label": "integrated"},
          {"value": "Expandable", "label": "for future gear"}
        ]
      }
    ],
    "projectIds": ["pi-fleet", "homelab-monitoring", "yolov8-hailo", "edge-defect-detection", "server-rack-enclosure"]
  },
  {
    "slug": "plc-controls",
    "flagship": true,
    "title": "PLC integration and a controls lab",
    "subtitle": "Allen Bradley bridge, Modbus, OPC-UA, hardware-free CI",
    "period": "2026",
    "role": "Controls",
    "summary": "A Python bridge to Allen Bradley Studio 5000 exposing tags over EtherNet/IP and OPC-UA. A hardware-free controls lab runs PLC ladder logic in Factory I/O simulator with full sensor and actuator simulation for continuous integration.",
    "outcomes": [
      {"value": "EtherNet/IP + OPC-UA", "label": "one interface"},
      {"value": "Simulator", "label": "hardware-free CI"},
      {"value": "IEC 61131-3", "label": "OpenPLC on Opta"},
      {"value": "Modbus TCP", "label": "station link"}
    ],
    "tech": ["Python", "Allen Bradley Studio 5000", "EtherNet/IP", "OPC-UA", "Modbus TCP", "Factory I/O", "OpenPLC"],
    "media": {"kind": "none"},
    "chapters": [
      {
        "id": "plc-python-bridge",
        "title": "Allen Bradley tag I/O bridge",
        "problem": [
          "Studio 5000 runs on Windows in the plant but Python analytics and robotics code run on Linux or Raspberry Pi.",
          "Pulling PLC tag state requires either expensive gateway hardware or reinventing the wheel with custom socket code."
        ],
        "constraints": [
          "EtherNet/IP packet parsing is proprietary and undocumented. Leveraging existing libraries saves weeks of reverse engineering.",
          "Tag reads must be low-latency (under 100 ms) to stay responsive for real-time control loops."
        ],
        "built": [
          "A Python bridge using the pycomm3 library establishes an EtherNet/IP connection to the Allen Bradley CompactLogix controller.",
          "Tag state is published over OPC-UA so both legacy SCADA systems and modern cloud integrations can subscribe.",
          "A Modbus TCP shim translates between continuous-process sensor readings (analog scalars, array data) and the discrete 16-bit registers Modbus expects.",
          "The bridge runs as a systemd service with automatic reconnect and diagnostic logging for fault isolation."
        ],
        "outcomes": [
          {"value": "EtherNet/IP", "label": "to Python bridge"},
          {"value": "OPC-UA", "label": "publish layer"},
          {"value": "Modbus TCP", "label": "legacy compatibility"},
          {"value": "<100 ms", "label": "tag read latency"}
        ]
      },
      {
        "id": "plc-virtual-lab",
        "title": "Hardware-free controls lab",
        "problem": [
          "Learning PLC programming requires hardware: a real controller, I/O cards, sensors, and actuators. Cost and safety liability block experimentation.",
          "Continuous integration for PLC code is nearly impossible without a simulator that tracks state across test runs."
        ],
        "constraints": [
          "A simulator must behave like real hardware: sensor reads must complete in the same cycle time as a real PLC (10-50 ms), and state must persist across rungs.",
          "Ladder logic relies on rising/falling edge detection and boolean latch logic that simulators often oversimplify."
        ],
        "built": [
          "Factory I/O provides a complete plant simulator: conveyor belts, sensors (proximity, photoelectric), pneumatic actuators, and a visual timeline of state changes.",
          "Ladder logic runs in Studio 5000 Echo (a free IDE) and connects to Factory I/O over Modbus TCP.",
          "A pytest harness logs the simulator state after each rung cycle and compares against expected behavior (e.g., motor on after detect, motor off after timeout).",
          "The entire lab (IDE, simulator, test suite) runs in Docker Compose, so any developer can spin up a full environment in one command."
        ],
        "outcomes": [
          {"value": "Simulator", "label": "Factory I/O + Modbus"},
          {"value": "IEC 61131-3", "label": "Studio 5000 Echo"},
          {"value": "pytest CI", "label": "automated verification"},
          {"value": "Docker Compose", "label": "full reproducibility"}
        ]
      }
    ],
    "projectIds": ["plc-python-bridge", "plc-virtual-lab"]
  },
  {
    "slug": "lanl-glovebox",
    "flagship": false,
    "title": "LANL Robotic Glovebox",
    "subtitle": "UR5e glovebox automation with a flight-stick digital twin",
    "period": "Aug 2023 to Apr 2024",
    "role": "Project Manager, 3-person team, ASU capstone sponsored by Los Alamos National Laboratory",
    "summary": "An 8-month LANL-sponsored capstone automating glovebox operations with a 6-DOF UR5e. I managed the 3-person team and built the teleoperation layer: a flight-stick digital twin driving the physical arm through a Python bridge.",
    "outcomes": [
      {"value": "100%", "label": "project milestones delivered"},
      {"value": "6-DOF", "label": "UR5e workcell"},
      {"value": "PM", "label": "led 3-person team"}
    ],
    "tech": ["UR5e", "URScript", "RoboDK", "SolidWorks", "Python", "Digital twin teleoperation"],
    "media": {"kind": "none"},
    "chapters": [
      {
        "id": "glovebox-automation",
        "title": "Robotic glovebox automation",
        "problem": [
          "Glovebox work puts human operators in awkward, fatiguing postures around hazardous material handling. A strong candidate for robotic assistance.",
          "LANL needed a demonstration that a collaborative arm could perform glovebox tasks under intuitive human control."
        ],
        "constraints": [
          "University capstone timeline and budget. 8 months, 3 students, fixed milestone schedule with an external national-lab sponsor.",
          "Operators are not roboticists. Control had to be intuitive enough to use without teach-pendant expertise."
        ],
        "built": [
          "Workcell design in SolidWorks around a 6-DOF UR5e.",
          "Motion simulation and validation in RoboDK before any hardware moves.",
          "URScript control routines for the glovebox task sequences.",
          "A flight-stick digital twin: a Python bridge maps joystick input onto a simulated twin and the physical arm, giving operators direct, intuitive teleoperation."
        ],
        "outcomes": [
          {"value": "100%", "label": "milestones delivered"},
          {"value": "6-DOF", "label": "UR5e deployed"},
          {"value": "Flight-stick", "label": "digital twin control"},
          {"value": "8 months", "label": "capstone timeline"}
        ]
      }
    ],
    "projectIds": []
  }
] satisfies CaseStudy[]

export const flagshipStudies = caseStudies.filter(cs => cs.flagship)

export const caseStudyBySlug: Record<string, CaseStudy> = {}
caseStudies.forEach(cs => {
  caseStudyBySlug[cs.slug] = cs
})
