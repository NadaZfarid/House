import { Component } from '@angular/core';
import { AlertService } from 'src/app/Services/alert.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(private alerService:AlertService){}

  loggedin(){
    return localStorage.getItem('token')
  }

  logOut(){
    localStorage.removeItem('token');
    this.alerService.success("You loggedOut")
  }
}
