import { Site, Stat, NowBlock, AboutBlock, ContactBlock } from './types'

export const site: Site = {
 "name": "Aaron Karsten",
 "role": "Robotics and Automation Engineer",
 "tagline": "Robotics engineer who scaled a fleet of 200+ handwriting machines and built PLC automation, vision QA, and edge ML systems.",
 "location": "Tempe, AZ",
 "url": "https://aaronk2001.github.io",
 "description": "Robotics engineer who scaled a fleet of 200+ handwriting machines and built PLC automation, vision QA, and edge ML systems.",
 "keywords": [
  "robotics engineer",
  "controls engineer",
  "automation engineer",
  "PLC programming",
  "Codesys PLC programming",
  "computer vision",
  "KiCad PCB design",
  "ROS2",
  "Raspberry Pi",
  "embedded Linux",
  "Tempe AZ"
 ],
 "nav": [
 {
 "label": "Work",
 "href": "#work"
 },
 {
 "label": "Projects",
 "href": "#projects"
 },
 {
 "label": "Experience",
 "href": "#experience"
 },
 {
 "label": "Contact",
 "href": "#contact"
 }
 ]
}

export const hero = {
 "headline": "Aaron Karsten",
 "valueLine": "I took a fleet of robotic handwriting machines from zero to 200+ units. I build the PLC automation, vision QA, custom PCBs, and telemetry that keep production running.",
 "ctaPrimary": {
 "label": "See the work",
 "href": "#work"
 },
 "ctaSecondary": {
 "label": "Download résumé",
 "href": "/resume.pdf",
 "download": "aaron-karsten-resume.pdf"
 },
 "availability": "Tempe, AZ. Open to robotics, controls and automation roles, Phoenix metro or remote."
}

export const proofStats = [
 {
 "id": "machines",
 "value": "200+",
 "label": "machines in production"
 },
 {
 "id": "letters",
 "value": "30,000",
 "label": "letters per day"
 },
 {
 "id": "uptime",
 "value": "96%",
 "label": "fleet uptime (OEE)"
 },
 {
 "id": "mttr",
 "value": "10 h to 3.5 h",
 "label": "mean time to repair"
 }
] satisfies Stat[]

export const stats = [
 {
 "id": "stat-0",
 "value": "200+",
 "label": "Robot Fleet",
 "sub": "0 to 200+ proprietary machines"
 },
 {
 "id": "stat-1",
 "value": "30,000",
 "label": "Letters / Day",
 "sub": "3x growth from 10,000"
 },
 {
 "id": "stat-2",
 "value": "96%",
 "label": "Fleet Uptime",
 "sub": "availability via OEE, live status to AWS"
 },
 {
 "id": "stat-3",
 "value": "10h to 3.5h",
 "label": "MTTR Improved",
 "sub": "65% faster via Prometheus/Grafana telemetry"
 },
 {
 "id": "stat-4",
 "value": "$100K+",
 "label": "Labor Saved / Year",
 "sub": "2 automated PLC inspection machines"
 },
 {
 "id": "stat-5",
 "value": "6 / week",
 "label": "Machines Built",
 "sub": "at peak, with a 6-person ramp team"
 },
 {
 "id": "stat-6",
 "value": "500+",
 "label": "Fab Cell",
 "sub": "parts/month, lead time 4+ weeks to under 1"
 },
 {
 "id": "stat-7",
 "value": "98.7%",
 "label": "Fleet Quality",
 "sub": "average quality rate (OEE)"
 }
] satisfies Stat[]

export const now = {
 "updated": "September 2026",
 "items": [
 {
 "title": "CODESYS + Factory I/O controls sprint",
 "detail": "ladder and ST against simulated plants"
 },
 {
 "title": "V3 ARM controller PCB",
 "detail": "SKiDL to KiCad netlist, ESP32-S3 motor drive"
 },
 {
 "title": "Edge ML on Hailo-8",
 "detail": "YOLOv8 + VLM defect inspection (26 TOPS)"
 }
 ]
} satisfies NowBlock

export const about = {
 "paragraphs": [
 "I’m a robotics engineer based in Tempe, Arizona. At Handwrytten I helped scale a fleet of proprietary robotic handwriting machines from 0 to 200+ units producing 30,000 letters a day. I built the automated inspection machines, shipped custom PCBs, and ran the telemetry that keeps it all in production.",
 "My background spans the full stack of physical engineering: from SolidWorks CAD and KiCAD PCB design to YOLOv8 computer vision on edge hardware (Hailo-8, Raspberry Pi 5) and PLC programming in Codesys and on Arduino Opta. I’m currently adding welding to that list. Phase 1 MIG is underway.",
 "The work I care most about sits where hardware and software meet. Hardware is the harder thing to fake, and the discipline that keeps software honest. My Handwrytten role ended in September 2026, so I’m looking for the next one. Robotics, controls, or automation engineering, in the Phoenix metro or remote."
 ],
 "portrait": {
 "kind": "image",
 "src": "/aaron-portrait.jpg",
 "alt": "Aaron Karsten",
 "width": 1200,
 "height": 1500
 }
} satisfies AboutBlock

export const contact = {
 "heading": "Contact",
 "body": "Open to conversations about robotics, controls, and automation roles.",
 "linkedin": "https://www.linkedin.com/in/aaron-karsten",
 "resume": "/resume.pdf",
 "location": "Tempe, AZ"
} satisfies ContactBlock
