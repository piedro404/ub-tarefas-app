import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

import styles from "./styles";

import DialogBox from "@components/DialogBox";

import { Colors } from "@constants/Colors";

export default function FormLogin() {
  return (
    <View style={styles.container}>
      <View style={styles.alert}>
        <DialogBox
          info="Nome de usuário ou senha errados."
          alert="Por favor tente outra vez."
          colorBox={Colors.alerts.error}
          colorText={Colors.text.primary}
        ></DialogBox>
      </View>
      <View style={styles.form}>
        <View style={styles.login_input}>
          <Text style={styles.label}>Identificação ou email</Text>
          <TextInput
            style={styles.input}
            placeholder="Identificação ou email"
            keyboardType="email-address"
            autoCapitalize="none"
            // value={}
            // onChangeText={}
          ></TextInput>
        </View>
        <View style={styles.login_input}>
          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Senha"
            keyboardType="default"
            autoCapitalize="none"
            secureTextEntry={true}
            // value={}
            // onChangeText={}
          ></TextInput>
        </View>
        <TouchableOpacity
        style={styles.btnLogin}
        >
            <Text style={styles.btnText}>Acessar</Text>
            <FontAwesome6 name="angle-right" size={20} color={Colors.text.primary}></FontAwesome6>
        </TouchableOpacity>
      </View>
    </View>
  );
}
