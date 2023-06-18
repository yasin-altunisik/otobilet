import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./pages/Login/Login";
import Signin from "./pages/Signin/Signin";
import TicketSearch from "./pages/TicketSearch/TicketSearch";
import TicketSelect from "./pages/TicketSelect/TicketSelect";
import VoyageDetail from "./pages/VoyageDetail/VoyageDetail";
import PayScreen from "./pages/PayScreen/PayScreen";

const Stack = createNativeStackNavigator();

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
        <Stack.Screen
          name="TicketSelect"
          component={TicketSelect}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VoyageDetail"
          component={VoyageDetail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PayScreen"
          component={PayScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
