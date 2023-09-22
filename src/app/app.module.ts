import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatabaseServices } from './services/database.services'
import { VerticalBarsTimelineComponent } from "./modules/echarts/vertical-bars-timeline/vertical-bars-timeline.component";

import { AppComponent } from './app.component';
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { HttpClientModule } from "@angular/common/http";
import { NgxEchartsModule } from "ngx-echarts";
import { EchartsModule } from "./modules/echarts/echarts.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientInMemoryWebApiModule.forRoot(DatabaseServices),
    HttpClientModule,

    EchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
