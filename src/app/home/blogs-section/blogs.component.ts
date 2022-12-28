import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { GalleryItem, ImageItem } from "ng-gallery";
import blogPosts from '../../../blogs/blogs.json';

@Component({
  selector: "app-blogs-section",
  templateUrl: "./blogs.component.html",
  styleUrls: ["./blogs.component.scss"],
})
export class BlogsComponent implements OnInit {
  viewType = "grid";

  // Modal properties
  @ViewChild("modelTemplate") public modelTemplate: TemplateRef<any>;
  public modalRef: BsModalRef;
  public blogPosts = blogPosts;
  images: GalleryItem[];

  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {}
}
