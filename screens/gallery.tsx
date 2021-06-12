import React from "react";
import { FlatList, Dimensions, StyleSheet, Image, Modal, View } from "react-native";
import * as routes from "../constants/routes";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useHeaderHeight } from "@react-navigation/stack";
import ImageViewer from "react-native-image-zoom-viewer";
import ImageZoom from "react-native-image-pan-zoom";
const size = Dimensions.get("screen");
const convertToGalleryType = (data, hash, baseUrl) => {
  if (!data) return data;
  data.sort();
  const returnArray = [];
  data.forEach((item, index) => {
    returnArray.push({
      url: `${baseUrl}${routes.QUALITY}/${hash}/${item}`,
    });
  });
  return returnArray;
};

export const Gallery = ({ route, navigation }) => {
  const { hash, data, baseUrl } = route.params;
  const imagesArray = convertToGalleryType(data, hash, baseUrl);
  return (
    <Modal
      onRequestClose={() => {
        navigation.goBack();
      }}
    >
      <ImageViewer imageUrls={imagesArray} />
    </Modal>
  );
};
const style = StyleSheet.create({
  imageStyle: { width: size.width, height: "100%" },
  blackBackground: { backgroundColor: "black" },
});
