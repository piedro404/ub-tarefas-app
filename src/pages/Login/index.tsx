import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

import Logo from "@components/Logo";
import Underline from "@components/Underline";

export default function Login(){
    return(
        <View style={styles.container}>
            <Logo></Logo>
            <Underline></Underline>
        </View>
    )
}