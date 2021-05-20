import { LocalizedString, ID } from "./Common";

export interface TagAttributes {
  name: LocalizedString;
  description: LocalizedString;
  group: string;
  version: number;
}
export interface Tag {
  id: string;
  type: ID;
  attributes: TagAttributes;
}
