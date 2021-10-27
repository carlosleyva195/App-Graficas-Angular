import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {
  
  public doughnutChartLabels: Label[] = [
    // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Others'
  ];
  public doughnutChartData: MultiDataSet = [
    // [350, 450, 100, 200]
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [
    {
      backgroundColor: [
        '#3AA8FD',
        '#34C5E3',
        '#34E3A0',
        '#46A3E3',
        '#FF5726',
        '#4ED8FB'
      ]
    }
  ]

  constructor( private GraficasService: GraficasService) { }

  ngOnInit(): void {
    // this.GraficasService.getUsuariosRedesSociales()
    //   .subscribe( data => {
    //     const labels = Object.keys( data ); 
    //     const values = Object.values( data );

    //     this.doughnutChartLabels = labels;
    //     this.doughnutChartData.push ( values );
    //   });

    this.GraficasService.getUsuariosRedesSocialesDonaData()
      .subscribe( ({ labels, values }) => {
        this.doughnutChartLabels = labels;
        this.doughnutChartData.push( values );
      })
  }
}
