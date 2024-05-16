import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    infos: {
        paddingHorizontal: 5,
        paddingVertical: 15,
        borderBottomWidth: 1,
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    tasks: {
        flex: 1,
        alignItems: "center",
        gap: 10,
    },
    notFound: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default styles