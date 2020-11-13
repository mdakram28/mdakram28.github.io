import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ProjectsComponent } from './projects-section/projects.component';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { GalleryModule } from 'ng-gallery';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { FormsModule } from '@angular/forms';
import { HacksSectionComponent } from './hacks-section/hacks-section.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProjectsComponent,
    HacksSectionComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ModalModule.forRoot(),
    GalleryModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    ButtonsModule.forRoot(),
    ScullyLibModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
