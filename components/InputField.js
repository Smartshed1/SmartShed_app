import React from "react";
import { TextInput, StyleSheet } from "react-native";

export default function InputField({ placeholder, ...props }) {
  return (
    <TextInput style={styles.input} placeholder={placeholder} {...props} />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    width: "100%",
  },
});
