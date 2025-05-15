import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TimezoneService } from '../timezone.service';

@Component({
  selector: 'app-timezone',
  imports: [CommonModule, FormsModule],
  templateUrl: './timezone.component.html',
  styleUrls: ['./timezone.component.css'],
})


export class TimezoneComponent implements OnInit {
  timezones: string[] = [];
  selectedTimezone = 'UTC'; // Default timezone
  localTime = '';
  selectedTime = '';

  constructor(private timezoneService: TimezoneService) {}

  ngOnInit() {
    // Fetch available timezones
    this.timezoneService.getTimezones().subscribe(zones => {
      this.timezones = zones;
    });
    setInterval(() => {
      this.updateLocalTime();
      this.updateSelectedTime();
    }, 1000); // Update every second
  }

  updateLocalTime() {
    const now = new Date();
    this.localTime = now.toLocaleString();
  }

  updateSelectedTime() {
    if (this.selectedTimezone) {
      this.timezoneService.getSelectedTime(this.selectedTimezone).subscribe((response) => {
        this.selectedTime = response.selectedTime;
      });
    }
  }
}