import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function SignUpOptions({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up As:</Text>
      <Button
        title="Parent/Guardian"
        onPress={() => navigation.navigate("ParentRegistration")}
      />
      <Button
        title="Student"
        onPress={() => navigation.navigate("StudentRegistration")}
      />
      <Button
        title="School Management"
        onPress={() => navigation.navigate("SchoolManagementRegistration")}
      />
      <Text style={styles.footer} onPress={() => navigation.navigate("Login")}>
        Have an account? Login
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  footer: {
    marginTop: 20,
    color: "blue",
    textDecorationLine: "underline",
  },
});
