import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {

  @Input() horizontal: boolean = false;

  public barChartOptions: ChartOptions = {
    responsive: true,
    // scales: { xAxes: [{}], yAxes: [{}] },
    // plugins: {
    //   datalabels: {
    //     anchor: 'end',
    //     align: 'end',
    //   }
    // }
  };
  @Input() barChartLabels: Label[] = [
    // '2006', '2007', '2008', '2009', '2010', '2011', '2012'
  ];

  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  @Input() barChartData: ChartDataSets[] = [
    // { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: '#CC3FFF', hoverBackgroundColor: 'red' },
    // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor: '#45B4D9', hoverBackgroundColor: 'red' },
    // { data: [58, 68, 80, 59, 96, 76, 50], label: 'Series C', backgroundColor: '#D95B45', hoverBackgroundColor: 'red' }
  ];
  constructor() { }

  ngOnInit(): void {
    if ( this.horizontal ){
      this.barChartType = 'horizontalBar';
    }
  }
}
