import { Component,OnInit } from '@angular/core';
import {lastValueFrom} from 'rxjs';
import { Book } from '../models/books.model';
import { BookService } from '../services/book.service';




@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
 
  serviceBook:BookService; 
  books?:Book[];
  searchString:any ="";

  constructor(bookService:BookService){
    this.serviceBook = bookService;
  }
 

  onClickImage(book:Book) {
    book.previewMode = !book.previewMode;
  }


  ngOnInit() {
    this.getBooks();
  }
  // ngOnInit() {
  //   this.getBooks("");
  // }
  
  onSubmit() {
    this.getBooks()
  }
  // onSubmit() {
  //   this.getBooks(this.searchString)
  // }

  private async getBooks() {

    this.books = await lastValueFrom(this.serviceBook.getBooks(this.searchString))

    
    // this.serviceBook.getBooks(this.searchString).then(data => {
    //   this.books = data;
    // })
  }
  
  // private getBooks(author: string) {
  //   this.books = this.serviceBook.getBooks(author)
  // }

}
