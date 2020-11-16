import { AfterViewInit, Component, HostListener } from "@angular/core";

declare const $;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
  }
}
