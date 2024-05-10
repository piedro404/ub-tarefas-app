import React from "react";
import { View } from "react-native";

import styles from "./styles";

import Logo from "@components/Logo";
import Underline from "@components/Underline";
import DialogBox from "@components/DialogBox";
import { Colors } from "@constants/Colors";
import FormLogin from "@components/FormLogin";

export default function Login() {
  return (
    <View style={styles.container}>
      <Logo></Logo>
      <View style={styles.underlineContainer}>
        <Underline/>
      </View>
      <FormLogin></FormLogin>
    </View>
  );
}
