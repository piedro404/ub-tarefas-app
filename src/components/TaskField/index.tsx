import React from "react";
import { View, Linking, Pressable } from "react-native";
import { Text } from "react-native-paper";
import { Feather } from "@expo/vector-icons";

import styles from "./styles";
import { Colors } from "@constants/Colors";

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
    <Pressable onPress={() => Linking.openURL(task.url_task)} style={styles.container}>
      <View style={styles.time}>
        <Text variant="titleMedium" style={styles.textDetails}>
          {task.day_week}, {task.date}
        </Text>
      </View>
      <View style={styles.details}>
        <View style={styles.timeLimit}>
          <Text variant="bodyLarge" style={[styles.textDetails, {flexWrap: "wrap", textAlign: "center"}]}>{task.time_limit}</Text>
        </View>
        <View style={styles.infos}>
          <Text variant="bodyLarge" style={[styles.textDetails, {overflow: "hidden"}]} numberOfLines={1}>{task.task_name}</Text>
          <Text variant="bodySmall" style={[styles.textDetails, {overflow: "hidden"}]} numberOfLines={1}>{task.matter}</Text>
        </View>
      </View>
    </Pressable>
  );
}
