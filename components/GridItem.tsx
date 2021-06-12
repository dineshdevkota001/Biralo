import React from "react";
import { FlatList, Text, StyleSheet } from "react-native";
import { SingleManga } from "../interfaces/manga";
import { Card } from "react-native-paper";
import { decode } from "html-entities";
interface GridItemProps {
  mangaList: Array<SingleManga>;
  RefreshControl: unknown;
  handleShowDetails: Function;
  onAdd: Function;
}

const GridItem = ({
  mangaList,
  RefreshControl,
  handleShowDetails,
  onAdd,
}: GridItemProps) => {
  const renderSingleManga = (manga: SingleManga) => {
    const { title, description } = manga.data.attributes;
    return (
      <Card onPress={() => handleShowDetails(manga.data.id)} style={style.cardView}>
        <Card.Title title={title ? decode(title.en) : "N/A"} />
        <Card.Content>
          <Text numberOfLines={3}>{description ? decode(description.en) : "N/A"}</Text>
        </Card.Content>
      </Card>
    );
  };
  return (
    <>
      <FlatList
        data={mangaList}
        keyExtractor={(item) => item.data.id}
        renderItem={({ item }) => renderSingleManga(item)}
        onEndReached={() => onAdd()}
        onEndReachedThreshold={0.5}
        refreshControl={RefreshControl}
      />
    </>
  );
};
export default GridItem;

const style = StyleSheet.create({
  mangaItemView: {
    height: 100,
    borderColor: "black",
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: "white",
    margin: 2,
    padding: 2,
  },
  cardView: {
    borderRadius: 5,
    margin: 2,
    padding: 2,
  },
  title: {},
});
