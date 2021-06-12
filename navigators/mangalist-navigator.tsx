import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MANGALIST, MANGADETAILS, GALLERY } from "../constants/mangalist-stack";
import { MangaList } from "../screens/manga-list";
import { MangaDetails } from "../screens/manga-detail";
import { Gallery } from "../screens/gallery";

const Stack = createStackNavigator();

export const MangaListNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={MANGALIST}>
      <Stack.Screen name={MANGALIST} component={MangaList} />
      <Stack.Screen name={MANGADETAILS} component={MangaDetails} />
      <Stack.Screen name={GALLERY} component={Gallery} />
    </Stack.Navigator>
  );
};
