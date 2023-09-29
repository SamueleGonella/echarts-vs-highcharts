import { HttpClient } from '@angular/common/http';
import {
  Component,
  OnInit,
  OnChanges,
  SimpleChange,
  EventEmitter,
  ElementRef,
  AfterViewInit,
  ViewChild,
} from '@angular/core';
import * as echarts from 'echarts';
import { Observable, findIndex } from 'rxjs';
import { IInformations } from './informations';
import { EChartsOption, LabelFormatterCallback } from 'echarts';
import { Chart, TooltipOptions, seriesType } from 'highcharts';
import { __param } from 'tslib';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'big-tree-comp',
  templateUrl: './big-tree.component.html',
  styleUrls: ['./big-tree.component.css'],
})
export class BigTreeChart implements AfterViewInit {
  numberedArray: number[] = new Array(12).fill(0).map((m, i) => (m = m + i));
  dataEvent: boolean[] = [];
  echartsInstance1: any;
  dataXaxis = new Array(12).fill(0).map((m, i) => {
    const date = new Date();
    return new Date(date.setMonth(date.getMonth() + i))
      .toLocaleString('it', {
        month: 'short',
      })
      .toLocaleUpperCase();
  });
  dataSeriesAttivaF3 = [
    9000, 10000, 8000, 14000, 10000, 1000, 16000, 13000, 11000, 10000, 10000,
    14000,
  ];
  dataSeriesAttivaF2 = [
    6000, 10000, 10000, 12000, 10000, 15000, 14000, 13000, 11000, 10000, 9000,
    14000,
  ];
  dataSeriesAttivaF1 = [
    8000, 10000, 11000, 9000, 10000, 8000, 14000, 13000, 11000, 10000, 13000,
    14000,
  ];
  dataSeriesAttivaMono = [
    10000, 10000, 7000, 10000, 12000, 15000, 14000, 13000, 11000, 10000, 10000,
    14000,
  ];
  dataTotalActivity = new Array(12)
    .fill(0)
    .map(
      (_, i) =>
        this.dataSeriesAttivaF1[i] +
        this.dataSeriesAttivaF2[i] +
        this.dataSeriesAttivaF3[i] +
        this.dataSeriesAttivaMono[i]
    );
  dataSecondChartkw = [58, 41, 70, 99, 46, 34, 56, 64, 29, 90, 75, 101];
  dataDisplay: string;

  constructor() {
    this.dataDisplay = '';
  }
  ngAfterViewInit(): void {
    // this.chart2.nativeElement.dispatchEvent(new Event('mouseover', {}));
  }

  onChartInit(ec: any) {
    this.echartsInstance1 = ec;
  }

  public GETARRAYBELLO() {
    return this.dataXaxis;
  }

  resizeChart() {
    if (this.echartsInstance1) {
      this.echartsInstance1.resize();
    }
  }

  formatLabelData = (data: Array<string>) => {
    return (params: any) => {
      const date = new Date();
      //params.value è quello ceh scriverebbe di base nella label, ossia stessa cosa
      // scritta nel data

      //rifaccio un array di mesi short uppercase perchè non posso
      //chiamarlo da fuori la func ('SET')

      //qui invece mi vado a trovare in che posizione il dato che mi scriverebbe
      //label, quindi 'SET' e mi vado a trovare la posizione, così so in che colonna
      // sono e di quanto fare l'offset dei mesi.
      const res = data.indexOf(params.value as string);
      const correctDate = new Date(
        date.setMonth(date.getMonth() + res)
      ).toLocaleString('it', {
        month: 'long',
        year: 'numeric',
      });
      this.EventBinding(params.value);
      return correctDate[0].toLocaleUpperCase() + correctDate.slice(1);
    };
  };

