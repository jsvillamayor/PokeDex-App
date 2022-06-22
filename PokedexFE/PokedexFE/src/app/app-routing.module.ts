import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HelloWorldComponent} from "./hello-world/hello-world.component";
import {ListComponent} from "./list/list.component";
import {SearchComponent} from "./search/search.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: HelloWorldComponent},
  {path: 'hello-world', component: HelloWorldComponent},
  {path: 'list', component:ListComponent},
  {path: 'search', component:SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
