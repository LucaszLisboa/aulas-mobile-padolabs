import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CidadesService {

  httpOptions = {
    headers: new HttpHeaders({ 'x-bin-meta': 'false' })  
  };

  constructor(private http: HttpClient) { }

  BuscarCidades(): Observable<object> {
    const dataUrl = 'http://172.16.107.82:8080/regions/all';
    return this.http.get(dataUrl, this.httpOptions);
  }
}
