import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function WelcomeScreen1({ navigation }) {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate("WelcomeScreen2");
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require("../assets/welcome.jpg")} style={styles.image} />
      <Text style={styles.name}>SmartSched</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#29f705",
  },
  logo: {
    fontSize: 36,
    fontWeight: "bold",
  },
  image: {
    width: 250,
    height: 300,
  },
  name: {
    fontSize: 24,
    color: "white",
  },
});
