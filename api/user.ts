import { get } from "src/utils/http";
import * as routes from "src/constants/routes";
export async function getMangaList(options?: unknown) {
  try {
    const mangaList = await get(routes.USERMANGA, options);
    return mangaList.results;
  } catch (error) {
    console.log("Error Occured", error);
  }
}
