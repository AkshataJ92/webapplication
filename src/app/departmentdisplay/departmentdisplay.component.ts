import { Component, OnInit } from '@angular/core';
import { Dept } from './dept';
import { Router } from "@angular/router";

@Component({
  selector: 'app-departmentdisplay',
  templateUrl: './departmentdisplay.component.html',
  styleUrls: ['./departmentdisplay.component.css']
})
export class DepartmentdisplayComponent implements OnInit {
  name:string='';
  description:string='';
  arrdept:Dept[]=[
    new Dept('IT','ftyhtjg'),
    new Dept('nonIT','tdyhg'),
    new Dept('bpo','bbb')
  ];
  constructor(private _router:Router) { }

  ngOnInit() {
  }

  onClickAdd()
  {
    this._router.navigate(['/adddept']);
  }

  onClickEdit(item:Dept)
  {
    this._router.navigate(['/editdept',item.name]);
  }


  onClickDelete(item:Dept){
    var userPreference;
        if (confirm("Do you want to delete?") == true){

    this.arrdept.splice(this.arrdept.indexOf(item),1);



        }

      else{
        userPreference = "Save Cancelled!";
    }
  }
}
