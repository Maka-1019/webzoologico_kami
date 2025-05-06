import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs';


@Injectable({
  providedIn: 'root'

})
export class AnimalService {

  apiUri = '/api/animals';
  httpOptions = new HttpHeaders().set('Content-type', 'application/json');
  constructor(private http: HttpClient) { }

  getAllAnimalsData(): Observable<any> {
    return this.http.get<any>(this.apiUri)


  }

  newAnimal(data: any): Observable<any> {
    return this.http.post<any>(
      this.apiUri,
      data,
      { headers: this.httpOptions });
  }


}


