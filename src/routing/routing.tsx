import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Detail } from "../screens/detail";
import { WelecomeScreen } from "../screens/welcome";
import Question from "../screens/Question/question";
import ScoreScreen from "../screens/Score/score";
import ScoreListScreen from "../screens/scoreList/scoreList";

export function Routing() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelecomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Category"
          component={Detail}
          options={{ headerBackTitleVisible: false }}
        />
        <Stack.Screen
          name="Quiz"
          component={Question}
          options={{ headerBackTitleVisible: false }}
        />
        <Stack.Screen
          name="Score"
          component={ScoreScreen}
          options={{
            headerBackVisible: false,
          }}
        />
        <Stack.Screen
          name="Score List"
          component={ScoreListScreen}
          options={{ headerBackTitleVisible: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
