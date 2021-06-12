export interface SingleRelation {
  id: string;
  type: string;
}

export interface LangVarObjects {
  [index: string]: string;
}

export interface Attributes {
  title: LangVarObjects;
  altTitles: Array<LangVarObjects>;
  description: LangVarObjects;
  isLocked: boolean;
  links: Array<string>;
  originalLanguage: string;
  lastVolume: string;
  lastChapter: string;
  publicationDemographic: string;
  status: string;
  year: number;
  contentRating: string;
  tags: Array<string>;
  version: number;
  createdAt: string;
  updatedAt: string;
}
