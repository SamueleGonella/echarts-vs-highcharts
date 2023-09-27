import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import * as echarts from 'echarts';
import { Observable, findIndex } from "rxjs";
import { IInformations } from "./informations";
import { EChartsOption } from "echarts";
import { seriesType } from "highcharts";

@Component({
  selector: 'big-tree-comp',
  templateUrl: './big-tree.component.html',
  styleUrls: ['./big-tree.component.css']
})

export class BigTreeChart {

  echartsInstance1: any;
  dataSeriesAttivaF3 = [9000, 10000, 8000, 11000, 10000, 7000, 16000, 13000, 11000, 10000, 10000, 14000];
  dataSeriesAttivaF2 = [6000, 10000, 10000, 12000, 10000, 15000, 14000, 13000, 11000, 10000, 9000, 14000];
  dataSeriesAttivaF1 = [8000, 10000, 11000, 9000, 10000, 8000, 14000, 13000, 11000, 10000, 13000, 14000];
  dataSeriesAttivaMono = [10000, 10000, 7000, 10000, 12000, 15000, 14000, 13000, 11000, 10000, 10000, 14000];
  dataTotalActivity = new Array(12).fill(0).map((_, i) => 
      this.dataSeriesAttivaF1[i] 
      + this.dataSeriesAttivaF2[i] 
      + this.dataSeriesAttivaF3[i] 
      + this.dataSeriesAttivaMono[i]
  );

  onChartInit(ec: any) {
    this.echartsInstance1 = ec;
  }

  resizeChart() {
    if (this.echartsInstance1) {
      this.echartsInstance1.resize();
    }
  }


  chartOption1: EChartsOption = {
    color: [ '#803010', '#cc6600', '#ff8c1a', '#ffb366', '#ffffff'],
    title: {
      text: 'ENERGIA ATTIVA'
    },
    tooltip: {    //per sottolineare linee verticali per settori
      trigger: 'axis',  //givva piccola label quando su un asse
      align: 'left',
      order: "seriesDesc",
      axisPointer: {
        type: 'shadow', //tipo di sottolineamento
        label: {
          backgroundColor: '#6a7985', //NON LO SO
          distance: 2,
          formatter: (params) => {
            const str = new Date(params.value).toDateString();
            return str;
          },
        }
      },
    },
    grid: {
      show: true,
    },
    xAxis: {
      type: 'category',
      boundaryGap: true,
      data: new Array(12).fill(0).map((m, i) => {
        const date = new Date();
        return new Date(date.setMonth(date.getMonth() + i)).toLocaleString('it', {
          month: 'short',
        }).toLocaleUpperCase();
      })
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: 60000,
      name: 'Energia Attiva (kWh)',
      nameRotate: 90,
      nameLocation: 'middle',
      nameGap: 70,
      nameTextStyle: {
        fontSize: 13
      },
      axisLine: {
        show: true,
        lineStyle: {
          type: 'dotted',
          color: '#737373',
        }
      },
      axisLabel: {
        inside: false,
        formatter: function(value) {
          const value2 = value;
          if(value2 != 0)
            return value2/1000 + 'k';
          else
            return value2 + ' ';
        }
      },
    },
    legend: {
      show: true,
      align: "auto",
      bottom: 10,
    },
    series: [
      {
        name: 'Attiva F3',
        type: 'bar',
        stack: 'Total',  //mette dati uno sopra l'altro per somma di dati (es, vendite di tipi di prodotti sommate)
        data: this.dataSeriesAttivaF3,
        tooltip: {
          valueFormatter: function (value) {          
            return value + ' kWh';
          },
        },
      },
      {
        name: 'Attiva F2',
        type: 'bar',
        stack: 'Total',  //mette dati uno sopra l'altro per somma di dati (es, vendite di tipi di prodotti sommate)
        data: this.dataSeriesAttivaF2,
        tooltip: {
          valueFormatter: function (value) {          
            return value + ' kWh';
          },
        },
      },
      {
        name: 'Attiva F1',
        type: 'bar',
        stack: 'Total',  //mette dati uno sopra l'altro per somma di dati (es, vendite di tipi di prodotti sommate)
        data: this.dataSeriesAttivaF1,
        tooltip: {
          valueFormatter: function (value) {          
            return value + ' kWh';
          },
        },
      },
      {
        name: 'Attiva Mono',
        type: 'bar',
        stack: 'Total',  //mette dati uno sopra l'altro per somma di dati (es, vendite di tipi di prodotti sommate)
        data: this.dataSeriesAttivaMono,
        tooltip: {
          valueFormatter: function (value) {          
            return value + ' kWh';
          },
        },
        barWidth: 40
      },
      {
        name: 'Attività Totale',
        type: 'bar',
        stack: 'Total',
             //mette dati uno sopra l'altro per somma di dati (es, vendite di tipi di prodotti sommate)
           //data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] // senza non lo mostra, è lo spazio bianco per il totale

        // tooltip: {
        //     valueFormatter: function (value: number, dataTotalActivity: number[]) {  
        //       value = tooltipTotal(value, dataTotalActivity);
        //       return value + ' kWh';
        //   },
        // },
        tooltip: {
          valueFormatter: function (params) {  
            console.log(params);
            var index = [0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,0.11,0.12,0.13].indexOf(params as number);
            var value2 = new BigTreeChart().dataTotalActivity[index]; 
            var res: string = value2 + ' kWh';
            return res;
          },
        },
        label: {
          show:true,
          formatter: (params) => { 
            var index: number = [0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,0.11,0.12,0.13].indexOf(params.value as number);
            var value2 = this.dataTotalActivity[index]/1000; 
            return value2.toString() + 'k kWh';
          },
          fontFamily: 'monospace',
          fontWeight: "bolder",
          fontSize: 15,
          color: '#595959'
        },
        labelLayout: {
          dy: -15
        }
      }
    ],
  }
}







