import React from "react";
import { Text, View, Button } from "react-native";

function Signin({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Kayıt Ekranı</Text>
      <Button title="geri git" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

export default Signin;
