import React from "react";
import { useEffect, useState } from "react";
import { View, RefreshControl, Button, StyleSheet } from "react-native";
import { ChapterList } from "../components/ChapterList";
import * as routes from "../constants/routes";
import * as manga from "../constants/mangalist-stack";
import { getMangaList } from "../api/manga";
import { SingleManga } from "../interfaces/manga";

export const UserMangaList = ({ navigation }) => {
  const [mangaOptions, setMangaOptions] = useState({
    limit: 30,
    offset: 0,
    locales: ["en"],
  });

  const [mangaList, setMangaList] = useState<Array<SingleManga>>([]);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(true);
  const [canRetry, setCanRetry] = useState<boolean>(false);

  useEffect(() => {
    onRefresh();
  }, []);

  const onRefresh = async () => {
    setIsRefreshing(true);
    const newMangaList = await getMangaList(routes.USERMANGA, mangaOptions);
    setMangaList(newMangaList);
    console.log(newMangaList);
    setIsRefreshing(false);
    setCanRetry(true);
  };
  const handleShowGallery = (hash: string, data: Array<String>, baseUrl: string) => {
    navigation.navigate(manga.GALLERY, { hash, data, baseUrl });
  };

  const onAdd = async () => {
    const newMangaOptions = {
      ...mangaOptions,
      offset: mangaOptions.offset + mangaOptions.limit,
    };
    setMangaOptions(newMangaOptions);
    const addMangaList = await getMangaList(routes.USERMANGA, newMangaOptions);
    const newMangaList = [...mangaList, ...addMangaList];
    setMangaList(newMangaList);
  };

  const handleShowDetails = (id: string) => {
    navigation.navigate(manga.MANGADETAILS, { id: id });
  };

  return (
    <View>
      <ChapterList
        chapterList={mangaList}
        handleShowGallery={handleShowGallery}
        RefreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
        }
        headerComponent={<></>}
      />
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
