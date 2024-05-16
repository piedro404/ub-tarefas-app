import { Colors } from '@constants/Colors';
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        width: "97%",
        height: "auto",
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: Colors.theme.primary,
        borderRadius: 10,
    },
    time: {
        width: "100%",
        paddingBottom: 5,
    },
    details: {
        flexDirection: "row",
    },
    timeLimit: {
        width: "16%",
        textAlign: "center",
        paddingHorizontal: 5,
    },
    textDetails: {
        color: Colors.text.primary,
        fontWeight: "bold",
    },
    infos: {
        marginHorizontal: 5,
    },
});

export default styles