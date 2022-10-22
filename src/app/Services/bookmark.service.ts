import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  local = 'localhost:8080';
  //prod ='';
  constructor(private http: HttpClient) { }

  // Login(userName:any, password:any): Observable<any> {
  //   // let url = `http://10.12.13.164:8050/api/User/Login?username=${userName}&password=${password}`;
  //   let url = `${this.local}/paygate/api/v1/auth/signin?username=${userName}&password=${password}`;
  //   return this.http.post(url,{} );
  // }
  
  // register(registration:Registration): Observable<any> {
  //   let url = `${this.local}/paygate/api/v1/auth/signup`;
  //   return this.http.post(url,registration );
  // }

  saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }
  
}
