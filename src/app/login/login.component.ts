import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';
import { Login } from "../models/login.model";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  nombreLogin = ""
  passLogin = ""
  validaLogin = false
  condition = true
  validaPass = false
  btnSubmit = false

  constructor(private router:Router, private usuariosService: UsuariosService) { }

  ngOnInit(): void {
  }

  login(){
    if(this.nombreLogin == "" || this.passLogin == "") { 
      this.validaLogin = false
      return
    }
      
    let login = new Login(
      this.nombreLogin,
      this.passLogin,
      )

    this.usuariosService.buscarLogin(login)
    .subscribe(
      (response:any)=>{
        console.log(response)
        if(response.internalCode == 200){
          if(response.client){
            localStorage.setItem('usuario', response.payload);
            this.router.navigate(['tickets'])
          }
        }else{
          this.condition = false
        }
      }
    )
  }


  valuechangeUser(newValue:any) {
    this.habilitarBoton();
  }

  valuechangePass(newValue:any) { 
    this.habilitarBoton();
  }

  habilitarBoton(){
    if(this.nombreLogin.length > 3 &&  this.passLogin.length > 3){
      this.btnSubmit = true
      this.condition = true 
    }else{
      this.condition = false 
    }
  }
}
