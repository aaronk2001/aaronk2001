import { ExperienceEntry } from './types'

export const experience = [
 {
 "org": "Handwrytten",
 "role": "Robotics Engineer II",
 "dates": "Sep 2023 to Sep 2026",
 "note": "Promoted from Robotics Engineer Intern (Sep 2023 to Jun 2024) in 10 months",
 "body": "Helped scale a proprietary fleet of robotic handwriting machines from 0 to 200+ units producing 30,000 letters/day. 3× output growth. Led the ramp team of 6 (2 engineers, 4 technicians) deploying ~6 machines/week. Designed and built 2 automated inspection machines on Arduino Opta and Portenta Machine Control PLCs, cutting labor cost $100K+/year, and deployed YOLO/PyTorch vision inspecting 30,000 letters/day in real time. Stood up fleet telemetry: live machine status to AWS, an SQL pipeline computing OEE (96% uptime), and Prometheus/Grafana fault detection that cut MTTR from 10 to 3.5 hours. Shipped 4 custom PCBs (EasyEDA) to the fleet and stood up a fabrication cell producing 500+ parts/month, cutting custom-part lead time from 4+ weeks to under 1 week. Installed and supported leased robots at customer sites across the US with a 24-hour response and 90%+ customer uptime.",
 "highlights": [
 "0 to 200+ machines",
 "30,000 letters/day (3×)",
 "96% uptime (OEE)",
 "MTTR 10h to 3.5h",
 "$100K+/year labor saved",
 "Field installs at US customer sites: 24h response, 90%+ uptime"
 ]
 },
 {
 "org": "Los Alamos National Laboratory × ASU",
 "role": "Project Manager, Robotic Glovebox Capstone",
 "dates": "Aug 2023. Apr 2024",
 "body": "Led a 3-person team through an 8-month LANL-sponsored project automating glovebox operations with a 6-DOF UR5e. Designed the workcell in SolidWorks, simulated and validated motion in RoboDK, and wrote URScript control routines. Built a flight-stick digital twin via a Python bridge for intuitive teleoperation. Delivered 100% of project milestones.",
 "highlights": [
 "6-DOF UR5e",
 "Flight-stick digital twin",
 "100% milestones",
 "PM. 3-person team"
 ]
 },
 {
 "org": "Arizona State University",
 "role": "B.S.E. Robotics Engineering. Ira A. Fulton Schools of Engineering",
 "dates": "Graduated Dec 2024",
 "body": "Coursework covered kinematics, control systems, embedded systems, computer vision, and machine learning. Senior capstone: the LANL robotic glovebox project above.",
 "highlights": []
 }
] satisfies ExperienceEntry[]
