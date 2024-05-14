import React, { useEffect, useState } from "react";
import { View, Text, BackHandler, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

import styles from "./styles";

interface Storage {
  login?: string | null | undefined;
  password?: string | null | undefined;
  username?: string | null | undefined;
  user_initials?: string | null | undefined;
  user_logon?: string | null | undefined;
  tasks?: string | null | undefined;
}

export default function Tasks() {
  const [storage, setStorage] = useState<Storage>({});

  useEffect(() => {
    const onBackPress = () => {
      Alert.alert(
        "Sair da UBTarefas",
        "Você deseja sair do APP?",
        [
          {
            text: "Cancelar",
            onPress: () => {},
          },
          { text: "Sim", onPress: () => BackHandler.exitApp() },
        ],
        { cancelable: false }
      );

      return true;
    };

    BackHandler.addEventListener("hardwareBackPress", onBackPress);
    getData();
  }, []);

  async function getData() {
    try {
      setStorage({
        login: await AsyncStorage.getItem("login"),
        password: await AsyncStorage.getItem("password"),
        username: await AsyncStorage.getItem("username"),
        user_initials: await AsyncStorage.getItem("user_initials"),
        user_logon: await AsyncStorage.getItem("user_logon"),
        tasks: await AsyncStorage.getItem("tasks"),
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View>
      <Text>Tarefas....</Text>
      <Text>Nome: {storage.username}</Text>
    </View>
  );
}
