import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { ShaddowService } from 'src/app/services/shaddowService';
@Component({
  selector: 'app-polarity',
  templateUrl: './polarity.component.html',
  styleUrls: ['./polarity.component.css']
})
export class PolarityComponent implements OnInit {
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
  public pieChartData: number[] =[];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [
    {
      backgroundColor: [
        'rgba(0,255,0,0.3)', 
        'rgba(255,0,0,0.3)',
       'rgba(0,0,255,0.3)'],
    },
  ];

  constructor(private shaddowService: ShaddowService) { }
  
    ngOnInit() {
      this.shaddowService.getshadowData().then(res=>{
        this.pieChartLabels=[
          ['Positive',res.filter(s=>s.Polarity==="positive").length.toString()],
           ['Negative',res.filter(s=>s.Polarity==="negative").length.toString()],
           ['Neutral',res.filter(s=>s.Polarity==="neutral").length.toString()]]
        var positive=(res.filter(s=>s.Polarity==="positive").length )*100 / 615;
        var negative=(res.filter(s=>s.Polarity==="negative").length )*100 / 615;
         var neutral=(res.filter(s=>s.Polarity==="neutral").length )*100 / 615;
        this.pieChartData= [positive, negative,neutral];
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