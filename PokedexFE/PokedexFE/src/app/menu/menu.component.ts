import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenicationService } from '../login/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isLoggedIn = false;

  constructor(private route: ActivatedRoute,
    private router: Router,
    public authenticationService: AuthenicationService
    ) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authenticationService.isUserLoggedIn();
    console.log(this.authenticationService.username);
  }

  handleLogout() {
    this.authenticationService.logout();
  }

}
