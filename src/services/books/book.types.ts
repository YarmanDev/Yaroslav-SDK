import { ResponseBase } from "../../global.types";

export declare interface Book {
  _id: string;
  name: string;
}

export declare type IBook = ResponseBase<Book[]>;
