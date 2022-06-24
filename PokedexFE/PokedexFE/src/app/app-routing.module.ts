import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./list/list.component";
import {SearchComponent} from "./search/search.component";
import {LoginComponent} from "./login/login.component";
import { RegisterComponent } from './register/register.component';
import {CreateComponent} from "./create/create.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', component: ListComponent},
  {path: 'list', component:ListComponent},
  {path: 'search', component:SearchComponent},
  {path: 'logout', component:ListComponent},
  {path: 'create', component:CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
