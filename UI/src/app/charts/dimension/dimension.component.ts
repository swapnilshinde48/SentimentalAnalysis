import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { ShaddowService } from 'src/app/services/shaddowService';
@Component({
  selector: 'app-dimension',
  templateUrl: './dimension.component.html',
  styleUrls: ['./dimension.component.css']
})
export class DimensionComponent implements OnInit {
    public barChartOptions: ChartOptions = {
      responsive: false,
      scales: { xAxes: [{}], yAxes: [{}] },
      plugins: {
        datalabels: {
          anchor: 'end',
          align: 'end',
        }
      }
    };
    public barChartLabels: Label[] = ['Credibility', 'Respect', 'Pride', 'Other', 'Fairness', 'Camaraderie'];
    public barChartType: ChartType = 'bar';
    public barChartLegend = true;
    public barChartPlugins = [pluginDataLabels];
  
    public barChartData: ChartDataSets[] = [];
  
    constructor(private shaddowService: ShaddowService) { }
  
    ngOnInit() {
      this.shaddowService.getshadowData().then(res=>{
        var Credibility=  res.filter(s=>s.Dimension==="Credibility").length;
        var Respect=  res.filter(s=>s.Dimension==="Respect").length;
        var Pride=  res.filter(s=>s.Dimension==="Pride").length;
        var Other=  res.filter(s=>s.Dimension==="Other").length;
        var Fairness=  res.filter(s=>s.Dimension==="Fairness").length;
        var Camaraderie=  res.filter(s=>s.Dimension==="Camaraderie").length;
        this.barChartData= [{ data: [Credibility, Respect, Pride, Other, Fairness, Camaraderie], label: 'Dimension' }]
      } );
    }
  
    public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
      console.log(event, active);
    }
  
    public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
      console.log(event, active);
    } 
  
  }
  