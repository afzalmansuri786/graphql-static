"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const common_1 = require("@nestjs/common");
let BookService = class BookService {
    constructor() {
        this.booksData = [];
    }
    addBook(book) {
        this.booksData.push(book);
        return "Book added Successfully";
    }
    updateBook(id, updateBook) {
        for (let x = 0; x < this.booksData.length; x++) {
            if (this.booksData[x].id === id) {
                this.booksData[x] = updateBook;
            }
        }
        return 'Book updated successfully!';
    }
    deleteBook(id) {
        this.booksData = this.booksData.filter((book) => book.id != id);
        return 'Book has been deleted!';
    }
    findBookById(id) {
        for (let x = 0; x < this.booksData.length; x++) {
            if (this.booksData[x].id === id) {
                return this.booksData[x];
            }
        }
    }
    findAllBooks() {
        return this.booksData;
    }
};
BookService = __decorate([
    (0, common_1.Injectable)()
], BookService);
exports.BookService = BookService;
//# sourceMappingURL=book.service.js.map