import React from "react";
import { View, Image } from "react-native";

import styles from "./styles";

import ubLogo from "@img/ub-logo.png";

export default function Logo(){
    return(
        <View style={styles.container}>
            <Image
            style={styles.logoImg}
            source={ubLogo}
            />
        </View>
    )
}