import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function WelcomeScreen1({ navigation }) {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate("WelcomeScreen2");
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Logo</Text>
      <Text style={styles.name}>App Name</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgreen",
  },
  logo: {
    fontSize: 36,
    fontWeight: "bold",
  },
  name: {
    fontSize: 24,
  },
});
