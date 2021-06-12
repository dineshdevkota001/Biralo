import React, { useState, useEffect } from "react";
import { RefreshControl, ScrollView } from "react-native";
import * as routes from "../constants/routes";
import * as manga from "../constants/mangalist-stack";
import { getMangaDetails, getMangaChapters } from "../api/manga";
import { Details } from "../components/Details";
import { MangaDetail } from "../interfaces/manga-detail";
import { ChapterList } from "../components/ChapterList";
import { decode } from "html-entities";

export const MangaDetails = ({ route, navigation }) => {
  const [mangaDetail, setMangaDetail] = useState<MangaDetail>();
  const [chapterList, setChapterList] = useState();
  const [isRefreshing, setIsRefreshing] = useState<boolean>(true);
  useEffect(() => {
    refreshDetail();
    refreshChapter();
  }, []);

  const handleShowGallery = (hash: string, data: Array<String>, baseUrl: string) => {
    navigation.navigate(manga.GALLERY, { hash, data, baseUrl });
  };

  const refreshDetail = async () => {
    const newMangaDetail = await getMangaDetails(routes.MANGA, route.params.id);
    setMangaDetail(newMangaDetail);
  };
  const refreshChapter = async () => {
    const newChapterList = await getMangaChapters(routes.MANGA, route.params.id);
    setChapterList(newChapterList);
    setIsRefreshing(false);
  };
  return (
    <ChapterList
      chapterList={chapterList}
      handleShowGallery={handleShowGallery}
      RefreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={refreshChapter} />
      }
      headerComponent={<Details mangaDetail={mangaDetail} />}
    />
  );
};
