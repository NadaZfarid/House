import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private fb:FormBuilder){

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
  onSubmit(){
    console.log(this.form);

  }

}
