import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

interface DialogBoxProps {
    info: string;
    colorBox: string;
    colorText: string;
    alert?: string;
}

export default function DialogBox({ info, colorBox, colorText, alert }: DialogBoxProps){
    return(
        <View style={[styles.container, {backgroundColor: colorBox}]}>
            <Text style={[styles.text, {color: colorText}]}>{ info }</Text>
            {alert && (
                <Text style={[styles.text, {color: colorText}]}>{ alert }</Text>
            )}
        </View>
    )
}