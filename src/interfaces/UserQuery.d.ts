import { Result, Status } from "./Common";
import { MangaResponse } from "./Manga";
export interface FollowMangaQuery {
  limit?: number;
  offset?: number;
}

export interface FollowMangaResponse {
  results: Array<MangaResponse>;
  limit: number;
  offset: number;
  total: number;
}

export interface AllMangaResponse {
  result: Result;
  statuses: { [uuid: string]: Status }[];
}

export interface MangaStatusResponse {
  result: Result;
  status: Status;
}

export interface updateReadingStatusPost {
  status: Status;
}
