export interface AddBookArgs {
    id: number;
    title: string;
    price: number;
}
export interface Book {
    id: number;
    title: string;
    price: number;
}
export interface IQuery {
    index(): string | Promise<string>;
    books(): Book[] | Promise<Book[]>;
    findBookById(bookId: number): Nullable<Book> | Promise<Nullable<Book>>;
}
export interface IMutation {
    deletBook(bookId: number): string | Promise<string>;
    addBook(addBookArgs: AddBookArgs): string | Promise<string>;
    updateBook(bookId: number, updaBookArgs: AddBookArgs): string | Promise<string>;
}
declare type Nullable<T> = T | null;
export {};
