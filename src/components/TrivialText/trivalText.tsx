import React from "react";
import { Text, StyleSheet } from "react-native";
import Colors from "../../common/colors";

interface Props {
  title: string;
  size: number;
}

export const TrivalText: React.FC<Props> = ({ title, size }) => {
  return (
    <Text style={{ ...styles.defaultStyle, fontSize: size }}>{title}</Text>
  );
};

const styles = StyleSheet.create({
  // ... add your default style here
  defaultStyle: {
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: Colors.WHITE,
  },
});
