import { Text, TextInput, TouchableOpacity, View, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import Logo from "../../../assets/logo.svg";
import Add from "../../../assets/add.svg";
import Board from "../../../assets/clipboard.svg";
import { Task } from "../../components/task";
import { useState } from "react";
import { colors } from "../../../styles/theme";

export function Home() {
    const [tasks, setTasks] = useState<string[]>([]);
    const [TaskName, setTaskName] = useState<string>("");
    const [count, setCount] = useState<number>(0);
    const [completedTasks, setCompletedTasks] = useState<string[]>([]);

    function handleAddTask() {
        if (tasks.includes(TaskName)) {
            return Alert.alert("Tarefa já cadastrada");
        }
        setTasks(prevState => [...prevState, TaskName]);
        setTaskName("");
    }

    function handleRemoveTask(name: string) {
        Alert.alert("Remover tarefa", `Deseja remover a tarefa ${name}?`, [
            {
                text: 'Sim',
                onPress: () => {
                    setTasks(prevState => prevState.filter(task => task !== name));
                    setCompletedTasks(prevState => prevState.filter(task => task !== name));
                }
            },
            { text: 'Não', style: 'cancel' }
        ]);
    }

    function handleToggleTask(name: string) {
        if (completedTasks.includes(name)) {
            setCompletedTasks(prevState => prevState.filter(task => task !== name));
        } else {
            setCompletedTasks(prevState => [...prevState, name]);
        }
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
                    placeholderTextColor={colors.base.gray300}
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
                        <Text style={styles.create}>Criadas</Text>
                        <TouchableOpacity style={styles.visorCount}>
                            <Text style={styles.visorCounttext}>{tasks.length}</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.visor}>
                        <Text style={styles.finished}>Concluídas</Text>
                        <TouchableOpacity style={styles.visorCount}>
                            <Text style={styles.visorCounttext}>{completedTasks.length}</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <FlatList
                    data={tasks}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Task
                            key={item}
                            name={item}
                            onremove={() => handleRemoveTask(item)}
                            onToggle={() => handleToggleTask(item)}
                            checked={completedTasks.includes(item)}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <View style={styles.empty}>
                            <View style={styles.div}></View>
                            <Board style={styles.empttboard} />
                            <Text style={{ color: colors.base.gray300, alignSelf: 'center', marginTop: 16 }}>Você ainda não tem tarefas cadastradas{"\n"}
                                Crie tarefas e organize seus itens a fazer</Text>
                        </View>
                    )}
                />
            </View>
        </View>
    );
}
