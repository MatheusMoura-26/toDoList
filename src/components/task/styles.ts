import { StyleSheet } from "react-native";
import { colors, fontFamily, fontSize } from "../../../styles/theme";

export const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.base.gray500,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        height: 64,
        borderRadius: 10,
        marginBottom: 16,
    },
    text: {
        fontFamily: fontFamily.regular,
        fontSize: fontSize.medium,
        color: colors.base.gray100,
    },
    check: {
        padding: 25,
    }
});