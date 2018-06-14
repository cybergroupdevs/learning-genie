import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  id = 'chart1';
  width = 600;
  height = 400;
  type = 'pie3d';
  dataFormat = 'json';
  dataSource;
  title = 'Learning Genie';
  constructor(private dashboardServices: DashboardService ) { }
  makegraph() {
    this.dashboardServices.getGraphData().subscribe((data) => {
      this.dataSource = {
        'chart': {
          'caption': 'Learning Genie',
            'subCaption': 'Answers',
            'showlegend': '1',
            'showpercentvalues': '1',
            'showpercentintooltip': '0',
          'theme': 'fint'
        },
        'data': [
          {
            'label': 'Incorrect',
            'value': data.inCorrect
          },
          {
            'label': 'Correct',
            'value': data.correct
          },
          {
            'label': 'Not Answered',
            'value': data.notAnswered
          }
        ]
      };
    });
  }

  ngOnInit() {
    this.makegraph();

  }

}
