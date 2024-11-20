import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      const storedTasks = await AsyncStorage.getItem("tasks");
      setTasks(storedTasks ? JSON.parse(storedTasks) : []);
    };

    fetchTasks();
  }, []);

  const addTask = async () => {
    if (!taskName || !date) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    const newTask = { taskName, date };
    const updatedTasks = [...tasks, newTask];

    try {
      await AsyncStorage.setItem("tasks", JSON.stringify(updatedTasks));
      setTasks(updatedTasks);
      setTaskName("");
      setDate("");
      Alert.alert("Success", "Task added successfully");
    } catch (error) {
      Alert.alert("Error", "Failed to save task");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Dashboard</Text>

      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.task}>
            <Text>{item.taskName}</Text>
            <Text>{item.date}</Text>
          </View>
        )}
      />

      <TextInput
        style={styles.input}
        placeholder="Task Name"
        value={taskName}
        onChangeText={setTaskName}
      />
      <TextInput
        style={styles.input}
        placeholder="Date (YYYY-MM-DD)"
        value={date}
        onChangeText={setDate}
      />

      <TouchableOpacity style={styles.addButton} onPress={addTask}>
        <Text style={styles.addButtonText}>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
