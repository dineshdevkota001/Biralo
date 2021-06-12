import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MANGALIST, MANGADETAILS, GALLERY } from "../constants/mangalist-stack";
import { UserMangaList } from "../screens/user-list";
import { MangaDetails } from "../screens/manga-detail";
import { Gallery } from "../screens/gallery";

const Stack = createStackNavigator();

export const UserListNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={MANGALIST}>
      <Stack.Screen name={MANGALIST} component={UserMangaList} />
      <Stack.Screen name={MANGADETAILS} component={MangaDetails} />
      <Stack.Screen name={GALLERY} component={Gallery} />
    </Stack.Navigator>
  );
};
