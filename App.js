import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [mail, onChangeMail] = React.useState("Please enter your mail here.");
  const [password, onChangePassword] = React.useState(
    "Please enter your password here."
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="crimson" />
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Otobilet</Text>
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
        <TouchableOpacity style={styles.button}>
          <Text>GİRİŞ</Text>
        </TouchableOpacity>
        <Text> </Text>
        <Text>veya</Text>
        <Text> </Text>
        <TouchableOpacity style={styles.button}>
          <Text>KAYDOL</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    width: 250,
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
  },
  headerContainer: {
    flex: 1,
    backgroundColor: "crimson",
    justifyContent: "center",
  },
  header: {
    textAlign: "center",
    fontSize: 50,
    fontWeight: "bold",
    color: "white",
  },
  bodyContainer: {
    padding: 20,
    flex: 2,
    backgroundColor: "white",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 100,
    backgroundColor: "grey",
    padding: 5,
    borderRadius: 5,
    textAlign: "center",
  },
});
