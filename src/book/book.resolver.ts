import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Book as BookModel } from '../graphql';
import { AddBookArgs } from './args/add-books.args';
import { BookService } from './book.service';
import { Book } from './schema/book.schema';

@Resolver(of => Book)
export class BookResolver {
  // @Query(returns => [Book], { name: 'books'})
  // getAllBooks() {
  //   let arr : BookModel[] = [{
  //       id: 1,
  //       title: 'Harry',
  //       price: 599,
  //     },
  //     {
  //       id: 2,
  //       title: 'Potter',
  //       price: 599,
  //     },
  //     {
  //       id: 3,
  //       title: 'Hawgwards',
  //       price: 599,
  //     },
  //   ]; 
  //   return arr; 
  // }

  constructor(private readonly bookService: BookService){}

  //Queries and mutations

  @Query(returns => [Book], { name : 'books'})
  getAllBooks() : BookModel[] {
    return this.bookService.findAllBooks();
  }

  @Query(returns => Book, { name : 'findBookById', nullable:true})
  getBookById(@Args({ name: 'bookId', type : () => Int}) id:number) : BookModel {
    return this.bookService.findBookById(id);
  }

  @Mutation(returns => String, { name: 'deletBook'})
  deleteBook(@Args({name: 'bookId', type: () => Int}) id:number):string {
    return this.bookService.deleteBook(id)
  }

  @Mutation(returns => String, {name: 'addBook'})
  addBook(@Args('addBookArgs') addBookArgs:AddBookArgs):string{
    return this.bookService.addBook(addBookArgs)
  }

  @Mutation(returns => String, { name: 'updateBook'})
  updateBook(@Args({name:'bookId', type: () => Int}) id:number, @Args('updaBookArgs') updateBookArgs:AddBookArgs):string{
    return this.bookService.updateBook(id,updateBookArgs)
  }



}
