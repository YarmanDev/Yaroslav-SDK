import { ResponseBase } from "../../global.types";

export declare interface Character {
  _id: string;
  birth: string;
  death: string;
  gender: string;
  hair: string;
  height: string;
  name: string;
  race: string;
  realm: string;
  spouse: string;
  wikiUrl: string;
}

export declare type ICharacter = ResponseBase<Character[]>;