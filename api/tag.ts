import { get } from "../utils/http";
import * as routes from "../constants/routes";
export async function getTagList() {
  try {
    const tagList = (await get(routes.TAGS)) as Array<any>;
    let tagListNecessary = [];
    tagList.forEach((tag) => {
      const {
        id,
        attributes: {
          name: { en },
        },
      } = tag;
      tagListNecessary.push({ id, name: en });
    });
    console.log(tagList);
    return tagListNecessary;
  } catch (error) {
    console.log("Error Occured", error);
  }
}
