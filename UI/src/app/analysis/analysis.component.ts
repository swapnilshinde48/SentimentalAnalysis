import { Component, OnInit } from '@angular/core';
import { shadow } from '../model/shadow';
import {ShaddowService} from '../services/shaddowService'

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit {
    shadow: shadow[];
    cols: any[];
    constructor(private shaddowService: ShaddowService) { }
    ngOnInit() {
        this.shaddowService.getshadowData().then(res=>{
          this.shadow = res;
          console.log(res);
        } );
        this.cols = [
            { field: 'SNo', header: 'SNo', width: '8%' },
            { field: 'Question', header: 'Question', width: '12%'  },
            { field: 'comments', header: 'comments' , width: '12%' },
            { field: 'Ratings', header: 'Ratings', width: '8%' },
            { field: 'Dimension', header: 'Dimension', width: '8%' },
            { field: 'Polarity', header: 'Polarity', width: '8%' },
            { field: 'PolarityConfidence', header: 'Polarity Confidence' , width: '8%'},
            { field: 'Subjectivity', header: 'Subjectivity', width: '8%' },
            { field: 'SubjectivityConfidence', header: 'Subjectivity Confidence', width: '8%' }
        ];
    }
  }
