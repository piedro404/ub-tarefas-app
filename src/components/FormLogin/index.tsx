import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  AsyncStorage,
} from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import axios from "axios";

import styles from "./styles";

import DialogBox from "@components/DialogBox";

import { Colors } from "@constants/Colors";
import { apiUrl } from "@scripts/apiUrl";

interface DialogProps {
  info: string;
  colorBox: string;
  colorText: string;
  alert?: string;
}

export default function FormLogin({ navigation }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [dialog, setDialog] = useState<DialogProps>({
    info: "",
    colorBox: Colors.alerts.error,
    colorText: Colors.text.primary,
  });
  const [btnDisable, setBtnDisable] = useState(false);

  async function handleLogin() {
    try {
      const response = await axios.post(apiUrl({ params: "/ub/profile" }), {
        login,
        password,
      });
      if (response.status === 200 && response.data.status === true) {
        console.log(response.data);
        // await AsyncStorage.setItem('email', data?.login);
        // await AsyncStorage.setItem('password', data?.password);
        // Redireact for Task Page
        setShowError(false);
        navigation.navigate("Tasks");
      } else if (response.status === 500) {
        throw "Error Server";
      } else {
        setDialog({
          info: "Nome de usuário ou senha errados.",
          alert: "Por favor tente outra vez.",
          colorBox: Colors.alerts.error,
          colorText: Colors.text.primary,
        });
        setShowError(true);
      }
    } catch (error) {
      setDialog({
        info: "Algo deu Errado",
        alert: "Tente novamente mais tarde",
        colorBox: Colors.alerts.error,
        colorText: Colors.text.primary,
      });
      setShowError(true);
    }
  }

  async function loginApp() {
    Keyboard.dismiss();
    setBtnDisable(true);
    if (login && password) {
      await handleLogin();
    } else {
      setDialog({
        info: "Insira seu cadastro da UB Virtual",
        colorBox: Colors.alerts.error,
        colorText: Colors.text.primary,
      });
      setShowError(true);
    }
    setPassword("");
    setBtnDisable(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.alert}>
        {showError && (
          <DialogBox
            info={dialog.info}
            alert={dialog?.alert}
            colorBox={dialog.colorBox}
            colorText={dialog.colorText}
          ></DialogBox>
        )}
      </View>
      <View style={styles.form}>
        <View style={styles.login_input}>
          <Text style={styles.label}>Identificação ou email</Text>
          <TextInput
            style={styles.input}
            placeholder="Identificação ou email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={login}
            onChangeText={setLogin}
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
            value={password}
            onChangeText={setPassword}
          ></TextInput>
        </View>
        <TouchableOpacity
          style={[
            styles.btnLogin,
            {
              backgroundColor: btnDisable
                ? Colors.theme.tertiary
                : Colors.theme.primary,
            },
          ]}
          disabled={btnDisable}
          onPress={() => {
            loginApp();
          }}
        >
          <Text style={styles.btnText}>Acessar</Text>
          <FontAwesome6
            name="angle-right"
            size={20}
            color={Colors.text.primary}
          ></FontAwesome6>
        </TouchableOpacity>
      </View>
    </View>
  );
}
