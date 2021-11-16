import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { TrivalButton } from "../../components/TrivialButton/trivalButton";
import { TrivalText } from "../../components/TrivialText/trivalText";
import { useNavigation } from "@react-navigation/native";
import { appLayout } from "../../constants/appLayout";

export default function ScoreScreen({ route }) {
  let score: any = route.params.score;

  let itemScore = score.correctAnswers + "/10";

  useEffect(() => {}, []);

  return (
    <View style={appLayout.textPositionContainer}>
      <TrivalText title={score.category} size={28}></TrivalText>
      <TrivalText title={itemScore} size={28}></TrivalText>

      <TrivalButton title="Restart Game" location="Category"></TrivalButton>
    </View>
  );
}
