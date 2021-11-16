import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../common/colors";

interface Props {
  title: string;
  location: any;
}

export const TrivalButton: React.FunctionComponent<Props> = ({
  title,
  location,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.defaultStyle}
      onPress={() => navigation.navigate(location)}
    >
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  // ... add your default style here
  defaultStyle: {
    position: "absolute",
    bottom: 20,
    textAlign: "center",
    marginRight: "20%",
    marginLeft: "20%",
    height: 50,
    borderRadius: 8,

    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.BLUE,
  },
  textStyle: {
    color: Colors.WHITE,
    textAlign: "center",
    fontSize: 20,
  },
});
