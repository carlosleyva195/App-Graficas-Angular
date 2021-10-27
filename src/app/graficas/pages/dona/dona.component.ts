import { Component } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Others'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100, 200]
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

}
