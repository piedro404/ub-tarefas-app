import React from "react";
import { StatusBar, SafeAreaView, View } from "react-native";
import { styles } from "./styles";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "@pages/Login";

import { Colors } from "@constants/Colors";
import Tasks from "@pages/Tasks";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <StatusBar
          animated={true}
          backgroundColor={Colors.theme.primary}
          barStyle="light-content"
        />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Tasks" component={Tasks} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
