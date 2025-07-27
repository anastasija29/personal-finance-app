import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FinancialInsightsComponent } from './components/financial-insights/financial-insights.component';
import { CategorizeMultipleComponent } from './components/categorize-multiple/categorize-multiple.component';
import { TransactionsParentComponent } from './components/transactions-parent/transactions-parent.component';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [SidebarComponent, NavbarComponent, FinancialInsightsComponent, CategorizeMultipleComponent, TransactionsParentComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'personal-finance-app';
}
