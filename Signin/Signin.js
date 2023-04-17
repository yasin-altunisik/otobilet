import React from "react";
import { TextInput, View, Button } from "react-native";
import styles from "./Signin.style";

function Signin({ navigation }) {
  const [name, onChangeName] = React.useState("");
  const [surname, onChangeSurname] = React.useState("");
  const [personalIdNumber, onChangePersonalIdNumber] = React.useState("");
  const [birthDate, onChangeBirthDate] = React.useState("");
  const [gender, onChangeGender] = React.useState("");
  const [mail, onChangeMail] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  return (
    <View style={styles.container}>
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
        onChangeText={onChangeName}
        value={name}
        placeholder="e-posta adresi"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        value={name}
        placeholder="şifre"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        value={name}
        placeholder="şifre tekrarı"
      />
      <Button title="Kayıt Ol" />
    </View>
  );
}

export default Signin;
