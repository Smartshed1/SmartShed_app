import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export default function WelcomeScreen2({ navigation }) {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate("SignUpOptions");
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/welcome-image.png")}
        style={styles.image}
      />
      <Text style={styles.text}>SmartSched!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "rgba(0, 255, 0, 0.5)",
  },
  image: {
    width: 250,
    height: 300,
  },
  text: {
    marginTop: 20,
    fontSize: 26,
    color: "white",
  },
});
