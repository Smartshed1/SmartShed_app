import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function StudentRegistration({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dob, setDob] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [classGrade, setClassGrade] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Student Registration</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="School Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Date of Birth (YYYY-MM-DD)"
        value={dob}
        onChangeText={setDob}
      />
      <TextInput
        style={styles.input}
        placeholder="School Name"
        value={schoolName}
        onChangeText={setSchoolName}
      />
      <TextInput
        style={styles.input}
        placeholder="Class/Grade"
        value={classGrade}
        onChangeText={setClassGrade}
      />

      <TouchableOpacity style={styles.registerButton}>
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
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  registerButton: {
    backgroundColor: "green",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  registerButtonText: {
    color: "#fff",
    fontWeight: "bold",
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