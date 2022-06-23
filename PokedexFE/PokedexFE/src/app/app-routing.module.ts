import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./list/list.component";
import {SearchComponent} from "./search/search.component";
import {LoginComponent} from "./login/login.component";
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', component: ListComponent},
  {path: 'list', component:ListComponent},
  {path: 'search', component:SearchComponent},
  {path: 'logout', component:ListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
