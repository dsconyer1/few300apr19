import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  date: string;
  constructor() { }

  ngOnInit() {
    this.getDate();
  }

  getDate() {
    this.date = new Date().toISOString();
  }
}
