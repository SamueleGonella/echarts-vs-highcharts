import { CommonModule, NgFor, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { BigTreeChart } from './vertical-bars-timeline/big-tree.component';
import { VerticalBarsTimelineComponent } from './vertical-bars-timeline/vertical-bars-timeline.component';

@NgModule({
  declarations: [VerticalBarsTimelineComponent, BigTreeChart],
  imports: [
    CommonModule,
    HttpClientModule,
    NgIf,
    NgFor,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  exports: [VerticalBarsTimelineComponent],
  bootstrap: [],
})
export class EchartsModule {}
