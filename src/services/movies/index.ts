import { BaseService } from "..";
import { Config } from "../../base";
import { IMovie } from "./movie.types";

const ENDPOINT = "movie";

export class Movies extends BaseService {
  constructor(config: Config) {
    super(ENDPOINT, config);
  }

  async getMovieList() {
    return this.getList<IMovie>();
  }

  async getMovieById(id: string) {
    return this.getById<IMovie>(id);
  }

  async getMovieQuote(id: string): Promise<IMovie> {
    return this.getQuote<IMovie>(id);
  }
}
