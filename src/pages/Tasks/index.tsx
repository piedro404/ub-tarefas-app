import React, { useEffect, useState, useCallback } from "react";
import { View, ScrollView, RefreshControl, BackHandler, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Text } from "react-native-paper";

import styles from "./styles";

import { apiUrl } from "@scripts/apiUrl";

import TaskField from "@components/TaskField";

interface Task {
  date: string;
  day_week: string;
  matter: string;
  task_name: string;
  time_limit: string;
  url_task: string;
}

interface TaskDetails {
  amount_task: number;
  description: string;
  find_task: boolean;
  list_tasks: Task[];
}

interface Storage {
  login?: string;
  password?: string;
  tasksDetails?: TaskDetails;
}

export default function Tasks() {
  const [storage, setStorage] = useState<Storage>({});
  const [isReady, setIsReady] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);

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

  useEffect(() => {
    if (isReady) {
      getSearchTasks();
    }
  }, [isReady]);

  async function getData() {
    try {
      const tasks = await AsyncStorage.getItem("tasks");
      const login = await AsyncStorage.getItem("login");
      const password = await AsyncStorage.getItem("password");
      setStorage({
        login: login ? login : "",
        password: password ? password : "",
        tasksDetails: tasks ? JSON.parse(tasks) : {},
      });
      if(isReady === false) {
        setIsReady(true);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function getSearchTasks() {
    try {
      // console.log(storage);
      const { login, password } = storage;
      // console.log(login, password);
      const response = await axios.post(apiUrl({ params: "/ub/task" }), {
        login: login,
        password: password,
      });
      // console.log(response.data);
      if (response.status === 200 && response.data.status === true) {
        await AsyncStorage.setItem(
          "tasks",
          JSON.stringify(response.data.tasks)
        );
        getData();
      }
    } catch (error) {
      console.log(error);
    }
  }

  const onRefresh = async () => {
    setRefreshing(true);
    await getSearchTasks();
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  const handleRefresh = useCallback(() => {
    onRefresh();
  }, []);

  return (
    <View style={styles.container}>
      {storage.tasksDetails && (
        <>
          <View style={styles.infos}>
            <Text variant="titleMedium">Linha do Tempo</Text>
            <Text variant="titleMedium">
              {storage.tasksDetails.description}
            </Text>
          </View>
          {storage.tasksDetails.find_task ? (
            <ScrollView
              scrollEnabled
              contentContainerStyle={styles.tasks}
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={handleRefresh}
                />
              }
            >
              {storage.tasksDetails.list_tasks.map((task, index) => {
                return <TaskField key={index} {...task}></TaskField>;
              })}
            </ScrollView>
          ) : (
            <View style={styles.notFound}>
              <Text variant="headlineSmall">Nenhuma Tarefa Encontrada!</Text>
            </View>
          )}
        </>
      )}
    </View>
  );
}
