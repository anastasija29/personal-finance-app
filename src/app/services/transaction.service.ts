import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TransactionService {
  private apiUrl = 'http://localhost:4010';

  getTransactions(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/transactions`);
  }

  updateTransactionCategory(id: number, category: string, subcategory: string) {
  return this.http.patch(`http://localhost:4010/transactions/${id}`, { category, subcategory });
}

splitTransaction(id: string, splits: any[]) {
  return this.http.post(`http://localhost:4010/transactions/${id}/split`, { splits });
}
  constructor(private http: HttpClient) {}
}