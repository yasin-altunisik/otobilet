import react from "react";
import { View, ScrollView } from "react-native";
import styles from "./BusSeatViewer.style";

const BusSeatViewer = () => {
  return (
    <ScrollView horizontal={true} style={styles.busSeatContainer}>
      <View style={styles.busBorder}>
        <View></View>
      </View>
    </ScrollView>
  );
};

export default BusSeatViewer;
