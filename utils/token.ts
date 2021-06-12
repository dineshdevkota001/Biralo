// import AsyncStorage from "@react-native-community/async-storage";
import { AsyncStorage } from "react-native";
export const saveJWToken = (tokenID, token) => {
  console.log("update token ", tokenID, token);
  AsyncStorage.setItem(tokenID, token);
};
export const getJWToken = async (tokenID) => {
  const token = await AsyncStorage.getItem(tokenID);
  return token;
};
