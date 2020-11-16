import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { ProjectDevbox } from "./projects/devbox";
import { ProjectOpenart } from "./projects/openart";
import { ProjectPtcloud } from "./projects/ptcloud";
import { ProjectCodeboard } from "./projects/codeboard";
import { ProjectAgroshare } from "./projects/agroshare";
import { ProjectJ3d } from "./projects/j3d";
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
    ProjectJ3d,
    ProjectAgroshare,
    ProjectCodeboard,
    ProjectPtcloud,
    ProjectDevbox,
    ProjectOpenart,
  ];

  viewType = "grid";

  // Modal properties
  @ViewChild("modelTemplate") public modelTemplate: TemplateRef<any>;
  public modalRef: BsModalRef;
  public project: Project;
  images: GalleryItem[];

  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {}

  openProjectModal(project) {
    this.project = project;
    this.images = project.gallery.map((src) => new ImageItem({ src, thumb: src }));
    setTimeout(() => {
      this.modalRef = this.modalService.show(this.modelTemplate, {
        class: "modal-custom-lg",
      });
    }, 100);
  }
}
