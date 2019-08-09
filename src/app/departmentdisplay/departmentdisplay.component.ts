import { Component, OnInit } from '@angular/core';
import { Dept } from './dept';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-departmentdisplay',
  templateUrl: './departmentdisplay.component.html',
  styleUrls: ['./departmentdisplay.component.css']
})
export class DepartmentdisplayComponent implements OnInit {
  updatedItem;
  closeResult: string;
  name:string='';
  description:string='';
  arr:Dept[]=[
    new Dept('Yourdrs-Web Development','Web Application Development'),
    new Dept('Yourdrs Anodroid App Development','Yourdrs Android App Development'),
    new Dept('Yourdrs IOS App Development','Yourdrs IOS App Development'),
    new Dept('Yourdrs Tech support','Yourdrs Tech Support'),
    new Dept('Office case management','office case management'),
    new Dept('Data entry','Data Entry'),
    new Dept('Charge Entry','Charge entry'),
    new Dept('Medical transcription','Medical transcription'),
    new Dept('Human resources','Human resources'),
    new Dept('Administration','Administration')
  ];

  constructor(private modalService: NgbModal) { }

  ngOnInit() {}

  // modal
  open(content) {
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  },
  reason => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  }
  );
}

open1(content1) {
  this.modalService.open(content1, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  },
  reason => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  }
  );
}

// modal
private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return  `with: ${reason}`;
  }
}


  /*onClickAdd()
  {
    this._router.navigate(['/adddept']);
  }

 /* onClickEdit(item:Dept)
  {
    this._router.navigate(['/editdept']);
  }*/

  onSaveClick(){

    this.arr.push(new Dept(this.name,this.description));
  }


  onClickDelete(item:Dept){
        if (confirm("Do you want to delete")){
          console.log("Implement delete functionality here");
    this.arr.splice(this.arr.indexOf(item), 1);
        }
      }

      EditItem(i){
        this.name=this.arr[i].name;
        this.description=this.arr[i].description;

        this.updatedItem=i;
      }

      UpdateItem(){
        let data = this.updatedItem;
    for (let i = 0; i < this.arr.length; i++) {
      if (i == data) {
        this.arr[i].name = this.name ;
        this.arr[i].description = this.description;
      }
    }
      }

      search(value) {
        if (value != "") {
          this.arr = this.arr.filter(x => x.name.indexOf(value) != -1);
        //}  else {
        //   this.arr.getAllDesig().subscribe(
        //     (data: Designation[]) => {
        //       this.arr = data;
        //     },
        //     function(error) {
        //       alert(error);
        //     },
        //     function() {}
        //   );
        // }
      }
      }
    }


      // Edit modal popup
  /*openEdit(content, item) {
    console.log(item);
    this.name = item.name;
    this.description = item.description;
    console.log('updating');
    console.log(this.name);
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        result => {
          this.closeResult = `Closed with: ${result}`;
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  // modal
  // private getDismissReason(reason: any): string {
  // if (reason === ModalDismissReasons.ESC) {
  // return 'by pressing ESC';
  // } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  // return 'by clicking on a backdrop';
  // } else {
  // return `with: ${reason}`;
  // }
  // }
  // End Edit modal popup


  // onAddDesig() {
  // console.log(this.name);

  // console.log(this.arrDesig);
  // }

  // Update
  onEditDesign(f) {
    console.log(f.value);
    // if (condition) {

    // }

    // this.arrDesig.push(new Designation(this.name, this.description));
  }

  // Create
  // onAddDesign(f) {

  // }

  EditItem(content, i) {
    console.log(content);
    this.name = this.arr[i].name;
    this.description = this.arr[i].description;
    this.updatedItem = i;

    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        result => {
          this.closeResult = `Closed with: ${result}`;
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  UpdateItem() {
    const data = this.updatedItem;
    for (let i = 0; i < this.arr.length; i++) {
      if (i == data) {
        this.arr[i].name = this.name;

        this.arr[i].description = this.description;
      }
    }
  }
}*/

