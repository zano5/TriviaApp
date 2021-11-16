import React, { Fragment, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  Modal,
  Pressable,
  Alert,
} from "react-native";
import { TrivalText } from "../../components/TrivialText/trivalText";
import { useNavigation } from "@react-navigation/native";
import * as SecureStore from "expo-secure-store";
import Colors from "../../common/colors";

interface Props {
  questionList: any[];
}

export const QuestionContainer: React.FC<Props> = ({ questionList }) => {
  let correctItem = {
    category: "",
    correctAnswers: 0,
  };
  let answers: string[] = [];
  const navigation = useNavigation();
  let arrayOfDatabase: any = [];

  let [index, setIndex] = useState<number>(0);
  let [correct, setCorrect] = useState<any>(correctItem);

  const showAlert = (item: any) =>
    Alert.alert("Score", `Score Update: ${item.correctAnswers} /10`, [
      {
        text: "Proceed",
        onPress: () => {
          navigation.navigate("Score", { score: correct });
        },
        style: "cancel",
      },
    ]);

  function answerQuestion(pointer: number, answer: string) {
    console.log("my index", index);
    console.log("my answer", answer);
    console.log("my correct answer", questionList[pointer]?.correctAnswer);

    if (answer === questionList[pointer]?.correctAnswer) {
      correct.category = questionList[pointer]?.category;
      correct.correctAnswers += 1;
      setCorrect(correct);
      console.log("my check", correct);
    }

    if (index === 9) {
      SecureStore.getItemAsync("ScoresList").then((data: any) => {
        arrayOfDatabase = JSON.parse(data);
        arrayOfDatabase.push(correct);
        SecureStore.setItemAsync("ScoresList", JSON.stringify(arrayOfDatabase));
        console.log("zanoxolo", data);
        //

        // navigation.navigate("Score", { score: correct });
      });

      showAlert(correct);
      //  setModalVisible(true);
    }

    setIndex((index += 1));
  }

  function renderT() {
    answers = questionList[index]?.incorrectAnswers.slice(0, 3);
    answers?.push(questionList[index]?.correctAnswer);

    return answers?.map((obj: any, pointer) => {
      return (
        <TouchableOpacity
          key={pointer}
          activeOpacity={0.8}
          style={styles.defaultStyle}
          onPress={() => answerQuestion(index, answers[pointer])}
        >
          <Text style={styles.textStyle}>{obj}</Text>
        </TouchableOpacity>
      );
    });
  }

  return (
    <View style={styles.body}>
      {questionList[index]?.question ? (
        <View>
          <View style={styles.container}>
            <TrivalText
              title={questionList[index]?.question}
              size={20}
            ></TrivalText>
          </View>

          <View
            style={{
              marginTop: 50,
            }}
          >
            {renderT()}
          </View>
        </View>
      ) : (
        <View>
          <ActivityIndicator size="large" color="blue" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  // ... add your default style here
  body: {
    backgroundColor: "black",
    height: "100%",
  },

  container: {
    width: "100%",
    height: 200,
    backgroundColor: Colors.BLUE,
    justifyContent: "center",
    borderColor: Colors.BLUE,
    shadowColor: Colors.BLUE,
    borderWidth: 1,
  },

  textStyle: {
    textAlign: "center",
    fontSize: 20,
    color: "#FFF",
  },

  defaultStyle: {
    textAlign: "center",
    marginTop: 10,

    height: 50,
    borderRadius: 8,

    width: "80%",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: Colors.BLACK,
    borderColor: Colors.BLUE,
    borderWidth: 2,
    alignContent: "center",
  },
});
