import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { Feather } from "@expo/vector-icons";

import styles from "./styles";

interface Task {
  date: string;
  day_week: string;
  matter: string;
  task_name: string;
  time_limit: string;
  url_task: string;
}

export default function TaskField(task: Task) {
  return (
    <View style={styles.container}>
      <View>
        <Text variant="bodyLarge">
          {task.day_week}, {task.date}
        </Text>
      </View>
      <View>
        <View>
          <Text variant="bodyLarge">{task.time_limit}</Text>
        </View>
        <Feather name="bookmark" size={24} color="black" />
        <View>
          <Text variant="bodyLarge">{task.task_name}</Text>
          <Text variant="bodyLarge">{task.matter}</Text>
        </View>
      </View>
    </View>
  );
}
