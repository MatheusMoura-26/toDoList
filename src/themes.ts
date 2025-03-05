import { useFonts, Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";

// Interface para tipagem do tema
export interface ThemeType {
    colors: {
        product: {
            blueDark: string;
            blue: string;
            purpleDark: string;
            purple: string;
        };
        base: {
            gray700: string;
            gray600: string;
            gray500: string;
            gray400: string;
            gray300: string;
            gray200: string;
            gray100: string;
        };
        feedback: {
            danger: string;
        };
    };
    fonts: {
        regular: string;
        bold: string;
    };
    fontSizes: {
        small: number;
        medium: number;
        large: number;
    };
    lineHeights: {
        small: number;
        medium: number;
        large: number;
    };
    spacing: {
        padding: number;
        margin: number;
        radius: number;
    };
}

// Definição do tema
export const theme: ThemeType = {
    colors: {
        product: {
            blueDark: "#1E6F9F",
            blue: "#4EA8DE",
            purpleDark: "#5E60CE",
            purple: "#8284FA",
        },
        base: {
            gray700: "#0D0D0D",
            gray600: "#1A1A1A",
            gray500: "#262626",
            gray400: "#333333",
            gray300: "#808080",
            gray200: "#D9D9D9",
            gray100: "#F2F2F2",
        },
        feedback: {
            danger: "#E25858",
        },
    },
    fonts: {
        regular: "Inter_400Regular",
        bold: "Inter_700Bold",
    },
    fontSizes: {
        small: 12,
        medium: 14,
        large: 16,
    },
    lineHeights: {
        small: 17, // 140% de 12px
        medium: 20, // 140% de 14px
        large: 22, // 140% de 16px
    },
    spacing: {
        padding: 24,
        margin: 12,
        radius: 5,
    },
};

