import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen1 from "./screens/WelcomeScreen1.js";
import WelcomeScreen2 from "./screens/WelcomeScreen2.js";
import SignUpOptions from "./screens/SignUpOptions.js";
import ParentRegistration from "./screens/ParentRegistration.js";
import StudentRegistration from "./screens/StudentRegistration.js";
import SchoolManagementRegistration from "./screens/SchoolManagementRegistration.js";
import Login from "./screens/Login.js";
import Dashboard from "./screens/Dashboard.js";
import CreateTask from "./screens/CreateTask.js";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="WelcomeScreen1">
      <Stack.Screen
        name="WelcomeScreen1"
        component={WelcomeScreen1}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WelcomeScreen2"
        component={WelcomeScreen2}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="SignUpOptions" component={SignUpOptions} />
      <Stack.Screen name="ParentRegistration" component={ParentRegistration} />
      <Stack.Screen
        name="StudentRegistration"
        component={StudentRegistration}
      />
      <Stack.Screen
        name="SchoolManagementRegistration"
        component={SchoolManagementRegistration}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="CreateTask" component={CreateTask} />
    </Stack.Navigator>
  );
}
