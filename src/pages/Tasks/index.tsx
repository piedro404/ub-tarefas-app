import React, { useEffect, useState } from "react";
import { View, ScrollView, RefreshControl } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Text } from "react-native-paper";

import styles from "./styles";

import { apiUrl } from "@scripts/apiUrl";

import InfoTasks from "@components/InfoTasks";

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
  login?: string | null | undefined;
  password?: string | null | undefined;
  tasksDetails?: TaskDetails | null | undefined;
}

export default function Tasks() {
  const [storage, setStorage] = useState<Storage>({});
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
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
      setStorage({
        login: await AsyncStorage.getItem("login"),
        password: await AsyncStorage.getItem("password"),
        tasksDetails: tasks ? JSON.parse(tasks) : {},
      });
      setIsReady(true);
    } catch (error) {
      console.log(error);
    }
  }

  async function getSearchTasks() {
    try {
      const { login, password } = storage;
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
        setStorage((prevState) => ({
          ...prevState,
          tasksDetails: response.data.tasks,
        }));
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      {storage.tasksDetails && (
        <>
          <View style={styles.infos}>
            <Text variant="titleMedium">{storage.tasksDetails.description}</Text>
          </View>
          <View style={styles.tasks}>
            {/* {storage.tasksDetails.find_task &&
              storage.tasksDetails.list_tasks.map((task, index) => {
                return <Text key={index}>{task.task_name}</Text>;
              })} */}
          </View>
        </>
      )}
    </View>
  );
}
