import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/Services/alert.service';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userSubmit:boolean=false;
  constructor(private fb:FormBuilder,
              private alertService:AlertService,
              private authService:AuthService,
              private route:Router){}



  loginForm = this.fb.group({
    Email:[null,Validators.required],
    Password:[null,Validators.required]
  })

  get Email(){
    return this.loginForm.get("Email") as FormControl;
  }

  get Password(){
    return  this.loginForm.get("Password") as FormControl
  }

  onSubmit(){
    const token = this.authService.authUser(this.loginForm.value);
    console.log(token);

    if(token)
    {
      localStorage.setItem('token',token.email);
      this.alertService.success("You Loggedin Successfully ")
      this.userSubmit=false;
      this.route.navigate([""])
    }else{
      this.alertService.error("Please Enter valid Email and Password")
      this.userSubmit=true;
    }
  }

}
