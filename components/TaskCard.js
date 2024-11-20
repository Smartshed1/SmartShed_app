import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TaskCard({ taskName, date }) {
  return (
    <View style={styles.card}>
      <Text style={styles.taskName}>{taskName}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
    marginVertical: 5,
  },
  taskName: {
    fontWeight: "bold",
  },
  date: {
    color: "#666",
  },
});
