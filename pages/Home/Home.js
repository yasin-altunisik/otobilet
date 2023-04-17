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

import styles from "./Home.style";

function HomeScreen({ navigation }) {
  const [mail, onChangeMail] = React.useState("Please enter your mail here.");
  const [password, onChangePassword] = React.useState(
    "Please enter your password here."
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
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
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Signin")}
        >
          <Text>KAYDOL</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
