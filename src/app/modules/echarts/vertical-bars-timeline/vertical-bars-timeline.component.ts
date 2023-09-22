import { Component } from '@angular/core';
import 'echarts/theme/macarons.js';
import 'echarts/dist/extension/bmap.min.js';
import * as echarts from 'echarts/types/dist/echarts';
import { EchartsModule } from '../echarts.module';
import { EChartsOption } from 'echarts/types/dist/echarts';


@Component({
  selector: 'app-vertical-bars-timeline',
  templateUrl: './vertical-bars-timeline.component.html',
  styleUrls: ['./vertical-bars-timeline.component.css'],
})

export class VerticalBarsTimelineComponent {
  echartsInstance: any;

  onChartInit(ec: any) {
    this.echartsInstance = ec;
  }
  
  resizeChart() {
    if (this.echartsInstance) {
      this.echartsInstance.resize();
    }
  }

chartOption1: EChartsOption = {
  yAxis: {
    type: 'category',
    data: ['1111', '2222', '3333', '4444', '5555', '6666', '7777', '8888', '9999'],
  },
  xAxis: {
    type: 'value',
  },
  series: [
    {
      data: [836, 1376, 756, 1208, 355, 1162, 945, 267, 478,],
      type: 'bar',
    },
  ],
};


chartOption2: EChartsOption = {
  xAxis: {
    type: 'category',
    data: ['1111', '2222', '3333', '4444', '5555', '6666', '7777', '8888', '9999'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [836, 1376, 756, 1208, 355, 1162, 945, 267, 478,],
      type: 'bar',
    },
  ],
};

chartOption3: EChartsOption = {
  xAxis: {
    type: 'category',
    data: ['1111', '2222', '3333', '4444', '5555', '6666', '7777', '8888', '9999'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [836, 1376, 756, 1208, 355, 1162, 945, 267, 478,],
      type: 'line',
    },
  ],
};





  chartOption4: EChartsOption = {
    color: ['#80FFA5', '#E10000', '#37A2FF', '#FF0087', '#FFBF00'],
    title: {
        text: 'Blyat'
    },
    tooltip: {    //per sottolineare linee verticali per settori
      trigger: 'axis',  //givva piccola label quando su un asse
      axisPointer: {
        type: 'cross', //tipo di sottolineamento
        label: {
          backgroundColor: '#6a7985' //NON LO SO
        }
      }
    },
    /*grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },*/
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,  //se dall divisione o in mezzo alla divisione
        data: ['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'VERDE',
        type: 'line',
        stack: 'Total',  //mette dati uno sopra l'altro per somma di dati (es, vendite di tipi di prodotti sommate)
        smooth: true,   // se curvo o spezzettato
        lineStyle: {    // spessore linea di confine
          width: 3,
        },
        showSymbol: false, //se mostrare tondini dove ci sono i valori, sempre o no
        areaStyle: {
          opacity: 0.7,   //valori da 0 a 1, se zero è trasparente, 1 è pieno
          /*color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [   //da sfumature
          {
            offset: 0,
            color: 'rgb(128, 255, 165)'
          },
          {
            offset: 1,
            color: 'rgb(1, 191, 236)'
          }
        ])*/
      },
      emphasis: {   //lascia solo questa serie e rende il resto invisibile
        focus: 'series'
      },
      data: [140, 232, 101, 264, 90, 340, 250]
      },
      {
        name: 'ROSSO',
        type: 'line',
        stack: 'Total',  //mette dati uno sopra l'altro per somma di dati (es, vendite di tipi di prodotti sommate)
        smooth: true,   // se curvo o spezzettato
        lineStyle: {    // spessore linea di confine
          width: 3,
        },
        showSymbol: false, //se mostrare tondini dove ci sono i valori, sempre o no
        areaStyle: {
          opacity: 0.7,   //valori da 0 a 1, se zero è trasparente, 1 è pieno
          /*color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [   //da sfumature
          {
            offset: 0,
            color: 'rgb(128, 255, 165)'
          },
          {
            offset: 1,
            color: 'rgb(1, 191, 236)'
          }
        ])*/
      },
      emphasis: {   //lascia solo questa serie e rende il resto invisibile
        focus: 'series'
      },
      data: [131, 109, 187, 165, 287, 120, 231]
      }
    ]
  };


  ///////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////

 

}
