import qs from "query-string";
import { MangaList, SingleManga } from "../interfaces/manga";
import { MangaDetail } from "../interfaces/manga-detail";
import { get } from "../utils/http";
const serialize = (obj) => {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
};

export async function getMangaList(
  endpoint: string,
  options?: unknown
): Promise<Array<SingleManga>> {
  try {
    const mangaList = (await get(endpoint, options)) as MangaList;
    return mangaList.results;
  } catch (error) {
    console.log("Error Occured", error);
  }
}
export async function getMangaDetails(
  endpoint: string,
  id: string
): Promise<MangaDetail> {
  try {
    const mangaDetails = (await get(`${endpoint}/${id}`)) as MangaDetail;
    return mangaDetails;
  } catch (error) {
    console.log("Error Occured", error);
  }
}

export async function getMangaChapters(endpoint: string, id: string) {
  try {
    const mangaDetails = await get(`${endpoint}/${id}/feed`);
    return mangaDetails.results;
  } catch (error) {
    console.log("Error Occured", error);
  }
}

export async function getBaseUrl(endpoint: string, id: string) {
  try {
    const mangaDetails = (await get(`${endpoint}/${id}`)) as { baseUrl: string };
    return mangaDetails.baseUrl;
  } catch (error) {
    console.log("Error Occured", error);
  }
}
