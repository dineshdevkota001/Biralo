import { Order, Result } from "./Common";
import { ChapterResponse } from "./Chapter";

// userFeed??
export interface FeedQuery {
  limit?: number;
  offset?: number;
  order?: {
    createdAt?: Order;
    updatedAt?: Order;
  };
  createdAtSince?: string;
  updatedAtSince?: string;
  publishedAtSince?: string;
}
export interface FeedResponse {
  results: Array<ChapterResponse>;
  limit: number;
  offset: number;
  total: number;
}

export interface ReadChapters {
  result: Result;
  data: Array<string>;
}

export interface QueryMultipleReadRequest {
  ids: Array<string>;
}
