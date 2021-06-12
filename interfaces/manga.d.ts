import { Attributes, SingleRelation } from "./common";

export interface SingleManga {
  result: string;
  data: {
    id: string;
    type: string;
    attributes: Attributes;
  };
  relationships: Array<SingleRelation>;
}

export interface MangaList {
  results: Array<SingleManga>;
  limit: number;
  offset: number;
  total: number;
}
