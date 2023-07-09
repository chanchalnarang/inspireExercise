import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
Books:any
  constructor(private http:HttpClient) { }
  getBooks(){
    return this.http.get('https://s3.amazonaws.com/api-fun/books.json')
  }
}