  chartOption1: EChartsOption = {
    color: ['#b05030', '#cc6600', '#ff8c1a', '#ffb366', '#000000'],
    title: {
      text: 'ENERGIA ATTIVA',
    },
    tooltip: {
      //per sottolineare linee verticali per settori
      trigger: 'axis', //givva piccola label quando su un asse
      align: 'left',
      order: 'seriesDesc',
      axisPointer: {
        type: 'shadow', //tipo di sottolineamento
        label: {
          backgroundColor: '#6a7985', //NON LO SO
          formatter: this.formatLabelData(this.dataXaxis),
        },
      },
      textStyle: {
        fontWeight: 'normal',
        color: 'black',
      },
    },
    grid: {
      show: true,
      height: 350,
    },
    xAxis: {
      type: 'category',
      boundaryGap: true,
      data: this.dataXaxis,
      triggerEvent: true,
      axisLine: {
        show: true,
        lineStyle: {
          color: '#737373',
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: 'lightgrey',
          type: 'solid',
        },
      },
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: 60000,
      name: 'Energia Attiva (kWh)',
      nameRotate: 90,
      nameLocation: 'middle',
      nameGap: 50,
      nameTextStyle: {
        fontSize: 13,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#737373',
        },
      },
      axisLabel: {
        inside: false,
        formatter: function (value) {
          const value2 = value;
          if (value2 != 0) return value2 / 1000 + 'k';
          else return value2 + ' ';
        },
      },
    },
    legend: {
      show: true,
      align: 'auto',
      bottom: 40,
      itemGap: 40,
      padding: -5,
    },
    series: [
      {
        name: 'Attiva F3',
        type: 'bar',
        stack: 'Total', //mette dati uno sopra l'altro per somma di dati (es, vendite di tipi di prodotti sommate)
        data: this.dataSeriesAttivaF3,
        tooltip: {
          valueFormatter: function (value) {
            return value + ' kWh';
          },
        },
        barWidth: 35,
      },
      {
        name: 'Attiva F2',
        type: 'bar',
        stack: 'Total', //mette dati uno sopra l'altro per somma di dati (es, vendite di tipi di prodotti sommate)
        data: this.dataSeriesAttivaF2,
        tooltip: {
          valueFormatter: function (value) {
            return value + ' kWh';
          },
        },
        barWidth: 35,
      },
      {
        name: 'Attiva F1',
        type: 'bar',
        stack: 'Total', //mette dati uno sopra l'altro per somma di dati (es, vendite di tipi di prodotti sommate)
        data: this.dataSeriesAttivaF1,
        tooltip: {
          valueFormatter: function (value) {
            return value + ' kWh';
          },
        },
        barWidth: 35,
      },
      {
        name: 'Attiva Mono',
        type: 'bar',
        stack: 'Total', //mette dati uno sopra l'altro per somma di dati (es, vendite di tipi di prodotti sommate)
        data: this.dataSeriesAttivaMono,
        tooltip: {
          valueFormatter: function (value) {
            return value + ' kWh';
          },
        },
        barWidth: 35,
      },
      {
        name: 'Attività Totale',
        type: 'bar',
        stack: 'Total',
        data: this.dataTotalActivity,
        itemStyle: {
          opacity: 0,
        },
        tooltip: {
          valueFormatter: function (params) {
            return params.toString() + ' kWh';
          },
        },
        label: {
          show: true,
          formatter: (params) => {
            var res = params.value as number;
            params.value = res / 1000;
            return params.value + 'k kWh';
          },
          fontFamily: 'monospace',
          fontWeight: 'bolder',
          fontSize: 15,
          color: '#595959',
          opacity: 1,
        },
        labelLayout: {
          dy: -28,
          rotate: 90,
          dx: -45,
        },
      },
    ],
  };

  EventBinding(date: any) {
    this.dataEvent.fill(false);
    //this.dataDisplay.fill(' ');
    console.log('Iniziali: ' + date);
    const index = this.dataXaxis.indexOf(date);
    this.dataEvent[index] = true;
    this.dataDisplay = this.dataSecondChartkw[index].toString() + ' kW';
    console.log(' ');
    console.log('Data Event: ' + this.dataEvent);
    console.log(' ');
    console.log('Data Display: ' + this.dataDisplay);
    console.log(' ');
  }

  chartOption2: EChartsOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow', //tipo di sottolineamento
        label: {
          backgroundColor: '#6a7985', //NON LO SO
          distance: 2,
          formatter: this.formatLabelData(this.dataXaxis),
        },
      },
      textStyle: {
        fontWeight: 'normal',
        color: 'black',
      },
    },
    xAxis: {
      type: 'category',
      boundaryGap: true,
      data: new Array(12).fill(0).map((m, i) => {
        const date = new Date();
        return new Date(date.setMonth(date.getMonth() + i))
          .toLocaleString('it', {
            month: 'short',
          })
          .toLocaleUpperCase();
      }),
      splitLine: {
        show: true,
        lineStyle: {
          color: 'lightgrey',
          type: 'solid',
        },
      },
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: 120,
      name: 'Picco Potenza kW',
      nameRotate: 90,
      nameLocation: 'middle',
      nameGap: 40,
      nameTextStyle: {
        fontSize: 13,
      },
      triggerEvent: true,
      interval: 30,
      axisLine: {
        show: true,
        lineStyle: {
          color: '#737373',
        },
      },
    },
    grid: {
      height: 80,
      show: true,
      containLabel: true,
    },

    series: [
      {
        name: 'Picco di Potenza',
        data: this.dataSecondChartkw,
        type: 'line',
        lineStyle: {
          opacity: 0,
        },
        symbolSize: 12,
        symbol: 'circle',
        itemStyle: {
          color: 'darkblue',
        },
        tooltip: {
          valueFormatter: function (value) {
            return value + ' kW';
          },
        },
      },
    ],
  };

  mouseOver(e: any) {
    console.log('e: ' + e);
  }
}
