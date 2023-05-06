import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProperty } from 'src/app/Models/IProperty.interface';
import { HousingService } from 'src/app/Services/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent {
  sellRent=1;
  Properties:Array<IProperty>=[];
  constructor(private houseService:HousingService,private route:ActivatedRoute){}

  ngOnInit(){
    if(this.route.snapshot.url.toString()){
      this.sellRent=2;
    }
    this.houseService.getAllProperties(this.sellRent).subscribe(

      data=>{
        this.Properties=data;
      },
      error=>{
        console.log("Error Message:");
        console.log(error);
      }
    )
  }
}
