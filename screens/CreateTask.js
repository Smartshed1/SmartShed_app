import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function CreateTask({ navigation }) {
  const [taskName, setTaskName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [frequency, setFrequency] = useState("Daily"); // Default frequency

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create Task</Text>
      <TextInput
        style={styles.input}
        placeholder="Task Name"
        value={taskName}
        onChangeText={setTaskName}
      />
      <TextInput
        style={styles.input}
        placeholder="Start Date (e.g., YYYY-MM-DD)"
        value={startDate}
        onChangeText={setStartDate}
      />
      <TextInput
        style={styles.input}
        placeholder="End Date (e.g., YYYY-MM-DD)"
        value={endDate}
        onChangeText={setEndDate}
      />

      <Text style={styles.label}>Frequency:</Text>
      <View style={styles.frequencyContainer}>
        {["Daily", "Weekly", "Monthly"].map((freq) => (
          <TouchableOpacity
            key={freq}
            style={[
              styles.frequencyButton,
              frequency === freq && styles.selectedFrequencyButton,
            ]}
            onPress={() => setFrequency(freq)}
          >
            <Text style={styles.frequencyText}>{freq}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.createButton}>
        <Text style={styles.createButtonText}>Create Task</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  frequencyContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  frequencyButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    flex: 1,
    alignItems: "center",
    marginHorizontal: 5,
  },
  selectedFrequencyButton: {
    backgroundColor: "green",
    borderColor: "green",
  },
  frequencyText: {
    color: "#000",
  },
  createButton: {
    backgroundColor: "green",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  createButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
