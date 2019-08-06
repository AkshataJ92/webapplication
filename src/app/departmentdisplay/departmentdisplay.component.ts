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
    new Dept('nonIT','tdyhg')
  ];
  constructor(private _router:Router) { }

  ngOnInit() {
  }

  onClickAdd()
  {
    this._router.navigate(['/adddept']);
  }


  onClickDelete(item:Dept){

    this.arrdept.splice(this.arrdept.indexOf(item),1);
  }


}
