import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent {

  propertyType:Array<string>=["House", "Apartment", "Duplex",'Villa']
  furnisheType:Array<string>=["Fully", "Semi", "Unfurnished"]
  constructor(private router:Router){}
  onBack(){
    this.router.navigate([''])
  }
  onSubmit(form:NgForm){
    console.log(form)
  }
}
