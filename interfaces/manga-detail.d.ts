import { title } from "process";
import { LangVarObjects, LangVarObjects } from "./common";
export interface MangaDetailbackup {
  title: LangVarObjects;
  altTitles: Array<LangVarObjects>;
  description: LangVarObjects;
  authors: Array<string>;
  artists: Array<string>;
  links: unknown;
  originalLanguage: string;
  lastVolume: number;
  lastChapter: number;
  publicationDemographic: string;
  status: string;
  year: number;
  contentRating: string;
  modNotes: string;
  version: number;
}
interface Tag {
  attributes: {
    name: {
      en: string;
    };
    version: number;
  };
  id: string;
  type: string;
}
export interface MangaDetail {
  data: {
    attributes: {
      altTitles: Array<LangVarObjects>;
      contentRating: string;
      createdAt: string;
      description: LangVarObjects;
      isLocked: boolean;
      lastChapter: string;
      lastVolume: unknown;
      links: unknown;
      originalLanguage: string;
      publicationDemographic: unknown;
      status: string;
      tags: Array<Tag>;
      title: LangVarObjects;
      updatedAt: unknown;
      version: number;
      year: unknown;
    };
    id: string;
    type: string;
  };
}
