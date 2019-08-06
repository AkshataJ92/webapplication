import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { DepartmentdisplayComponent } from './departmentdisplay/departmentdisplay.component';
import { AdddeptComponent } from './departmentdisplay/adddept/adddept.component';
import { routing } from "./app.routing";
import { EditdeptComponent } from './departmentdisplay/editdept/editdept.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentdisplayComponent,
    AdddeptComponent,
    EditdeptComponent
  ],
  imports: [
    BrowserModule, FormsModule, routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
