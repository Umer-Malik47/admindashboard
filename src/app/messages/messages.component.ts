import { Component } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
	messagequery: any;

	messagearr: any[] = [
		{
			name: "saad malik",
			img: "https://img.freepik.com/free-vector/isolated-young-handsome-man-set-different-poses-white-background-illustration_632498-658.jpg",
			content: "lorem ispum docor selit elit meit shelit welet khlet ovleate",
			time: "5min ago"

		},
		{
			name: "zain ali",
			img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8buhkcsawXn5N6pYtHacXLt5lc7NhIZwfrQ&usqp=CAU",
			content: "lorem ispum docor selit elit meit shelit welet khlet ovleate",
			time: "30min ago"
		},
		{
			name: "hanzla haker",
			img: "https://img.freepik.com/free-vector/isolated-young-handsome-man-set-different-poses-white-background-illustration_632498-658.jpg",
			content: "lorem ispum docor selit elit meit shelit welet khlet ovleate",
			time: "1hr ago"
		},
		{
			name: "ali hassan",
			img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPEZPZHP3DHpX2y969Cv8ox5ae7LobniKkpilQS-9aipBxfIChtcNGvH1AcCdESRx5k1g&usqp=CAU",
			content: "lorem ispum docor selit elit meit shelit welet khlet ovleate",
			time: "2hr ago"
		},
		{
			name: "ali hassan",
			img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPEZPZHP3DHpX2y969Cv8ox5ae7LobniKkpilQS-9aipBxfIChtcNGvH1AcCdESRx5k1g&usqp=CAU",
			content: "lorem ispum docor selit elit meit shelit welet khlet ovleate",
			time: "2hr ago"
		},
		{
			name: "ali hassan",
			img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPEZPZHP3DHpX2y969Cv8ox5ae7LobniKkpilQS-9aipBxfIChtcNGvH1AcCdESRx5k1g&usqp=CAU",
			content: "lorem ispum docor selit elit meit shelit welet khlet ovleate",
			time: "2hr ago"
		}
	];

	filteredarr: any[];

	filtermessage() {
		this.filteredarr = this.messagearr.filter((item: any) =>
			item.name.toLowerCase().includes(this.messagequery.toLowerCase())
		);
		//console.log(this.filteredarr);
	}

	constructor() {
		if (this.filteredarr = []) {
			this.filteredarr = this.messagearr
		} else {
			this.messagearr
		};
	};
}
