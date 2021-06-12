import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { Caption, Card, Subheading, Title } from "react-native-paper";
import * as routes from "../constants/routes";
import { getBaseUrl } from "../api/manga";
interface ChapterListProps {
  chapterList: Array<unknown>;
  RefreshControl: unknown;
  handleShowGallery: Function;
  headerComponent: JSX.Element;
}

export const ChapterList = ({
  chapterList,
  RefreshControl,
  handleShowGallery,
  headerComponent,
}: ChapterListProps) => {
  if (chapterList)
    chapterList.sort(function (a, b) {
      var keyA = new Date(a.data.attributes.chapter),
        keyB = new Date(b.data.attributes.chapter);
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    });
  const renderSingleChapter = (chapterDetail) => {
    const {
      attributes: { chapter, title, createdAt, hash, data },
      id,
    } = chapterDetail.data;
    return (
      <Card
        onPress={async () => {
          const baseUrl = await getBaseUrl(routes.BASEQUERY, id);
          handleShowGallery(hash, data, baseUrl);
        }}
        style={style.mangaItemView}
      >
        <Card.Title title={chapter ?? "N/A"} />
        <Card.Content>
          <Subheading>{title ?? null}</Subheading>
          <Caption>{createdAt ?? ""}</Caption>
        </Card.Content>
      </Card>
    );
  };
  return (
    <FlatList
      data={chapterList}
      keyExtractor={(item) => item.data.id}
      renderItem={({ item }) => renderSingleChapter(item)}
      refreshControl={RefreshControl}
      ListHeaderComponent={headerComponent}
    />
  );
};

const style = StyleSheet.create({
  mangaItemView: {
    borderRadius: 5,
    margin: 2,
    padding: 2,
  },
  title: {},
});
