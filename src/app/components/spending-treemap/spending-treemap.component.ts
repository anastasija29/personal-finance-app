import { Component, Input, OnInit } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts'; 
import{ FormsModule } from '@angular/forms';

@Component({
  selector: 'app-spending-treemap',
  imports: [NgxEchartsModule, FormsModule],
  templateUrl: './spending-treemap.component.html',
  styleUrls: ['./spending-treemap.component.scss']
})
export class SpendingTreemapComponent implements OnInit {
  @Input() transactions: any[] = [];
  options: any;
  selectedMonth: string = '';

  ngOnInit() {
    this.selectedMonth = this.getCurrentMonth();
    this.updateChart();
  }

  getCurrentMonth() {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
  }

  filterByMonth() {
    this.updateChart();
  }

  updateChart(category?: string) {
    const filtered = this.transactions.filter(t => t.date.startsWith(this.selectedMonth));
    let data;
    if (!category) {
      const grouped = filtered.reduce((acc, t) => {
        if (!t.category) return acc;
        acc[t.category] = (acc[t.category] || 0) + Math.abs(t.amount);
        return acc;
      }, {} as Record<string, number>);
      data = Object.entries(grouped).map(([name, value]) => ({ name, value }));
    } else {
      const grouped = filtered.reduce((acc, t) => {
        if (t.category !== category || !t.subcategory) return acc;
        acc[t.subcategory] = (acc[t.subcategory] || 0) + Math.abs(t.amount);
        return acc;
      }, {} as Record<string, number>);
      data = Object.entries(grouped).map(([name, value]) => ({ name, value }));
    }

    this.options = {
      series: [{
        type: 'treemap',
        data,
        label: { show: true, formatter: '{b}: {c}' }
      }]
    };
  }

  onChartClick(event: any) {
    if (event && event.name) {
      this.updateChart(event.name);
    }
  }
}