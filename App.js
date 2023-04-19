import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./pages/Login/Login";
import Signin from "./pages/Signin/Signin";
import { View, Text } from "react-native";
import TicketSearch from "./pages/TicketSearch/TicketSearch";

const Stack = createNativeStackNavigator();
/*
function TicketSearch() {
  return (
    <View
    style={{
      flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
      >
      <Text>Ticket Ticket</Text>
      </View>
      );
    }
    */

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{ title: "Kayıt" }}
        />
        <Stack.Screen
          name="TicketSearch"
          component={TicketSearch}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
