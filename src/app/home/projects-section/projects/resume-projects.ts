import { Project } from "../project.model";

export const ProjectThorstream: Project = {
    title: "Thorstream",
    subtitle: "Distributed Streaming Broker in Rust",
    thumbnail: "/assets/projects/resume/thorstream.png",
    thumbnail_size: "cover",
    thumbnail_bg: "#1f3558",
    description:
        "Built a Rust event streaming broker with append-only segmented logs, Kafka protocol endpoint, custom protocol server, quorum replication, deterministic leader election, and compatibility APIs (Kafka Connect/Schema Registry).",
    tags: ["Rust", "Distributed Systems", "Kafka", "Replication", "Observability"],
    gallery: [],
    readmeSrc: "https://raw.githubusercontent.com/mdakram28/thorstream/main/README.md",
    links: [
        { type: "github", url: "https://github.com/mdakram28/thorstream" },
        { type: "website", url: "https://mdakram.com/thorstream/" },
    ],
};

export const ProjectCodeBoard: Project = {
    title: "CodeBoard",
    subtitle: "Online Judge & Contest Platform",
    thumbnail: "/assets/img/proj_codeboard_1.png",
    thumbnail_size: "cover",
    thumbnail_bg: "#2a2f45",
    description:
        "Built a full-stack coding contest platform with challenge authoring, testcase administration, queued code execution for C++/Java/Python/Node, and realtime scoring feedback over Socket.IO.",
    tags: ["Node.js", "Express", "MongoDB", "Socket.IO", "Code Execution"],
    gallery: [],
    readmeSrc: "/assets/projects/readmes/codeboard.md",
    links: [{ type: "github", url: "https://github.com/mdakram28/codeboard" }],
};

export const ProjectDAgro: Project = {
    title: "DAgro",
    subtitle: "Blockchain-Powered Agriculture Marketplace",
    thumbnail: "/assets/img/proj_agroshare_1.jpg",
    thumbnail_size: "cover",
    thumbnail_bg: "#2d5034",
    description:
        "Implemented a smart-contract-powered agriculture marketplace DApp with on-chain membership, share ownership, deposits/withdrawals, and task lifecycle flows using Solidity + Web3 + Truffle.",
    tags: ["Solidity", "Ethereum", "Web3.js", "Truffle", "DApp"],
    gallery: [],
    readmeSrc: "https://raw.githubusercontent.com/mdakram28/dagro/main/README.md",
    links: [{ type: "github", url: "https://github.com/mdakram28/dagro" }],
};

export const ProjectJ3DEngine: Project = {
    title: "J3D Engine",
    subtitle: "Software 3D Rendering Engine in Java",
    thumbnail: "/assets/img/proj_j3d_1.jpg",
    thumbnail_size: "cover",
    thumbnail_bg: "#ededed",
    description:
        "Built a Java software 3D renderer with reusable shape primitives, projection and clipping math, depth-aware plane ordering, and interactive camera controls driven by keyboard events.",
    tags: ["Java", "3D Rendering", "Linear Algebra", "Engine Design"],
    gallery: [],
    readmeSrc: "https://raw.githubusercontent.com/mdakram28/j3d/main/readme.md",
    links: [{ type: "github", url: "https://github.com/mdakram28/j3d" }],
};

export const ProjectMediaParsers: Project = {
    title: "Media Parsers GUI",
    subtitle: "Web-based Media Analyzer",
    thumbnail: "/assets/projects/resume/mediaparser.png",
    thumbnail_size: "cover",
    thumbnail_bg: "#4caf50", // Green
    description:
        "Built a browser-only multimedia parser GUI for AV1/HEVC/MP4/IVF with container auto-detection, syntax tree inspection, integrated hex view, and track extraction/downloading.",
    tags: ["TypeScript", "React", "Bitstream Parsing", "AV1", "HEVC"],
    gallery: [],
    readmeSrc: "https://raw.githubusercontent.com/mdakram28/media-parser-gui/main/README.md",
    links: [
        { type: "github", url: "https://github.com/mdakram28/media-parser-gui" },
        { type: "website", url: "https://mdakram.com/media-parser-gui/" },
    ],
};

export const ProjectOpenArt: Project = {
    title: "OpenArt",
    subtitle: "Content Provenance on Blockchain + IPFS",
    thumbnail: "/assets/projects/resume/openart.png",
    thumbnail_size: "contain",
    thumbnail_bg: "#ffffff",
    description:
        "Built a decentralized media-sharing prototype where files are uploaded to IPFS and ownership/payment state is tracked through Ethereum smart contracts for provenance and anti-plagiarism workflows.",
    tags: ["IPFS", "Ethereum", "Web3.js", "Smart Contracts", "DApp"],
    gallery: [],
    readmeSrc: "https://raw.githubusercontent.com/mdakram28/openart/main/README.md",
    links: [{ type: "github", url: "https://github.com/mdakram28/openart" }],
};
