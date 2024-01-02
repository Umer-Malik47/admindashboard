import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'dashboard';
	showSideNav = true;

	toggleSideNav() {
		this.showSideNav = !this.showSideNav;
	};

	chartOptions = {
		title: {
			text: "Projects"
		},
		theme: "light2",
		animationEnabled: true,
		exportEnabled: true,
		axisY: {
			includeZero: true,
			valueFormatString: "$#,##0k"
		},
		data: [{
			type: "column", //change type to bar, line, area, pie, etc
			yValueFormatString: "$#,##0k",
			color: "#6725f7",
			dataPoints: [
				{ label: "Jan", y: 172 },
				{ label: "Feb", y: 189 },
				{ label: "Mar", y: 201 },
				{ label: "Apr", y: 240 },
				{ label: "May", y: 166 },
				{ label: "Jun", y: 196 },
				{ label: "Jul", y: 218 },
				{ label: "Aug", y: 167 },
				{ label: "Sep", y: 175 },
				{ label: "Oct", y: 152 },
				{ label: "Nov", y: 156 },
				{ label: "Dec", y: 164 }
			]
		}]
	};



}



