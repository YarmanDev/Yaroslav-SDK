import { BaseService } from "..";
import { Config } from "../../base";
import { ICharacter } from "./character.types";

const ENDPOINT = "character";

export class Characters extends BaseService {
  constructor(config: Config) {
    super(ENDPOINT, config);
  }

  async getCharactersList() {
    return this.getList<ICharacter>();
  }

  async getCharacterById(id: string) {
    return this.getById<ICharacter>(id);
  }

  async getCharacterQuote(id: string): Promise<ICharacter> {
    return this.getQuote<ICharacter>(id);
  }
}
