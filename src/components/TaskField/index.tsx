import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

interface Task {
  date: string;
  day_week: string;
  matter: string;
  task_name: string;
  time_limit: string;
  url_task: string;
}

export default function TaskField({task}: Task) {
  return(
    <View>
      
    </View>
  )
}