import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transaction-list',
  imports: [CommonModule],
  templateUrl: './transaction-list.component.html',
  styleUrl: './transaction-list.component.scss'
})
export class TransactionListComponent {
  transactions = [
    {
      name: 'Ana Petrović',
      date: '2025-07-23',
      amount: 120.50,
      type: 'credit',
    },
    {
      name: 'Marko Jovanović',
      date: '2025-07-22',
      amount: -45.00,
      type: 'debit',
    },
    {
      name: 'Ivana Ilić',
      date: '2025-07-21',
      amount: 300.00,
      type: 'credit',
    },
    {
      name: 'Petar Nikolić',
      date: '2025-07-20',
      amount: -80.00,
      type: 'debit',
    },
    {
      name: 'Jelena Simić',
      date: '2025-07-19',
      amount: 50.00,
      type: 'credit',
    }
  ];
}
