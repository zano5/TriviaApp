import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../common/colors";

interface Props {
  title: string;
  item: string;
}

export const CategoryButton: React.FunctionComponent<Props> = ({
  title,
  item,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.defaultStyle}
      onPress={() => navigation.navigate("Quiz", { category: item })}
    >
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  // ... add your default style here
  defaultStyle: {
    textAlign: "center",
    marginTop: 10,

    height: 50,
    borderRadius: 8,
    alignContent: "center",

    width: 300,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.BLACK,
    borderWidth: 2,
    borderColor: Colors.BLUE,
  },
  textStyle: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 20,
  },
});
