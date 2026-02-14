import { Component } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  title = "portfolio";

  counts = {
    awards: 12,
    hacks: 24,
    projects: 42,
  };

  experience = [
    {
      role: "Senior Software Engineer",
      company: "Confluent",
      location: "Remote, Canada",
      date: "Dec 2024 — Present",
      description: "Developing enterprise Kafka for Confluent cloud. Working on high-throughput low-latency distributed storage for kafka.",
      tags: ["Kafka", "Distributed Systems", "Java", "Storage"],
    },
    {
      role: "Software Engineer",
      company: "Huawei",
      location: "Toronto, Canada",
      date: "Apr 2024 — Dec 2024",
      description: "Designed high throughput (~ 600 Mbps/node) change data capture in a cloud-native database (GaussDB) in C++. Extended PostgreSQL database to support columnar storage in GaussDB optimized for analytical query processing.",
      tags: ["C++", "Distributed Database", "PostgreSQL", "CDC"],
    },
    {
      role: "Research Assistant & Teaching Assistant",
      company: "University of Calgary",
      location: "Calgary, Canada",
      date: "Sep 2021 — Apr 2024",
      description: "Published 3 research papers on video streaming at renowned conferences. Worked with AT&T Labs on HTTP Adaptive Streaming over QUIC.",
      tags: ["Video Streaming", "QUIC", "Research"],
    },
    {
      role: "Software Engineer",
      company: "InterDigital",
      location: "Montreal, Canada",
      date: "Sep 2023 — Jan 2024",
      description: "Developed end-to-end VPCC point cloud video (XR) and haptics streaming library over WebRTC in C++. Built MP4 packager for MIHS immersive media.",
      tags: ["C++", "WebRTC", "XR"],
    },
    {
      role: "Google Summer of Code, VideoLAN (VLC)",
      company: "VideoLAN",
      location: "Remote",
      date: "May 2023 — Aug 2023",
      description: "Implemented 20 different playlist format parsers and VLC core modules in Rust with C++ interoperability.",
      tags: ["Rust", "VLC", "C++", "Open Source"],
    },
    {
      role: "Software Engineer",
      company: "Schlumberger",
      location: "Pune, India",
      date: "Jun 2019 — Aug 2021",
      description: "Led the development of ProSource, a kubernetes based Oil & Gas data processing system using C++, Java (Spring), Angular, PostgreSQL. Developed 99.8% available data ingestion services in Python (Flask) and Java on GCP and Azure.",
      tags: ["Python", "Java", "Kubernetes", "GCP", "Azure"],
    },
  ];

  showHiddenExperience = false;

  skills = [
    {
      category: "Languages",
      tags: ["C++", "Rust", "Java", "Python"]
    },
    {
      category: "Database Internals",
      tags: ["Distributed Storage", "Kafka", "LSM Trees", "Columnar Storage", "CDC"]
    },
    {
      category: "Systems & Networking",
      tags: ["Multithreading", "Linux Kernel", "TCP/IP", "QUIC / HTTP/3", "Memory Management"]
    }
  ];

  education = [
    {
      degree: "Master of Science — Computer Science",
      school: "University of Calgary, Canada",
      date: "2021 — 2023",
    },
    {
      degree: "Bachelor of Technology — Information Technology",
      school: "Vellore Institute of Technology, India",
      date: "2015 — 2019",
    },
  ];

  publications = [
    {
      title: "TASQ: Temporal Adaptive Streaming over QUIC",
      venue: "Research with AT&T Labs — HTTP Adaptive Streaming leveraging AV1 GOP structure and QUIC transport",
    },
    {
      title: "IStream Player — A Novel Streaming Video Player and Framework",
      venue: "Supports 360° video, live streaming, DASH, HLS, QUIC (HTTP/3), TCP, and detailed statistics",
    },
    {
      title: "Bheem OS — A Next-Generation Reasonably Secure OS Using Rust MicroVMs",
      venue: "Published research on secure operating system design using Rust-based micro virtual machines",
    },
  ];

  toggleExperience(job: any) {
    job.collapsed = !job.collapsed;
  }

  constructor(private titleService: Title, private meta: Meta) {
    if (window.location.pathname.toLowerCase().startsWith("/av1-parser-gui")) {
      window.location.pathname = "media-parser-gui";
    }
  }

  goto(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
}
