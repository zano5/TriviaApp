import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { QuestionContainer } from "./QuestionContainer";
import { fetchQuestions } from "./helper";

export default function Question({ route }) {
  let category: any = route.params.category;

  const [questionList, setQuestionList] = useState<any[]>([]);
  let position = 0;
  useEffect(() => {
    console.log("my category", category);
    getQuestions();

    position = Math.floor(Math.random() * 3);
  }, []);

  async function getQuestions() {
    fetchQuestions(category).then((data) => {
      setQuestionList(data);
    });
  }

  return (
    <View>
      <QuestionContainer questionList={questionList}></QuestionContainer>
    </View>
  );
}
