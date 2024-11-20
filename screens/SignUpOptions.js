import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";

const data = [
  {
    id: "1",
    title: "Parent Registration",
    screen: "ParentRegistration",
  },
  {
    id: "2",
    title: "Student Registration",
    screen: "StudentRegistration",
  },
  {
    id: "3",
    title: "School Registration",
    screen: "SchoolManagementRegistration",
  },
];

export default function SignUpOptions({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image
          source={require("../assets/welcome-image.png")}
          style={styles.image}
        />
        <Text style={styles.title}>Sign Up As:</Text>
      </View>
      <View style>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate(item.screen)}>
              <View style={styles.body}>
                <Text style={styles.options}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
        <Text
          style={styles.footer}
          onPress={() => navigation.navigate("Login")}
        >
          Have an account? Login
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
  },
  top: {
    alignItems: "center",
    padding: 45,
    gap: 25,
    marginTop: 50,
  },
  options: {
    color: "white",
  },

  title: {
    fontSize: 14,
  },
  footer: {
    // marginTop: 20,
    // paddingTop: 50,?
  },
  body: {
    gap: 10,
    backgroundColor: "green",
    padding: 15,
    paddingHorizontal: 50,
    margin: 10,
    borderRadius: 50,
  },
  image: {
    width: 80,
    height: 80,
  },
});
