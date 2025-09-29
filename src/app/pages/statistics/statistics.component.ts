// src/app/pages/statistics/statistics.component.ts
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';
import { MoodService, MoodEntry } from '../../services/mood.service';

Chart.register(...registerables);

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit, AfterViewInit {
  entries: MoodEntry[] = [];
  recentEntries: MoodEntry[] = [];
  averageEnergy = 0;
  mostCommonMood = '';
  streak = 0;

  constructor(private moodService: MoodService) {}

  ngOnInit(): void {
    this.entries = this.moodService.getEntries();
    console.log('All entries from service:', this.entries);

    this.recentEntries = this.entries.slice(0, 15);
    console.log('Recent entries:', this.recentEntries);

    this.calculateStats();
  }

  ngAfterViewInit(): void {
    this.renderCharts();
  }

  private calculateStats() {
    if (!this.recentEntries.length) return;

    const totalEnergy = this.recentEntries.reduce((sum, e) => sum + e.energy, 0);
    this.averageEnergy = +(totalEnergy / this.recentEntries.length).toFixed(1);

    const moodCount: { [key: string]: number } = {};
    this.recentEntries.forEach(e => moodCount[e.mood] = (moodCount[e.mood] || 0) + 1);
    this.mostCommonMood = Object.keys(moodCount)
      .reduce((a, b) => moodCount[a] > moodCount[b] ? a : b);

    const uniqueDates = new Set(this.entries.map(e => e.date));
    this.streak = uniqueDates.size;

    console.log('AvgEnergy:', this.averageEnergy, 'MostMood:', this.mostCommonMood, 'Streak:', this.streak);
  }

  private renderCharts() {
    if (!this.recentEntries.length) return;

    const ctxLine = document.getElementById('energyOverTime') as HTMLCanvasElement;
    if (ctxLine) {
      new Chart(ctxLine, {
        type: 'line',
        data: {
          labels: this.recentEntries.map(e => e.date).reverse(),
          datasets: [{
            label: 'Energy',
            data: this.recentEntries.map(e => e.energy).reverse(),
            borderColor: '#38BDF8',
            backgroundColor: '#38BDF8',
            fill: false,
            tension: 0.3
          }]
        }
      });
    }

    const moodLabels = Array.from(new Set(this.recentEntries.map(e => e.mood)));
    const moodCounts = moodLabels.map(m => this.recentEntries.filter(e => e.mood === m).length);
    const ctxBar = document.getElementById('moodFrequency') as HTMLCanvasElement;
    if (ctxBar) {
      new Chart(ctxBar, {
        type: 'bar',
        data: {
          labels: moodLabels,
          datasets: [{
            label: 'Mood Count',
            data: moodCounts,
            backgroundColor: '#38BDF8'
          }]
        }
      });
    }
  }
}
