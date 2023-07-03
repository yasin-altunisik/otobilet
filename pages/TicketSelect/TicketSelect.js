import React from "react";
import { View, Text } from "react-native";
import styles from "./TicketSelect.style";
import { Divider } from "@rneui/themed";
import Voyage from "../../components/voyage/Voyage";

const VoyageData = [
  {
    id: "1",
    firma: "Metro",
    saat: "12.00",
    bosKoltuk: "20",
    fiyat: "250",
  },
  {
    id: "2",
    firma: "Ses",
    saat: "13.00",
    bosKoltuk: "2",
    fiyat: "450",
  },
  {
    id: "3",
    firma: "Ulusoy",
    saat: "14.00",
    bosKoltuk: "12",
    fiyat: "500",
  },
  {
    id: "4",
    firma: "Özgül",
    saat: "23.00",
    bosKoltuk: "5",
    fiyat: "350",
  },
];

function TicketSelect({ navigation, route }) {
  const { goingDate, comebackDate, citytogo, cityfromgo } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Otobilet.com</Text>
      </View>
      <View style={styles.bodyContainer}>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.title}>Sefer Seç</Text>
        </View>
        <Text></Text>
        <Divider inset={true} insetType="middle" />
        <Text></Text>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <View>
            <Text style={styles.columnTitle}>Firma</Text>
          </View>

          <View>
            <Text style={styles.columnTitle}>Tarih</Text>
          </View>

          <View>
            <Text style={styles.columnTitle}>Saat</Text>
          </View>

          <View>
            <Text style={styles.columnTitle}>İstikamet</Text>
          </View>

          <View>
            <Text style={styles.columnTitle}>Fiyat</Text>
          </View>
        </View>
        {VoyageData.map((voyageInfo) => (
          <Voyage
            info={voyageInfo}
            key={voyageInfo.id}
            navigation={navigation}
            dateToGo={goingDate}
            dateToGoback={comebackDate}
            citytogo={citytogo}
            cityfromgo={cityfromgo}
          />
        ))}
      </View>
    </View>
  );
}

export default TicketSelect;
