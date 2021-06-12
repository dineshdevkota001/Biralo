import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { decode } from "html-entities";
import { Caption, Chip, Paragraph, Subheading, Title } from "react-native-paper";

export const Details = ({ mangaDetail }) => {
  if (!mangaDetail) return <View></View>;
  const {
    title,
    altTitles,
    description,
    originalLanguage,
    publicationDemographic,
    status,
    tags,
    updatedAt,
    year,
  } = mangaDetail.data.attributes;
  return (
    <View style={style.root}>
      <Title>{title ? decode(title.en) : "N/A"}</Title>
      <View style={style.altTitleView}>
        {altTitles.map((altTitle, index) => (
          <Caption key={`${altTitle}${index}`}>{`${altTitle.en},`}</Caption>
        ))}
      </View>
      <View>
        <Subheading>{`\nDescription `}</Subheading>
        <Paragraph>{description ? decode(description.en) : "N/A"}</Paragraph>
      </View>
      <View style={style.altTitleView}>
        {tags.map((tag, index) => (
          <Chip key={`${tag}${index}`}> {`${tag.attributes.name.en}`}</Chip>
        ))}
      </View>
      <View style={style.altTitleView}>
        <Subheading>{`\nUpdated At `}</Subheading>
        <Chip>{updatedAt ?? "N/A"}</Chip>
      </View>
      <View style={style.altTitleView}>
        <Subheading>{`\nStatus `}</Subheading>
        <Chip>{status ?? "N/A"}</Chip>
      </View>
      <View style={style.altTitleView}>
        <Subheading>{`\nDemographic `}</Subheading>
        <Chip>{publicationDemographic ?? "N/A"}</Chip>
      </View>
      <View style={style.altTitleView}>
        <Subheading>{`\nOriginal Language `}</Subheading>
        <Chip>{originalLanguage ?? "N/A"}</Chip>
      </View>
      <View style={style.altTitleView}>
        <Subheading>{`\nYear `}</Subheading>
        <Chip>{year ?? "N/A"}</Chip>
      </View>

      <Title>{`\nChapters `}</Title>
    </View>
  );
};

const style = StyleSheet.create({
  altTitleView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    flexWrap: "wrap",
  },
  root: {
    margin: 5,
  },
});
