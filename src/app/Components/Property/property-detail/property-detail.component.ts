import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent {
  constructor(private route:ActivatedRoute,private router:Router){}
  propertyId!:number;
  ngOnInit(){
    this.propertyId= +this.route.snapshot.params["id"];
    this.route.params.subscribe(
      (params)=>{
        this.propertyId=+params["id"]
      }
    )
  }
  onSelectNext(){
    this.propertyId+=1
    this.router.navigate(['propertyDetails',this.propertyId])
  }

}
