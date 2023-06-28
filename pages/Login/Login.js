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

function Login({ navigation, route }) {
  React.useEffect(() => {
    //setUserData(route.params?.user);

    if (route.params?.user) {
      setUserData((currentUsers) => [...currentUsers, route.params?.user]);
      //setUserData(route.params?.user);
    }
  }, [route.params?.user]);

  const [loginMail, setLoginMail] = React.useState("");
  const [loginPassword, setLoginPassword] = React.useState("");
  const [warning, setWarning] = React.useState(false);
  const [userData, setUserData] = React.useState([
    {
      userId: "1",
      mail: "altun.yasin.isik@gmail.com",
      name: "yasin",
      surname: "altunışık",
      nationalIdentificationNumber: "1",
      birthDate: "1.1.1911",
      gender: "male",
      password: "password123",
    },
    {
      userId: "2",
      mail: "a",
      name: "a",
      surname: "a",
      nationalIdentificationNumber: "a",
      birthDate: "a",
      gender: "a",
      password: "a",
    },
  ]);

  const checkLogin = () => {
    if (loginMail === "" || loginPassword === "") {
      ToastAndroid.showWithGravity(
        "mail veya şifre boş olamaz",
        ToastAndroid.LONG,
        ToastAndroid.TOP
      );
      setWarning(true);
      return;
    }

    userData.forEach((user, i) => {
      if (user.mail === loginMail) {
        if (user.password === loginPassword) {
          setWarning(false);
          ToastAndroid.showWithGravity(
            "Giriş başarılı",
            ToastAndroid.LONG,
            ToastAndroid.TOP
          );
          navigation.navigate("TicketSearch");
          return;
        }
      }
      if (i + 1 >= userData.length) {
        setWarning(true);
        ToastAndroid.showWithGravity(
          "Kayıt bulunamadı! Bilgilerinizi kontrol edin veya kaydolun",
          ToastAndroid.LONG,
          ToastAndroid.TOP
        );
      }
    });
  };

  const gotoSignInPage = () => {
    navigation.navigate("Signin");
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
          onChangeText={setLoginMail}
          value={loginMail}
          placeholder="eposta adresinizi girin"
        />
        <TextInput
          style={warning == true ? styles.warningInput : styles.input}
          onChangeText={setLoginPassword}
          value={loginPassword}
          placeholder="şifrenizi girin"
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={checkLogin}>
          <Text>GİRİŞ</Text>
        </TouchableOpacity>
        <Text> </Text>
        <Text>veya</Text>
        <Text> </Text>
        <TouchableOpacity style={styles.button} onPress={gotoSignInPage}>
          <Text>KAYIT</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Login;
