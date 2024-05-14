import React from "react";
import { View } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import {
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";

import styles from "./styles";

import Avatar from "@components/Avatar";

export default function Menu({...props} : any) {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.userInfoSection}>
            <View style={styles.avatarUser}>
                <Avatar initial="PH"></Avatar>
            </View>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}
