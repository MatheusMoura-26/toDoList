import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Logo from "../../../assets/logo.svg";
import Add from "../../../assets/add.svg";


export function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <Logo />
            </View>
            <View style={styles.form}>
                <TextInput
                    placeholder="Adicione uma nova tarefa"
                    style={styles.input}
                    placeholderTextColor="#808080"
                />
                <TouchableOpacity style={styles.button} activeOpacity={0.7}>
                    <Add />
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                <View style={styles.count}>
                    <View style={styles.create}>
                        <Text style={{ color: '#808080' }}> Criadas </Text>
                        <TouchableOpacity>
                            <Text>2</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.create}>
                        <Text style={{ color: '#808080' }}> concluídas </Text>
                        <TouchableOpacity>
                            <Text>2</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}
