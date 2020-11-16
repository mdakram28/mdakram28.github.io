import { Project } from "../project.model";

export const ProjectDevbox: Project = {
  title: "DevBox",

  thumbnail: "/assets/img/proj_devbox_1.png",
  thumbnail_bg: "#363636",
  thumbnail_size: "contain",

  tags: ["Kubernetes", "Angular", "MongoDB", "GCP", "Python", "Flask"],

  subtitle: "A tool to automate bug classification in large microservices environment",
  description:
    "A tool that can detect, cluster and predict faults in microservices based" +
    " distributed cloud service using trace logs and system resource metrics from individual nodes at the time of failure.",
  gallery: [],

  links: [],

  readmeSrc: "",
};
