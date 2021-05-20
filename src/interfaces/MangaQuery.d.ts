import { TagsMode, Status, Demographic, Order, Rating } from "Common";
import { MangaResponse } from "./Manga";

export interface MangaQueryInterface {
  limit?: number;
  offset?: number;
  order?: {
    createdAt?: Order;
    updatedAt?: Order;
  };
  year?: number;
  title?: string;
  authors?: Array<string>;
  artists?: Array<string>;
  includedTags?: Array<string>;
  includedTagsMode?: TagsMode;
  excludedTags?: Array<string>;
  excludedTagsMode?: TagsMode;
  status?: Status;
  originalLanguage?: Array<string>;
  publicationDemographic?: Demographic;
  ids?: Array<string>;
  contentRating?: Rating;
}

export interface MangaListResponse {
  result: Array<MangaResponse>;
  limit: number;
  offset: number;
  total: number;
}
