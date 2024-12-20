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

export default function StudentRegistration({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [classGrade, setClassGrade] = useState("");

  const handleRegister = async () => {
    if (!name || !email || !phone || !dob || !schoolName || !classGrade) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    const user = {
      name,
      email,
      phone,
      dob,
      schoolName,
      classGrade,
      role: "student",
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
      <Text style={styles.header}>Student</Text>
      <View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="full name"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="school email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="phone number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />
          <TextInput
            style={styles.input}
            placeholder="Date of birth"
            value={dob}
            onChangeText={setDob}
          />
          <TextInput
            style={styles.input}
            placeholder="School name"
            value={schoolName}
            onChangeText={setSchoolName}
          />
          <TextInput
            style={styles.input}
            placeholder="Class/Grade"
            value={classGrade}
            onChangeText={setClassGrade}
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.registerButton}
            onPress={handleRegister}
          >
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
      </View>
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
