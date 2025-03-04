import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1A1A1A", // Cor de fundo padrão
    },
    topBar: {
        backgroundColor: "#0D0D0D",
        justifyContent: "center",
        alignItems: "center",
        height: 200, // Ajustado para um tamanho fixo ao invés de %
        paddingTop: 50, // Ajustando a posição do logo
    },
    form: {
        position: "absolute", // Para sobrepor na barra superior
        top: 170, // Aproximadamente na base da topBar
        width: "100%",
        flexDirection: "row",
        paddingHorizontal: 24,
    },
    input: {
        flex: 1,
        height: 56,
        backgroundColor: "#262626",
        borderRadius: 5,
        color: "#F2F2F2",
        paddingHorizontal: 16,
        marginRight: 12,
    },
    button: {
        backgroundColor: "#1E6F9F",
        height: 56,
        width: 56,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: "#FFF",
        fontSize: 24,
    },
    content: {
        flex: 1,
        paddingTop: 60,
        paddingHorizontal: 24,
        flexDirection: "column",

    },
    count: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    create: {
        flexDirection: "row",
    }
});
