import React from "react";
import { View, Image } from "react-native";
import { TrivalText } from "../components/TrivialText/trivalText";
import { TrivalButton } from "../components/TrivialButton/trivalButton";
import logo from "../common/assets/logo.png";

import { appLayout } from "../constants/appLayout";

export function WelecomeScreen() {
  return (
    <View style={appLayout.textPositionContainer}>
      <Image source={logo} style={{ width: 305, height: 159 }} />
      <View style={{ marginTop: 80 }}>
        <TrivalText title="Trivial App" size={28}></TrivalText>
        <TrivalText
          title="Welcome To The Quiz Application"
          size={18}
        ></TrivalText>
      </View>
      <TrivalButton title="Start" location="Category"></TrivalButton>
    </View>
  );
}
