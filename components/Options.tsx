import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Caption, Chip, Paragraph, Subheading, Title } from "react-native-paper";
import { getTagList } from "src/api/tag";

export const Options = ({ mangaDetail }) => {
  let tags = [];
  const [includedTags, setIncludedTags] = useState([]);
  const [excludedTags, setExcludedTags] = useState([]);
  useEffect(()=>{
    (async () =>{
      tags =await getTagList()
    })()
  },[])

  const includeTag = (uuid) => {
    setIncludedTags([...includedTags, uuid]);
    if (excludedTags.includes(uuid)) 
  };

  return <></>;
};

const style = StyleSheet.create({
  altTitleView: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  root: {
    margin: 5,
  },
});
