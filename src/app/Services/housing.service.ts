import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { IProperty } from '../Models/IProperty.interface';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor( private http : HttpClient) { }

  getAllProperties(sellRent:number){
    return this.http.get("data/properties.json").pipe(
      map(data=>{
        const propertyArray:Array<IProperty>=[]
        for(const id in data)
        {
          if(data.hasOwnProperty(id)&& data[id].SellRent===sellRent)
          {
            propertyArray.push(data[id])
          }
        }
        return propertyArray;
      })
    )
  }
}
