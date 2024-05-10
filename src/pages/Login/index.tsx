import React from "react";
import { View, Pressable, Keyboard } from "react-native";

import styles from "./styles";

import Logo from "@components/Logo";
import Underline from "@components/Underline";
import DialogBox from "@components/DialogBox";
import FormLogin from "@components/FormLogin";

export default function Login() {
  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.container}>
      <Logo></Logo>
      <View style={styles.underlineContainer}>
        <Underline/>
      </View>
      <FormLogin></FormLogin>
    </Pressable>
  );
}
