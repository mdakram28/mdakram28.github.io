import { AfterViewInit, Component, OnInit } from "@angular/core";
import { Hack, HACKS } from "./hacks";

declare const $;

@Component({
  selector: "app-hacks-section",
  templateUrl: "./hacks-section.component.html",
  styleUrls: ["./hacks-section.component.scss"],
})
export class HacksSectionComponent implements OnInit, AfterViewInit {
  hacks: Hack[] = HACKS;
  collapsed = true;

  constructor() {}

  ngOnInit(): void {}

  toggleCollapsed() {
    this.collapsed = !this.collapsed;
    setTimeout(() => {
      if(this.collapsed) {
        document.querySelector('#Appathon').scrollIntoView();
      }
    }, 1);
  }

  openHack(hack: Hack) {
    window.open(hack.link, "_blank");
  }

  ngAfterViewInit() {
    const panel = $("#hacks > .resume-section-content");
    const width = panel[0].scrollWidth;
    const to = panel.scrollLeft() + ((panel.scrollLeft() >= width) ? (-width) : (width));
    console.log(to);
    // setTimeout(() => {
    //   $("#hacks > .resume-section-content").animate({
    //     scrollLeft: to
    //   }, 100000);
    // }, 10000);
    
  }
}
