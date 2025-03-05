import { StyleSheet } from "react-native";
import { colors, fontFamily, fontSize } from "../../../styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.base.gray600,
    },
    topBar: {
        backgroundColor: colors.base.gray700,
        justifyContent: "center",
        alignItems: "center",
        height: 200,
        paddingTop: 50,
    },
    form: {
        position: "absolute",
        top: 170,
        width: "100%",
        flexDirection: "row",
        paddingHorizontal: 24,
    },
    input: {
        flex: 1,
        height: 56,
        backgroundColor: colors.base.gray500,
        borderRadius: 5,
        color: colors.base.gray100,
        fontFamily: fontFamily.regular,
        fontSize: 16,
        paddingHorizontal: 16,
        marginRight: 12,
    },
    button: {
        backgroundColor: colors.product.blueDark,
        height: 56,
        width: 56,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    content: {
        flex: 1,
        paddingTop: 60,
        paddingHorizontal: 24,
    },
    count: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    visor: {
        flexDirection: "row",
        alignItems: "center",
    },
    create: {
        color: colors.product.blue,
        fontFamily: fontFamily.bold,
        fontSize: fontSize.medium,
    },
    finished: {
        color: colors.product.purple,
        fontFamily: fontFamily.bold,
        fontSize: fontSize.medium,
    },
    visorCount: {
        backgroundColor: colors.base.gray400,
        borderRadius: 20,
        height: 19,
        width: 25,
        justifyContent: "center",
        alignItems: "center",
    },
    visorCounttext: {
        fontSize: fontSize.small,
        color: colors.base.gray200,
        fontFamily: fontFamily.bold,
    },
    div: {
        height: 1,
        backgroundColor: colors.base.gray400,
        marginTop: 20,
    }
});
