import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User();
  errorMessage = '';

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  register(){

    if(!this.user.username){
      this.errorMessage = "Username is required"
      return;
    }

    if(!this.user.password){
      this.errorMessage = "Password is required"
      return;
    }

    this.user.enabled = true;
    this.user.role = 'ROLE_USER';
    this.userService.addUser(this.user).subscribe(
      (response: User) => {
        this.router.navigate(['/list']);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

}
