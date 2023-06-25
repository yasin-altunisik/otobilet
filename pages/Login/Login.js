import React from "react";
import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";

import styles from "./Login.style";

function Login({ navigation }) {
  const [mail, onChangeMail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [warning, setWarning] = React.useState(false);

  const userData = [
    {
      userId: 1,
      mail: "altun.yasin.isik@gmail.com",
      name: "yasin",
      surname: "altunışık",
      nationalIdentificationNumber: 1,
      birthDate: "1.1.1911",
      sex: "male",
      password: "password123",
    },
  ];

  const checkLogin = () => {
    if (mail === "" || password === "") {
      ToastAndroid.showWithGravity(
        "mail veya şifre boş olamaz",
        ToastAndroid.SHORT,
        ToastAndroid.TOP
      );
      setWarning(true);
      return;
    }
    setWarning(false);
    navigation.navigate("TicketSearch");
  };

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
          style={warning == true ? styles.warningInput : styles.input}
          onChangeText={onChangeMail}
          value={mail}
          placeholder="eposta adresinizi girin"
        />
        <TextInput
          style={warning == true ? styles.warningInput : styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="şifrenizi girin"
        />
        <TouchableOpacity style={styles.button} onPress={checkLogin}>
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
