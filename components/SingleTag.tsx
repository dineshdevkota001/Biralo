import React, { useEffect, useState } from "react";
import { Chip } from "react-native-paper";

interface SingleTagProps {
  id: string;
  name: string;
  includeUUID: Function;
  excludeUUID: Function;
}
const Selections = ["", "check", "remove"];

export const SingleTag = ({ id, name, includeUUID, excludeUUID }: SingleTagProps) => {
  const [selection, setSelection] = useState(0);
  useEffect(() => {
    switch (selection) {
      case 1:
        includeUUID(id);
        break;
      case 2:
        excludeUUID(id);
        break;
    }
  }, [selection]);
  return (
    <>
      <Chip
        icon={Selections[selection]}
        onPress={() => {
          setSelection((selection + 1) % 3);
        }}
      >
        {name}
      </Chip>
    </>
  );
};
