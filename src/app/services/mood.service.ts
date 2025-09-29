import { Injectable } from '@angular/core';

export interface MoodEntry {
  date: string;
  mood: string;
  energy: number;
  notes?: string;
}

@Injectable({
  providedIn: 'root'
})
export class MoodService {
  private storageKey = 'mood-entries';

  getEntries(): MoodEntry[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  addEntry(entry: MoodEntry) {
    const entries = this.getEntries();
    entries.unshift(entry); // en son ekleneni üste al
    localStorage.setItem(this.storageKey, JSON.stringify(entries));
  }

  deleteEntry(index: number) {
    const entries = this.getEntries();
    entries.splice(index, 1);
    localStorage.setItem(this.storageKey, JSON.stringify(entries));
  }
}
