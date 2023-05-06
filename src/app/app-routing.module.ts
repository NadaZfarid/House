import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './Components/error-page/error-page.component';
import { AddPropertyComponent } from './Components/Property/add-property/add-property.component';
import { PropertyDetailComponent } from './Components/Property/property-detail/property-detail.component';
import { PropertyListComponent } from './Components/Property/property-list/property-list.component';

const routes: Routes =
[
{path:"",component:PropertyListComponent},
{path:"addProperty",component:AddPropertyComponent},
{path:"rentProperty",component:PropertyListComponent},
{path:"propertyDetails/:id",component:PropertyDetailComponent},
{path:"**",component:ErrorPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
