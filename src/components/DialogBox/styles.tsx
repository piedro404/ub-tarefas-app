import { StyleSheet } from 'react-native'

import { Colors } from '@constants/Colors';

const styles = StyleSheet.create({
    container: {
        width: "90%",
        height: "auto",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 10,
        borderRadius: 10
        // backgroundColor: Colors.theme.primary
    },
    text: {
        fontSize: 16,
        fontWeight: "bold",
        // color: Colors.text.primary,
    }
});

export default styles