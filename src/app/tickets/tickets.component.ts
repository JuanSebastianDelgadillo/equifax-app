import { Component, OnInit } from '@angular/core';
import { TicketsService } from '../services/tickets.service';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  constructor(private ticketsService: TicketsService, private usuarios: UsuariosService) { }

  tickets = {}
  alertData = false

  ngOnInit(): void {
    this.getTickets()
  }

  getTickets(){
    this.ticketsService.getAllTickets()
    .subscribe(
      (response:any)=>{
        console.log(response)
        if(response.internalCode == 200){
          this.tickets = response.payload
        }else{
          this.alertData = true;
        }
      }
    )
  }

  buscarUsuario(idUser:any){
    this.usuarios.buscarUsuario(idUser)
    .subscribe(
      (response:any)=>{
        console.log(response)
        if(response.internalCode == 200){
          this.tickets = response.payload
        }else{
          this.alertData = true;
        }
      }
    )



  }





}
