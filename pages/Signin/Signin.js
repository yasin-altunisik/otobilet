import React from "react";
import { TextInput, View, Button, Text } from "react-native";
import styles from "./Signin.style";
import { TouchableOpacity } from "react-native";

function Signin({ navigation }) {
  const [name, onChangeName] = React.useState("");
  const [surname, onChangeSurname] = React.useState("");
  const [personalIdNumber, onChangePersonalIdNumber] = React.useState("");
  const [birthDate, onChangeBirthDate] = React.useState("");
  const [gender, onChangeGender] = React.useState("");
  const [mail, onChangeMail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [rePassword, onChangeRePassword] = React.useState("");

  return (
    <View style={styles.container}>
      <Text>Kullanıcı bilgilerinizi giriniz.</Text>
      <Text></Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        value={name}
        placeholder="isim"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeSurname}
        value={surname}
        placeholder="soyisim"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePersonalIdNumber}
        value={personalIdNumber}
        placeholder="kimlik numarası"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeBirthDate}
        value={birthDate}
        placeholder="doğum tarihi"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeGender}
        value={gender}
        placeholder="cinsiyet"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeMail}
        value={mail}
        placeholder="e-posta adresi"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder="şifre"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeRePassword}
        value={rePassword}
        placeholder="şifre tekrarı"
      />
      {/* <Button title="Kaydol" onPress={() => navigation.navigate("Login")} /> */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text>Kaydol</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Signin;
