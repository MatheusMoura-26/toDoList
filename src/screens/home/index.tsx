import { Text, TextInput, TouchableOpacity, View, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import Logo from "../../../assets/logo.svg";
import Add from "../../../assets/add.svg";
import { Task } from "../../components/task";
import { useState } from "react";


export function Home() {
    const [tasks, setTasks] = useState<string[]>([]);
    const [TaskName, setTaskName] = useState<string>("");
    const [count, setCount] = useState<number>(0);
    function handleAddTask() {
        if (tasks.includes(TaskName)) {
            return Alert.alert("Tarefa já cadastrada");
        }
        setTasks(prevState => [...prevState, TaskName]);
        setCount(count + 1);
        setTaskName("");
    }
    function handleRemoveTask(name: string) {
        Alert.alert(
            "Remover tarefa", `Deseja remover a  tarefa ${name}?`, [{
                text: 'sim',
                onPress: () => {
                    setTasks(prevState => prevState.filter(task => task !== name));
                }
            },
            {
                text: 'não',
                style: 'cancel'
            }])
    }
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
                    onChangeText={setTaskName}
                    value={TaskName}
                />
                <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={handleAddTask}>
                    <Add />
                </TouchableOpacity>
            </View>

            <View style={styles.content}>

                <View style={styles.count}>
                    <View style={styles.visor}>
                        <Text style={styles.create}> Criadas </Text>
                        <TouchableOpacity style={styles.visorCount}>
                            <Text style={styles.visorCounttext}>{count}</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.visor}>
                        <Text style={styles.finished}> Concluídas </Text>
                        <TouchableOpacity style={styles.visorCount}>
                            <Text style={styles.visorCounttext}>2</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <FlatList
                    data={tasks}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Task key={item} name={item} onremove={() => handleRemoveTask(item)} />
                    )}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    );
}
