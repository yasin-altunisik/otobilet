import react from "react";
import { View, Text } from "react-native";
import styles from "./Voyage.style";
import { TouchableOpacity } from "react-native";

const Voyage = ({ info, navigation, dateToGo }) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("VoyageDetail", {
          firma: info.firma,
          tarih: dateToGo,
          saat: info.saat,
          bosKoltuk: info.bosKoltuk,
        })
      }
    >
      <View style={styles.voyageContainer}>
        <View style={{ width: "20%" }}>
          <Text>{info.firma}</Text>
        </View>

        <View style={{ width: "20%", alignItems: "center" }}>
          <Text>{info.saat}</Text>
        </View>

        <View style={{ width: "20%", alignItems: "center" }}>
          <Text>{info.bosKoltuk}</Text>
        </View>

        <View style={{ width: "20%", alignItems: "center" }}>
          <Text>{info.fiyat}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Voyage;
