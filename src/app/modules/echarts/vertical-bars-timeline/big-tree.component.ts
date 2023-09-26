import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import * as echarts from 'echarts';
import { Observable } from "rxjs";
import { IInformations } from "./informations";
import { EChartsOption } from "echarts";

@Component({
    selector: 'big-tree-comp',
    templateUrl: './big-tree.component.html',
  })

export class BigTreeChart {
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
  color: ['#ffffff', '#804000', '#cc6600', '#ff8c1a', '#ffb366' ],
    title: {
        text: 'ENERGIA ATTIVA'
    },
    tooltip: {    //per sottolineare linee verticali per settori
      trigger: 'axis',  //givva piccola label quando su un asse
      axisPointer: {
        type: 'shadow', //tipo di sottolineamento
        label: {
          backgroundColor: '#6a7985', //NON LO SO
          distance: 2,
          formatter: '{a}: {@score}',
        }
      }
    },
  grid: {
    
  },
  xAxis: {
    type: 'category',
    boundaryGap: true,
    data: ['SET', 'OTT', 'NOV', 'DIC', 'GEN', 'FEB', 'MAR', 'APR', 'MAG', 'GIU', 'LUG', 'AGO'],
  },
  yAxis: {
    type: 'value',
    min:0,
    max:60000,

  },
  
  series: [
    {
      name: 'Attività Totale',
      type: 'bar',
      stack: 'Total',  //mette dati uno sopra l'altro per somma di dati (es, vendite di tipi di prodotti sommate)
      
    },
    {
      name: 'Attiva F3',
      type: 'bar',
      stack: 'Total',  //mette dati uno sopra l'altro per somma di dati (es, vendite di tipi di prodotti sommate)
      data: [9000, 10000, 8000, 11000, 10000, 7000, 14000, 13000, 11000, 10000, 10000, 14000]
    },
    {
      name: 'Attiva F2',
      type: 'bar',
      stack: 'Total',  //mette dati uno sopra l'altro per somma di dati (es, vendite di tipi di prodotti sommate)
      data: [6000, 10000, 10000, 12000, 10000, 15000, 14000, 13000, 11000, 10000, 9000, 14000]
    },
    {
      name: 'Attiva F1',
      type: 'bar',
      stack: 'Total',  //mette dati uno sopra l'altro per somma di dati (es, vendite di tipi di prodotti sommate)
      data: [8000, 10000, 11000, 9000, 10000, 8000, 14000, 13000, 11000, 10000, 13000, 14000]
    },
    {
      name: 'Attiva Mono',
      type: 'bar',
      stack: 'Total',  //mette dati uno sopra l'altro per somma di dati (es, vendite di tipi di prodotti sommate)
      data: [10000, 10000, 7000, 10000, 12000, 15000, 14000, 13000, 11000, 10000, 10000, 14000]
    },
    
  ],
  
}
}