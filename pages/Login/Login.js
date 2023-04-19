import React from "react";
import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import styles from "./Login.style";

function Login({ navigation }) {
  const [mail, onChangeMail] = React.useState("Please enter your mail here.");
  const [password, onChangePassword] = React.useState(
    "Please enter your password here."
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Otobilet.com</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text>
          Otobilet dünyasına hoşgeldiniz! Kampanyalar ve özel indirimlerden
          faydalanmak için giriş yapın.
        </Text>
        <Text> </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeMail}
          value={mail}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("TicketSearch")}
        >
          <Text>GİRİŞ</Text>
        </TouchableOpacity>
        <Text> </Text>
        <Text>veya</Text>
        <Text> </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Signin")}
        >
          <Text>KAYIT</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Login;
