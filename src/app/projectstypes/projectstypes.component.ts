import { Component } from '@angular/core';

@Component({
  selector: 'app-projectstypes',
  templateUrl: './projectstypes.component.html',
  styleUrls: ['./projectstypes.component.css']
})
export class ProjectstypesComponent {
  chartOptions = {
	  animationEnabled: true,
	  title: {
		text: "Projects types"
	  },
	  data: [{
		type: "pie",
		startAngle: -90,
		indexLabel: "{name}: {y}",
		yValueFormatString: "#,###.##'%'",
		dataPoints: [
		  { y: 14.1, name: "Angular" },
		  { y: 28.2, name: "Asp.net core" },
		  { y: 14.4, name: "Javascript" },
		  { y: 43.3, name: "Csharp" }
		]
	  }]
	}	
}
