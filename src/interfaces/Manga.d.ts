import { Relationship, LocalizedString, Link, Status, ID, Demographic } from "./Common";
import { Tag } from "./Tag";

export interface MangaAttributes {
  title: LocalizedString;
  altTitles: Array<LocalizedString>;
  description: LocalizedString;
  isLocked: boolean;
  links: Array<Link>;
  originalLanguage: string;
  lastVolume: string;
  lastChapter: string;
  publicationDemographic: Demographic | null;
  status: Status | null;
  year: number | null;
  tags: Array<Tag>;
  version: number;
  createdAt: string;
  updatedAt: string;
}

export interface Manga {
  id: string;
  type: ID;
  attributes: MangaAttributes;
}

export interface MangaResponse {
  result: Result;
  data: Manga;
  relationships: Array<Relationship>;
}
