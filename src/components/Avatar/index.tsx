import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

interface AvatarProps {
    initial: string;
}

export default function Avatar({initial}: AvatarProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{initial}</Text>
    </View>
  );
}
