import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Login } from "../models/login.model";

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  token = null;
  path = "localhost:90/api/v1"

  constructor(private http: HttpClient){
    this.token = localStorage['usuarios.token'] 
  }
  headers: {'Content-Type': 'application/json'}

  buscarLogin(login: Login){
    return this.http.post(this.path+"/getLogin", login,{ 'headers': this.headers })
    .pipe(map((response: any) => response));
  }

  buscarUsuario(idUser:any){
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
    return this.http.post(this.path+"/getUsuario/"+idUser, { 'headers': headers })
    .pipe(map((response: any) => response));
  }


  validaToken(token:string){
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
    return this.http.post(this.path+"/validaToken/", token,{ 'headers': headers })
    .pipe(map((response: any) => response.payload));
  }



}
