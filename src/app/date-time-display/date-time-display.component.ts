import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time-display',
  templateUrl: './date-time-display.component.html',
  styleUrls: ['./date-time-display.component.scss'],
})
export class DateTimeDisplayComponent implements OnInit {
  currentTime: string = '';
  currentDate: string = '';

  constructor() {
    this.updateDateTime();
  }

  ngOnInit() {
    setInterval(() => {
      this.updateDateTime();
    }, 1000);
  }

  updateDateTime() {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString();
    this.currentDate = now.toLocaleDateString();
  }
}
