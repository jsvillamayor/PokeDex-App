import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { MenuComponent } from './menu/menu.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HelloWorldService} from "./hello-world.service";
import { ListComponent } from './list/list.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import {HttpInterceptorService} from "./basic-auth-interceptor.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    MenuComponent,
    ListComponent,
    SearchComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [HelloWorldService,     { provide: HTTP_INTERCEPTORS,
  useClass: HttpInterceptorService,
  multi: true
}],
  bootstrap: [AppComponent]
})
export class AppModule { }
