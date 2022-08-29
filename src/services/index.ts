import { Base, Config } from "../base";

export class BaseService extends Base {
  private endpoint: string;

  constructor(endpoint: string, config: Config) {
    super(config);
    this.endpoint = endpoint;
  }

  protected async getList<T>(): Promise<T> {
    return this.fetchReq(`/${this.endpoint}`);
  }

  protected async getById<T>(id: string): Promise<T> {
    return this.fetchReq(`/${this.endpoint}/${id}`);
  }

  protected async getQuote<T>(id: string): Promise<T> {
    return this.fetchReq(`/${this.endpoint}/${id}/quote`);
  }
}
