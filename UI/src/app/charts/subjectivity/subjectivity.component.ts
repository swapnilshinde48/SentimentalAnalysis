import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { ShaddowService } from 'src/app/services/shaddowService';
@Component({
  selector: 'app-subjectivity',
  templateUrl: './subjectivity.component.html',
  styleUrls: ['./subjectivity.component.css']
})
export class SubjectivityComponent implements OnInit {
  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: false,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels: Label[] = [];
  public pieChartData: number[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];

  constructor(private shaddowService: ShaddowService) { }
  
    ngOnInit() {
      this.shaddowService.getshadowData().then(res=>{
        this.pieChartLabels=[
          ['objective',res.filter(s=>s.Subjectivity==="objective").length.toString()],
           ['subjective',res.filter(s=>s.Subjectivity==="subjective").length.toString()]]
        var objective=(res.filter(s=>s.Subjectivity==="objective").length )*100 / 615;
        var subjective=(res.filter(s=>s.Subjectivity==="subjective").length )*100 / 615;
        this.pieChartData= [objective, subjective];
      });
  }
  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }


}