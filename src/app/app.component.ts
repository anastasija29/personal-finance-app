import { Component } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FinancialInsightsComponent } from './components/financial-insights/financial-insights.component';
import { TransactionsParentComponent } from './components/transactions-parent/transactions-parent.component';
import { HttpClientModule } from '@angular/common/http';
import transactionsMock from '../../api-spec.json';

@Component({
  selector: 'app-root',
  imports: [
    SidebarComponent,
    NavbarComponent,
    FinancialInsightsComponent,
    TransactionsParentComponent,
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'personal-finance-app';
  transactions: any[] = transactionsMock.paths["/transactions"].get.responses["200"].content["application/json"].examples.custom.value;
}