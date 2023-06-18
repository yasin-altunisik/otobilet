import react from "react";
import { View, Text, TextInput, Button } from "react-native";
import styles from "./PayScreen.style";

const PayScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Otobilet.com</Text>
      </View>
      <View style={styles.bodyContainer}>
        <TextInput style={styles.inputLarge} placeholder="Kart Numarası" />
        <TextInput
          style={styles.inputLarge}
          placeholder="Kart Üzerindeki İsim"
        />
        <View style={styles.row}>
          <TextInput style={styles.inputMedium} placeholder="CVC/CV2" />
          <TextInput style={styles.inputMedium} placeholder="Kart Tarihi" />
        </View>
        <View style={styles.alignRight}>
          <Button title="öde" />
        </View>
      </View>
    </View>
  );
};

export default PayScreen;
