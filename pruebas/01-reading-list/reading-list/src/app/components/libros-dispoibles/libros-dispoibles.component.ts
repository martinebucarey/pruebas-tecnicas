import { Component, OnInit } from '@angular/core';
import data from '../../books.json';
import { BookInteface } from './book.interface';

@Component({
  selector: 'app-libros-dispoibles',
  templateUrl: './libros-dispoibles.component.html',
  styleUrls: ['./libros-dispoibles.component.css'],
})
export class LibrosDispoiblesComponent implements OnInit {
  public books: BookInteface[] = [];
  ngOnInit() {
    this.getBooks();
  }

  getBooks = () => {
    this.books = data.library.map((elto: any) => {
      return {
        title: elto.book.title,
        pages: elto.book.pages,
        genre: elto.book.genre,
        cover: elto.book.cover,
        synopsis: elto.book.synopsis,
        year: elto.book.year,
        ISBN: elto.book.ISBN,
        author: elto.book.author,
      };
    });
  };
}
