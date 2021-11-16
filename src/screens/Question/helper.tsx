import axios from "axios";

export type props = {
  category: string;
  correct_answer: string;
  incorrect_answer: string[];
  question: string;
};

export const fetchQuestions = async (category: string) => {
  const endPoint = `https://api.trivia.willfry.co.uk/questions?categories=${category}&limit=10`;
  const data = await (await fetch(endPoint)).json();

  return data;
};
