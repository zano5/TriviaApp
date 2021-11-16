import React, { useEffect } from "react";
import { View, Image } from "react-native";
import { TrivalText } from "../components/TrivialText/trivalText";
import { TrivalButton } from "../components/TrivialButton/trivalButton";
import { Button } from "react-native";
import { CategoryButton } from "../components/CatergoryButton/CategoryButton";

import { appLayout } from "../constants/appLayout";

export function Detail() {
  return (
    <View style={appLayout.textPositionContainer}>
      <View style={{ marginTop: 10 }}>
        <TrivalText title="Select Category" size={25}></TrivalText>
        <View style={{ marginTop: 20 }}>
          <CategoryButton title="History" item="history" />
          <CategoryButton title="Movies" item="movies" />
          <CategoryButton title="Music" item="music" />
        </View>
      </View>
      <TrivalButton
        title="Previous Scores"
        location="Score List"
      ></TrivalButton>
    </View>
  );
}
