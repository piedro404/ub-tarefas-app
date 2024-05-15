import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

import styles from "./styles";

interface Storage {
  login?: string | null | undefined;
  password?: string | null | undefined;
  tasks?: string | null | undefined;
}

export default function Tasks() {
  const [tasksDetails, setTasksDetails] = useState<Storage>({});

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      setTasksDetails({
        login: await AsyncStorage.getItem("login"),
        password: await AsyncStorage.getItem("password"),
        tasks: await AsyncStorage.getItem("tasks"),
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View>
      <Text>Tarefas....</Text>
    </View>
  );
}
