import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Login } from "../models/login.model";

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient){}

  path = "localhost:90/api/v1"
  headers: {
    'Content-Type': 'application/json',
    'x-api-token': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`
  }

  buscarLogin(login: Login){
    return this.http.post(this.path+"/getLogin", login,{ 'headers': this.headers })
    .pipe(map((response: any) => response));
  }


}
