import React from "react";
import { useEffect, useState } from "react";
import { View, RefreshControl, Button, StyleSheet } from "react-native";
import GridItem from "../components/GridItem";
import * as routes from "../constants/routes";
import * as manga from "../constants/mangalist-stack";
import { getMangaList } from "../api/manga";
import { SingleManga } from "../interfaces/manga";

export const Search = ({ navigation }) => {
  const [mangaOptions, setMangaOptions] = useState({
    limit: 30,
    offset: 0,
  });
  const [mangaList, setMangaList] = useState<Array<SingleManga>>([]);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(true);
  const [canRetry, setCanRetry] = useState<boolean>(false);

  useEffect(() => {
    onRefresh();
  }, []);

  const onRefresh = async () => {
    setIsRefreshing(true);
    const newMangaList = await getMangaList(routes.MANGA, { limit: 30, offset: 0 });
    setMangaList(newMangaList);
    setIsRefreshing(false);
    setCanRetry(true);
  };

  const onAdd = async () => {
    const newMangaOptions = {
      ...mangaOptions,
      offset: mangaOptions.offset + mangaOptions.limit,
    };
    setMangaOptions(newMangaOptions);
    const addMangaList = await getMangaList(routes.MANGA, newMangaOptions);
    const newMangaList = [...mangaList, ...addMangaList];
    setMangaList(newMangaList);
  };

  const handleShowDetails = (id: string) => {
    navigation.navigate(manga.MANGADETAILS, { id: id });
  };

  return (
    <View>
      <Options />
      {canRetry && !mangaList && !isRefreshing && (
        <View style={style.retry}>
          <Button title="retry" onPress={onRefresh} />
        </View>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  retry: {
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
    height: "100%",
  },
});
