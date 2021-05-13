import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default {
  WINDOW: {
    width,
    height,
  },
  isSmallDevice: width < 375,
};
export const SIZE = { width, height };
