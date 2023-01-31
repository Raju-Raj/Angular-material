import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { FormDialogComponent } from '../form-dialog/form-dialog.component';
import { SuccessDialogComponent } from '../success-dialog/success-dialog.component';

export interface PeriodicElement {
 id:string,
 img:string,
 published:string,
 info:string
}

const ELEMENT_DATA: PeriodicElement[] = [
 {
  id:'1',
  img:"https://material.angular.io/assets/img/examples/shiba2.jpg",
  published:'01-01-2023',
  info:"Its a Dog Image"
 },
 {
  id:'2',
  img:"https://material.angular.io/assets/img/examples/shiba2.jpg",
  published:'02-01-2023',
  info:"Its a Dog Image"
 },
 {
  id:'3',
  img:"https://material.angular.io/assets/img/examples/shiba2.jpg",
  published:'03-01-2023',
  info:"Its a Dog Image"
 },
 {
  id:'4',
  img:"https://material.angular.io/assets/img/examples/shiba2.jpg",
  published:'04-01-2023',
  info:"Its a Dog Image"
 },
 {
  id:'5',
  img:"https://material.angular.io/assets/img/examples/shiba2.jpg",
  published:'05-01-2023',
  info:"Its a Dog Image"
 }
];

@Component({
  selector: 'app-adminblog',
  templateUrl: './adminblog.component.html',
  styleUrls: ['./adminblog.component.css']
})
export class AdminblogComponent {

  constructor( private dialog:MatDialog){}

  displayedColumns: string[] = ['id','img','published','info','actions'];
  dataSource = ELEMENT_DATA;

  delete(id:any){
    const dialogref = this.dialog.open(ConfirmDialogComponent,{
      data:{message:"Are you Sure"}
    })
   dialogref.afterClosed().subscribe((res)=>{
    if(res){
      let item = this.dataSource.filter((item,index)=>{
        return item.id !== id
       })  
       this.dataSource = item;
       this.dialog.open(SuccessDialogComponent,{
        data:{title:"Success",message:"Deleted Successfully"}
       })
    }
   })
   
  }

  add(){

    const dialogref=this.dialog.open(FormDialogComponent,{
      data:{title:"ADD DATA"}
    })

    dialogref.afterClosed().subscribe((res)=>{
      this.dataSource=[...this.dataSource,
        res
      ]
    })

   
  }

}
