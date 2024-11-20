import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import InputField from "../components/InputField";
import Button from "../components/Button";

export default function ParentRegistration({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Parent/Guardian</Text>
      <InputField style={styles.input} placeholder="Full Name" />
      <InputField
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
      />
      <InputField
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
      />
      <InputField style={styles.input} placeholder="Ward's Name" />
      <InputField style={styles.input} placeholder="Relationship" />
      <InputField style={styles.input} placeholder="School Name" />
      <InputField style={styles.input} placeholder="Class/Grade" />
      <TouchableOpacity style={styles.registerButton}>
        <Text
          style={styles.registerButtonText}
          onPress={() => navigation.navigate("Login")}
        >
          Create Account
        </Text>
      </TouchableOpacity>
      <Text style={styles.loginText}>
        Already have an account?{" "}
        <Text
          style={styles.loginLink}
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </Text>
      </Text>
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
    marginBottom: 20,
    marginTop: 40,
    textAlign: "center",
  },
  input: {
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  registerButton: {
    backgroundColor: "green",
    padding: 12,
    width: 300,
    borderRadius: 5,
    alignItems: "center",
    margin: "auto",
    marginTop: 10,
    borderRadius: 50,
  },
  registerButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  loginText: {
    textAlign: "center",
    marginTop: 15,
  },
  loginLink: {
    color: "blue",
    fontWeight: "bold",
  },
});
