// src/app/pages/dashboard/dashboard.component.ts
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Chart, registerables } from 'chart.js';
import { MoodService, MoodEntry } from '../../services/mood.service';

Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  moods = ['😄', '🙂', '😐', '😕', '😣'];
  selectedMood: string | null = null;
  energy = 3;
  notes = '';
  entries: MoodEntry[] = [];
  chart!: Chart;

  constructor(private moodService: MoodService) {}

  ngOnInit(): void {
    this.entries = this.moodService.getEntries();
  }

  ngAfterViewInit(): void {
    this.renderChart();
  }

  saveEntry(): void {
    if (!this.selectedMood) return;

    const newEntry: MoodEntry = {
      date: new Date().toLocaleDateString(),
      mood: this.selectedMood,
      energy: this.energy,
      notes: this.notes
    };

    this.moodService.addEntry(newEntry);
    this.entries = this.moodService.getEntries();

    this.selectedMood = null;
    this.energy = 3;
    this.notes = '';

    this.updateChart();
  }

  deleteEntry(index: number) {
    this.moodService.deleteEntry(index);
    this.entries = this.moodService.getEntries();
    this.updateChart();
  }

  private renderChart() {
    const ctx = document.getElementById('energyChart') as HTMLCanvasElement;
    if (!ctx) return;

    const dates = this.entries.map(e => e.date).reverse();
    const energies = this.entries.map(e => e.energy).reverse();

    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: dates,
        datasets: [{
          label: 'Energy Level',
          data: energies,
          borderColor: '#38BDF8',
          backgroundColor: '#38BDF8',
          fill: false,
          tension: 0.3
        }]
      },
      options: {
        responsive: true,
        scales: { y: { min: 0, max: 5, ticks: { stepSize: 1 } } }
      }
    });
  }

  private updateChart() {
    if (!this.chart) return;
    this.chart.data.labels = this.entries.map(e => e.date).reverse();
    this.chart.data.datasets[0].data = this.entries.map(e => e.energy).reverse();
    this.chart.update();
  }
}
