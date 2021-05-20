import { ID, Relationship, Result } from "./Common";
// Attributes ie information to display
export interface ChapterAttributes {
  title: string;
  volume: string | null;
  chapter: string | null;
  translatedLanguage: string;
  hash: string;
  data: Array<string>;
  dataSaver: Array<string>;
  uploader: string;
  version: number;
  createdAt: string;
  updatedAt: string;
  publishAt: string;
}
// A single chapter information
export interface Chapter {
  id: string;
  type: ID;
  attributes: ChapterAttributes;
}
//  single chapter information with other relations
export interface ChapterResponse {
  result: Result;
  data: Chapter;
  relationships: Array<Relationship>;
}
