import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashServiceService {

  constructor(private http:HttpClient) { }

    employee(): Observable<any>{
      return this.http.get('https://jsonplaceholder.typicode.com/users');
    }
    }
    