
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sale } from './sale.model';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  
  private baseUrl = `${environment.apiUrl}/sales`;

  constructor(private http: HttpClient) { }

  getSales(): Observable<Sale[]> {
    return this.http.get<Sale[]>(this.baseUrl);
  }

  getSale(id: number): Observable<Sale> {
    return this.http.get<Sale>(`${this.baseUrl}/${id}`);
  }

  createSale(sale: Sale): Observable<Sale> {
    return this.http.post<Sale>(this.baseUrl, sale);
  }

  updateSale(id: number, sale: Sale): Observable<Sale> {
    return this.http.put<Sale>(`${this.baseUrl}/${id}`, sale);
  }

  deleteSale(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
