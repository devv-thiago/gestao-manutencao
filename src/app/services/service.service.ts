import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from '../models/service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
private apiUrl = 'http://localhost:3000/Services';

  constructor(private http: HttpClient) { }

  // GET
  getServices(): Observable<Service[]> {
    return this.http.get<Service[]>(this.apiUrl);
  }

  // POST
  criarService(Service: Service): Observable<Service> {
    return this.http.post<Service>(this.apiUrl, Service);
  }

  // PUT
  atualizarService(Service: Service): Observable<Service> {
    return this.http.put<Service>(`${this.apiUrl}/${Service}`, Service);
  }

  // DELETE
  deletarService(id: Service): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
