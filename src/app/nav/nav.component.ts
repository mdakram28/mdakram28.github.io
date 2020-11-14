import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"],
})
export class NavComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  goto(id: string) {
    window.location.href = "#" + id;
  }
}
