import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import {BasicAuthInterceptorService} from "./basic-auth-interceptor.service";
import {FormsModule} from "@angular/forms";
import { LogoutComponent } from './logout/logout.component';
import {NgxPaginationModule} from "ngx-pagination";
import { RegisterComponent } from './register/register.component';
import { UserService } from './user/user.service';
import { CreateComponent } from './create/create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule } from '@angular/material/dialog';
import { ImforComponent } from './imfor/imfor.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    CreateComponent,
    ImforComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,
    HttpClientModule,NgxPaginationModule,
    FormsModule,MatDialogModule, MatInputModule, MatButtonModule, MatCardModule, MatFormFieldModule,
    BrowserAnimationsModule
  ],
  providers: [UserService,
    { provide: HTTP_INTERCEPTORS,
      useClass: BasicAuthInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
