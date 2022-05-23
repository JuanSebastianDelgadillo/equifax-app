import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TicketsComponent } from './tickets/tickets.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'tickets', component: TicketsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
