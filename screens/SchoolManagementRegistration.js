import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SchoolManagementRegistration({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [schoolType, setSchoolType] = useState("");
  const [position, setPosition] = useState("");

  const handleRegister = async () => {
    if (!name || !email || !schoolName || !schoolType || !position) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    const user = {
      name,
      email,
      schoolName,
      schoolType,
      position,
      role: "school-management",
    };

    try {
      await AsyncStorage.setItem("user", JSON.stringify(user));
      Alert.alert("Success", "Account created successfully");
      navigation.navigate("Login");
    } catch (error) {
      Alert.alert("Error", "Failed to save data");
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>School Management</Text>

      <TextInput
        style={styles.input}
        placeholder="full name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="School email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="phone number"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="school name"
        value={schoolName}
        onChangeText={setSchoolName}
      />
      <TextInput
        style={styles.input}
        placeholder="School type"
        value={schoolType}
        onChangeText={setSchoolType}
      />
      <TextInput
        style={styles.input}
        placeholder="Position"
        value={position}
        onChangeText={setPosition}
      />

      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Create Account</Text>
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
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
    paddingTop: 50,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
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
