import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CidadesService {

  constructor(private http:HttpClient) { }

  BuscarCidades(regiao: any): Observable<object> {
    const dataUrl = 'http://172.16.107.82:8080/regions/'+regiao;
    return this.http.get(dataUrl);
  }
}
