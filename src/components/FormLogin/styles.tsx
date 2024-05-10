import { Colors } from '@constants/Colors';
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "auto",
        alignItems: "center",
        justifyContent: "center",
    },
    alert: {
        width: "100%",
        height: "auto",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
        marginBottom: 20,
    },
    form: {
        width: "100%",
        height: "auto",
        alignItems: "center",
        justifyContent: "center",
    },
    login_input: {
        width: "85%",
        height: "auto",
        marginBottom: 10,
    },
    label: {
        textAlign: "left",
        fontSize: 18,
        fontWeight: "bold",
        color: Colors.text.red,
        marginBottom: 5,
    },
    input: {
        textAlign: "left",
        fontSize: 16,
        fontWeight: "600",
        color: Colors.text.secudary,
        borderWidth: 3,
        borderColor: Colors.theme.primary,
        borderRadius: 35,
        paddingVertical: 4,
        paddingHorizontal: 23,
    },
    btnLogin: {
        width: "90%",
        height: "auto",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap: 20,
        marginTop: 40,
        paddingVertical: 15,
        borderRadius: 35,
        borderWidth: 0,
        backgroundColor: Colors.theme.primary,
    },
    btnText: {
        color: Colors.text.primary,
        fontSize: 18,
        fontWeight: "700",
    },
});

export default styles