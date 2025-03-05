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
                    <View style={styles.visor}>
                        <Text style={styles.create}> Criadas </Text>
                        <TouchableOpacity style={styles.visorCount}>
                            <Text style={styles.visorCounttext}>2</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.visor}>
                        <Text style={styles.finished}> Concluídas </Text>
                        <TouchableOpacity style={styles.visorCount}>
                            <Text style={styles.visorCounttext}>2</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.div}></View>
            </View>
        </View>
    );
}
