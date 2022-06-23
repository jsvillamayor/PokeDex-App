import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { ListComponent } from './list/list.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import {HttpInterceptorService} from "./basic-auth-interceptor.service";
import {FormsModule} from "@angular/forms";
import { LogoutComponent } from './logout/logout.component';
import {NgxPaginationModule} from "ngx-pagination";
import { RegisterComponent } from './register/register.component';
import { UserService } from './user/user.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListComponent,
    SearchComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,NgxPaginationModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UserService,
    { provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
