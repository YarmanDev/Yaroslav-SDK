import { BaseService } from "..";
import { Config } from "../../base";
import { IBook } from "./book.types";

const ENDPOINT = "book";

export class Books extends BaseService {
  constructor(config: Config) {
    super(ENDPOINT, config);
  }

  async getBookList() {
    return this.getList<IBook>();
  }

  async getBookById(id: string) {
    return this.getById<IBook>(id);
  }

  async getBookChapters(id: string): Promise<IBook> {
    return await this.fetchReq(`/${ENDPOINT}/${id}/chapter`);
  }

  async getAllBooksChapters() {
    const books = await this.getBookList();
    const allChaptersPromises = books.docs.map((book) =>
      this.getBookChapters(book._id)
    );
    const allChapters = await Promise.all(allChaptersPromises);

    const booksWithChapters = books.docs.map((book, index) => ({
      name: book.name,
      chapters: allChapters[index].docs,
    }));

    return booksWithChapters;
  }
}
