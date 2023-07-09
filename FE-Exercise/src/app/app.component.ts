import { Component } from '@angular/core';
import { BooksService } from './services/books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FE-Exercise';
  Books:any;
  editable=false;
  showList:Boolean=false
constructor(private books:BooksService){
  this.books.getBooks().subscribe(res=>{
    this.Books={...res};
  },err=>{console.log(err)});
  

}
 toggle(){
this.showList=!this.showList
 }
 modify($event: any){
 this.editable=true
 }
 //note:sort functionality should be on backend and api should be provided,keeping it in UI is not recommended

}
