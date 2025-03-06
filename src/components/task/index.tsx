import { View, Text, TouchableOpacity, Pressable, } from "react-native";
import { styles } from "./styles";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors, fontFamily, fontSize } from "../../../styles/theme";
import Trash from "../../../assets/trash.svg";

type props = {
    name: string;
    onremove: () => void;
}


export function Task({ name, onremove }: props) {
    return (
        <View style={styles.card}>
            <Pressable>
                <Ionicons
                    name="checkmark-circle"
                    size={25}
                    color={colors.product.purpleDark} />
            </Pressable>
            <Text style={styles.text}>{name}</Text>
            <Pressable onPress={onremove}>
                <Trash />
            </Pressable>

        </View>
    )
}