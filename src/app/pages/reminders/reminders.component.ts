import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reminders',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.css']
})
export class RemindersComponent {
  reminders: string[] = [];
  newReminder = '';

  addReminder() {
    if (this.newReminder.trim()) {
      this.reminders.push(this.newReminder);
      localStorage.setItem('motivational-reminders', JSON.stringify(this.reminders));
      this.newReminder = '';
    }
  }

  ngOnInit() {
    const saved = localStorage.getItem('motivational-reminders');
    if (saved) this.reminders = JSON.parse(saved);
  }

  deleteReminder(index: number) {
    this.reminders.splice(index, 1);
    localStorage.setItem('motivational-reminders', JSON.stringify(this.reminders));
  }
}
