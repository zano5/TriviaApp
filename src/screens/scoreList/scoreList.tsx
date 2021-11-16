import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Platform,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import * as SecureStore from "expo-secure-store";
import { TrivalText } from "../../components/TrivialText/trivalText";
import Colors from "../../common/colors";

export default function ScoreListScreen() {
  let result: any;

  let [resultList, setResultList] = useState<any>();

  useEffect(() => {
    retrieveScores();
  }, []);

  async function retrieveScores() {
    result = await SecureStore.getItemAsync("ScoresList");

    console.log("my result", result);
    setResultList(JSON.parse(result));
  }

  function renderT() {
    if (resultList?.length > 0) {
      console.log("my new result", resultList);
      return resultList?.map((obj: any, index: any) => {
        return (
          <View style={styles.container} key={index}>
            <View style={styles.standaloneRowFront}>
              <View style={styles.titleContainer}>
                <TrivalText title="Category" size={20}></TrivalText>
                <TrivalText title={obj?.category} size={20}></TrivalText>
              </View>
              <View style={styles.balanceContainer}>
                <TrivalText title="Score" size={20}></TrivalText>
                <TrivalText title={obj?.correctAnswers} size={20}></TrivalText>
              </View>
            </View>
          </View>
        );
      });
    } else {
      <Text>Loading Data</Text>;
    }
  }

  return (
    <ScrollView>
      <View style={styles.body}>{renderT()}</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "black",
    height: "100%",
  },

  container: {
    height: 100,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: Colors.BLUE,
  },

  logoContainer: {
    paddingBottom: Platform.OS === "android" ? 5 : 0,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "flex-start",
    paddingLeft: 8,
  },
  balanceContainer: {},
  chevronContainer: {
    justifyContent: "center",
  },
  standaloneRowFrontContainer: {
    marginBottom: 15,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    borderRadius: 6,
    // Shadow
    elevation: 6,
    shadowColor: Colors.BLUE,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.06,
    shadowRadius: 6,
  },
  standaloneRowFront: {
    flexDirection: "row",
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 20,
    justifyContent: "center",
    alignItems: "center",

    paddingBottom: 20,
    paddingLeft: 16,
    paddingRight: 16,
    borderWidth: 1,
    borderRadius: 6,
  },
});
