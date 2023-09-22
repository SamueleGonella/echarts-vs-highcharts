import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalBarsTimelineComponent } from './vertical-bars-timeline/vertical-bars-timeline.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { BigTreeChart } from './vertical-bars-timeline/big-tree.component';



@NgModule({
  declarations: [
    VerticalBarsTimelineComponent,
    BigTreeChart
  ],
  imports: [
    CommonModule,    
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  exports: [
    VerticalBarsTimelineComponent
  ],
  bootstrap: []
})
export class EchartsModule { }
