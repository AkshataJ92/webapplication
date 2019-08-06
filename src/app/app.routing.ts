import { Routes, RouterModule } from "@angular/router";
import { DepartmentdisplayComponent } from './departmentdisplay/departmentdisplay.component';
import { AdddeptComponent } from './departmentdisplay/adddept/adddept.component';



const arr:Routes=[
  {path:"", component:DepartmentdisplayComponent},
  {path:"adddept", component:AdddeptComponent}
];

export const routing=RouterModule.forRoot(arr);
