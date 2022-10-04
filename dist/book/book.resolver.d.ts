import { Book as BookModel } from '../graphql';
import { AddBookArgs } from './args/add-books.args';
import { BookService } from './book.service';
export declare class BookResolver {
    private readonly bookService;
    constructor(bookService: BookService);
    getAllBooks(): BookModel[];
    getBookById(id: number): BookModel;
    deleteBook(id: number): string;
    addBook(addBookArgs: AddBookArgs): string;
    updateBook(id: number, updateBookArgs: AddBookArgs): string;
}
