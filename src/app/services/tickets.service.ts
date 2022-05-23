import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Tickets } from "../models/tickets.model";
import { Usuarios } from '../models/usuario.model';


@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  path = "localhost:90/api/v1"
  token = null;
  constructor(private http: HttpClient){
    this.token = localStorage['usuarios.token'] 
  }

  getAllTickets(){
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
    return this.http.post(this.path+"/getLogin", { 'headers': headers })
    .pipe(map((response: any) => response));
  }


}
