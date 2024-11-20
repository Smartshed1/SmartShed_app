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
      <Text style={styles.text}>Welcome to Our App!</Text>
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
  image: {
    width: 200,
    height: 200,
  },
  text: {
    marginTop: 20,
    fontSize: 16,
  },
});
