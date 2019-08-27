import { Component, OnInit } from "@angular/core";
import { ChartType, ChartOptions } from "chart.js";
import { Label } from "ng2-charts";
import * as pluginDataLabels from "chartjs-plugin-datalabels";
import { ShaddowService } from "src/app/services/shaddowService";
@Component({
  selector: 'app-subjectivity-confidence',
  templateUrl: './subjectivity-confidence.component.html',
  styleUrls: ['./subjectivity-confidence.component.css']
})
export class SubjectivityConfidenceComponent implements OnInit {
  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: false,
    legend: {
      position: "top"
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        }
      }
    }
  };
  public pieChartLabels: Label[] = [];
  public pieChartData: number[] = [];
  public pieChartType: ChartType = "pie";
  public pieChartLegend = true;
  public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [
    {
      backgroundColor: ['rgba(0,0,255,0.3)','rgba(255,0,0,0.3)'],
    }
  ];

  constructor(private shaddowService: ShaddowService) {}

  ngOnInit() {
    this.shaddowService.getshadowData().then(res => {
      this.pieChartLabels = [
        [
          "Subjective",
          res.filter(s => s.Subjectivity === "subjective").length.toString()
        ],
        [
          "Objective",
          res.filter(s => s.Subjectivity === "objective").length.toString()
        ]
      ];
      var objectiveConfidence = res.filter(s => s.Subjectivity === "subjective");
      var Possum = 0;
      for (let i = 0; i < objectiveConfidence.length; i++) {
        Possum += objectiveConfidence[i].SubjectivityConfidence;
      }

      var objectiveConfidence = res.filter(s => s.Subjectivity === "objective");
      var negsum = 0;
      for (let i = 0; i < objectiveConfidence.length; i++) {
        negsum += objectiveConfidence[i].SubjectivityConfidence;
      } 
          
      var totalsum=+(Possum+negsum);
      Possum = (Possum * 100) / totalsum;
      negsum = (negsum * 100) / totalsum;

      this.pieChartData = [Possum, negsum];
    });
  }
  // events
  public chartClicked({
    event,
    active
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }
}
