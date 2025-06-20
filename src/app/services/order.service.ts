import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiUrl = 'http://localhost:3000/contatos';

    constructor(private http: HttpClient) { }

    // GET
    getContatos(): Observable<number[]> {
      return this.http.get<number[]>(this.apiUrl);
    }

    // POST
    criarContato(contato: number): Observable<number> {
      return this.http.post<number>(this.apiUrl, contato);
    }

    // PUT
    atualizarContato(contato: number): Observable<number> {
      return this.http.put<number>(`${this.apiUrl}/${contato}`, contato);
    }

    // DELETE
    deletarContato(id: number): Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
