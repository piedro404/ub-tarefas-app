import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userInfoSection: {
        width: "100%",
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingTop: 25,
        marginBottom: 5,
        gap: 10,
        alignItems: "center"
    },
    userDetails: {
        width: "70%",
        overflow: "hidden",
    },
    drawerPages: {
        flex: 1,
    },
});

export default styles