// src/utils/HighlightText.js
import React from "react";
import { Text } from "@chakra-ui/react";

const HighlightText = ({ text = "", highlight = "" }) => {
  if (!highlight) return <>{text}</>;

  const regex = new RegExp(`(${highlight})`, "ig");
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <Text
            as="span"
            key={i}
            bg="yellow.200"
            fontWeight="bold"
          >
            {part}
          </Text>
        ) : (
          <Text as="span" key={i}>
            {part}
          </Text>
        )
      )}
    </>
  );
};

export default HighlightText;
