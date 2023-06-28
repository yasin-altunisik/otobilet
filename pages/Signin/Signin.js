import React from "react";
import { TextInput, View, Text, ToastAndroid } from "react-native";
import styles from "./Signin.style";
import { TouchableOpacity } from "react-native";

function Signin({ navigation }) {
  const [name, setName] = React.useState("");
  const [surname, setSurname] = React.useState("");
  const [personalIdNumber, setPersonalIdNumber] = React.useState("");
  const [birthDate, setBirthDate] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [mail, setMail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [rePassword, setRePassword] = React.useState("");

  const checkSignin = () => {
    if (
      (name &&
        surname &&
        personalIdNumber &&
        birthDate &&
        gender &&
        mail &&
        password &&
        rePassword) !== ""
    ) {
      if (password === rePassword) {
        //buraya

        const newUser = {
          userId: "123",
          mail: mail,
          name: name,
          surname: surname,
          nationalIdentificationNumber: personalIdNumber,
          birthDate: birthDate,
          gender: gender,
          password: password,
        };

        navigation.navigate({
          name: "Login",
          params: { user: newUser },
          merge: true,
        });
      } else {
        ToastAndroid.showWithGravity(
          "Şifreler farklı, düzeltiniz",
          ToastAndroid.LONG,
          ToastAndroid.TOP
        );
        return;
      }
    } else {
      ToastAndroid.showWithGravity(
        "Boş alanları doldurunuz",
        ToastAndroid.LONG,
        ToastAndroid.TOP
      );
      return;
    }
  };

  return (
    <View style={styles.container}>
      <Text>Kullanıcı bilgilerinizi giriniz.</Text>
      <Text></Text>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
        placeholder="isim"
      />
      <TextInput
        style={styles.input}
        onChangeText={setSurname}
        value={surname}
        placeholder="soyisim"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPersonalIdNumber}
        value={personalIdNumber}
        placeholder="kimlik numarası"
      />
      <TextInput
        style={styles.input}
        onChangeText={setBirthDate}
        value={birthDate}
        placeholder="doğum tarihi"
      />
      <TextInput
        style={styles.input}
        onChangeText={setGender}
        value={gender}
        placeholder="cinsiyet"
      />
      <TextInput
        style={styles.input}
        onChangeText={setMail}
        value={mail}
        placeholder="e-posta adresi"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="şifre"
      />
      <TextInput
        style={styles.input}
        onChangeText={setRePassword}
        value={rePassword}
        placeholder="şifre tekrarı"
      />
      <TouchableOpacity style={styles.button} onPress={checkSignin}>
        <Text>Kaydol</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Signin;
