import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";

import Login from "@pages/Login";
import Tasks from "@pages/Tasks";
import Menu from "@components/Menu";

import { Colors } from "@constants/Colors";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={(props) => <Menu {...props} />}>
      <Drawer.Screen name="Atividades" component={Tasks}/>
    </Drawer.Navigator>
  );
}

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
        <Stack.Screen name="Tasks" component={MyDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
