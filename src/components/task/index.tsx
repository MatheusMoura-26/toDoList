import { View, Text, Pressable } from "react-native";
import { styles } from "./styles";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from "../../../styles/theme";
import Trash from "../../../assets/trash.svg";

type props = {
    name: string;
    onremove: () => void;
    onToggle: () => void;
    checked: boolean;
};

export function Task({ name, onremove, onToggle, checked }: props) {
    return (
        <View style={styles.card}>
            <Pressable onPress={onToggle}>
                <Ionicons
                    name={checked ? "checkmark-circle" : "radio-button-off"}
                    size={25}
                    color={checked ? colors.product.purpleDark : colors.product.blue}
                />
            </Pressable>

            <Text style={styles.text}>{name}</Text>

            <Pressable onPress={onremove}>
                <Trash />
            </Pressable>
        </View>
    );
}
