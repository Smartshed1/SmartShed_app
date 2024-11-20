import React from "react";
import { View, StyleSheet } from "react-native";
import InputField from "../components/InputField";
import Button from "../components/Button";

export default function ParentRegistration({ navigation }) {
  return (
    <View style={styles.container}>
      <InputField placeholder="Full Name" />
      <InputField placeholder="Email" keyboardType="email-address" />
      <InputField placeholder="Phone Number" keyboardType="phone-pad" />
      <InputField placeholder="Ward's Name" />
      <InputField placeholder="Relationship" />
      <InputField placeholder="School Name" />
      <InputField placeholder="Class/Grade" />
      <Button
        title="Create Account"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
