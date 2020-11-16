import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BLOGS } from "../blogs";

@Component({
  selector: "app-blog-holder",
  templateUrl: "./blog-holder.component.html",
  styleUrls: ["./blog-holder.component.scss"],
})
export class BlogHolderComponent implements OnInit {
  blog;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      const slug = params.id.toLowerCase();
      this.blog = BLOGS.find((b) => b.slug.toLowerCase() == slug);
      console.log(slug, this.blog);
    });
  }

  ngOnInit(): void {}
}
