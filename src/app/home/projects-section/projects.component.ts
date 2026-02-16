import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import {
  ProjectOpenVMM,
  ProjectRoverX,
  ProjectSyncLib,
  ProjectVideoLab,
  ProjectMediaParsers,
  ProjectThorstream,
} from "./projects/resume-projects";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { Project } from "./project.model";
import { GalleryItem, ImageItem } from "ng-gallery";

@Component({
  selector: "app-projects-section",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"],
})
export class ProjectsComponent implements OnInit {
  projects = [
    ProjectOpenVMM,
    ProjectRoverX,
    ProjectSyncLib,
    ProjectVideoLab,
    ProjectMediaParsers,
    ProjectThorstream,
  ];

  viewType = "grid";

  // Modal properties
  @ViewChild("modelTemplate") public modelTemplate: TemplateRef<any>;
  public modalRef: BsModalRef;
  public project: Project;
  images: GalleryItem[];

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void { }

  openProjectModal(project) {
    this.project = project;
    this.images = (project.gallery || []).map((src) => new ImageItem({ src, thumb: src }));
    setTimeout(() => {
      this.modalRef = this.modalService.show(this.modelTemplate, {
        class: "modal-custom-lg",
      });
    }, 100);
  }
}
