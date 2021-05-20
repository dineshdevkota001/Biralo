export type Status = "ongoing" | "completed" | "hiatus" | "cancelled";
export type TagsMode = "AND" | "OR";
export type Demographic = "shounen" | "shoujo" | "josei" | "seinen" | "none";
export type Rating = "safe" | "suggestive" | "erotica" | "pornographic";
export type Order = "asc" | "desc";
export type ID =
  | "manga"
  | "chapter"
  | "author"
  | "artist"
  | "scanlation_group"
  | "tag"
  | "user"
  | "custom_list";
export type Result = "ok" | "error";

export interface LocalizedString {
  [id: string]: string;
}
export interface Link {
  [id: string]: string;
}

export interface Relationship {
  id: string;
  type: Relationship;
}
