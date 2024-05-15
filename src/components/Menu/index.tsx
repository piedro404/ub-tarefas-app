import React, { useEffect, useState } from "react";
import { View, Linking } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
  Title,
  Caption,
  Paragraph,
  Avatar,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "./styles";

import { Colors } from "@constants/Colors";

import Underline from "@components/Underline";

interface UserDetails {
  username?: string | null | undefined;
  email?: string | null | undefined;
  user_initials?: string | null | undefined;
}

export default function Menu({ ...props }: any, user_initial: string) {
  const [userDetails, setUserDetails] = useState<UserDetails>({});

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      setUserDetails({
        username: await AsyncStorage.getItem("username"),
        email: await AsyncStorage.getItem("email"),
        user_initials: await AsyncStorage.getItem("user_initials"),
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function logout() {
    try {
      await AsyncStorage.setItem("login", "");
      await AsyncStorage.setItem("password", "");
      await AsyncStorage.setItem("username", "");
      await AsyncStorage.setItem("email", "");
      await AsyncStorage.setItem("user_initials", "");
      await AsyncStorage.setItem("user_logon", "false");
      await AsyncStorage.setItem("tasks", "");
      props.navigation.navigate("Login");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.userInfoSection}>
          <Avatar.Text
            size={75}
            style={{ backgroundColor: Colors.theme.primary }}
            label={
              userDetails.user_initials ? userDetails.user_initials : "NULL"
            }
          />
          <View style={styles.userDetails}>
            <Text variant="titleMedium" numberOfLines={1} ellipsizeMode="tail">
              {userDetails.username}
            </Text>
            <Text variant="titleSmall" numberOfLines={1} ellipsizeMode="tail">
              {userDetails.email}
            </Text>
          </View>
        </View>
        <Underline />
        <Drawer.Section style={styles.drawerPages} showDivider={false}>
          <DrawerItem
            label={"Atividades"}
            onPress={() => {
              props.navigation.navigate("Atividades");
            }}
          ></DrawerItem>
        </Drawer.Section>
      </DrawerContentScrollView>
      <Drawer.Section showDivider={false}>
        <DrawerItem
          label="Acessar o Portal"
          onPress={() => Linking.openURL("https://ead.unibalsas.edu.br/my/")}
        />
        <Drawer.Item label="Sair" onPress={() => logout()}></Drawer.Item>
      </Drawer.Section>
    </View>
  );
}
