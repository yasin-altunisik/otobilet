import react from "react";
import { View, Text } from "react-native";
import styles from "./PayScreen.style";

const PayScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Otobilet.com</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text>ödeme ekranı</Text>
      </View>
    </View>
  );
};

export default PayScreen;
