import { Component, OnInit } from "@angular/core";
import { ChartType, ChartOptions } from "chart.js";
import { Label } from "ng2-charts";
import * as pluginDataLabels from "chartjs-plugin-datalabels";
import { ShaddowService } from "src/app/services/shaddowService";
@Component({
  selector: "app-polarity-confidence",
  templateUrl: "./polarity-confidence.component.html",
  styleUrls: ["./polarity-confidence.component.css"]
})
export class PolarityConfidenceComponent implements OnInit {
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
      backgroundColor: [
        "rgba(0,255,0,0.3)",
        "rgba(255,0,0,0.3)",
        "rgba(0,0,255,0.3)"
      ]
    }
  ];

  constructor(private shaddowService: ShaddowService) {}

  ngOnInit() {
    this.shaddowService.getshadowData().then(res => {
      this.pieChartLabels = [
        [
          "Positive",
          res.filter(s => s.Polarity === "positive").length.toString()
        ],
        [
          "Negative",
          res.filter(s => s.Polarity === "negative").length.toString()
        ],
        ["Neutral", res.filter(s => s.Polarity === "neutral").length.toString()]
      ];
      var PosPolarityConfidence = res.filter(s => s.Polarity === "positive");
      var Possum = 0;
      for (let i = 0; i < PosPolarityConfidence.length; i++) {
        Possum += PosPolarityConfidence[i].PolarityConfidence;
      }

      var NegPolarityConfidence = res.filter(s => s.Polarity === "negative");
      var negsum = 0;
      for (let i = 0; i < NegPolarityConfidence.length; i++) {
        negsum += NegPolarityConfidence[i].PolarityConfidence;
      } 
      var NeutralPolarityConfidence = res.filter(s => s.Polarity === "neutral");
      var Neutralsum = 0;
      for (let i = 0; i < NeutralPolarityConfidence.length; i++) {
        Neutralsum += NeutralPolarityConfidence[i].PolarityConfidence;
      }        
      var totalsum=+(Possum+negsum+Neutralsum);
      Possum = (Possum * 100) / totalsum;
      negsum = (negsum * 100) / totalsum;
      Neutralsum = (Neutralsum * 100) / totalsum;

      this.pieChartData = [Possum, negsum, Neutralsum];
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
