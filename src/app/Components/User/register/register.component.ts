import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/Models/user';
import { AlertService } from 'src/app/Services/alert.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user!:User;
  userSubmit:boolean=false;

  constructor(private fb:FormBuilder, private userService:UserService, private alertService:AlertService){

  }
  form= this.fb.group({
    userName:new FormControl('',[Validators.required,Validators.minLength(3)]),
    Email:new FormControl('',[Validators.required,Validators.email]),
    Password:new FormControl('',[Validators.required,Validators.minLength(5)]),
    confirmPassword:new FormControl('',[Validators.required]),
    Mobile:new FormControl(null,[Validators.required,Validators.pattern('^[0-9]{11}$')]),
  },{validators:this.passwordMatchingValidator})


  passwordMatchingValidator(fg:FormGroup):Validators{
    return fg.get('Password')?.value===fg.get('confirmPassword')?.value ? Validators.nullValidator:
    {notMatched:true}
  }

  get userName(){
    return this.form.get('userName') as FormControl;
  }
  get Email(){
    return this.form.get('Email') as FormControl;
  }
  get Password(){
    return this.form.get('Password') as FormControl;
  }
  get confirmPassword(){
    return this.form.get('confirmPassword') as FormControl;
  }
  get Mobile(){
    return this.form.get('Mobile') as FormControl;
  }

  userData():User{
    return this.user={
      userName:this.userName.value,
      email:this.Email.value,
      password:this.Password.value,
      mobile:this.Mobile.value
    }
  }
  onSubmit(){
    console.log(this.form);

    //this.user= Object.assign(this.user,this.form.value);
    if(this.form.valid)
    {
      this.userSubmit=false;
      this.userService.addUser(this.userData());
      this.form.reset();
      this.alertService.success("Register is Successful")
    }else{
      this.alertService.error("Please enter valid info");
      this.userSubmit=true;
      console.log(this.userSubmit);

    }
  }


}
