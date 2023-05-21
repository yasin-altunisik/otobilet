import react from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Divider } from "@rneui/themed";
import styles from "./VoyageDetail.style";
import BusSeatViewer from "../../components/busSeatViewer/BusSeatViewer.js";

const VoyageDetail = ({ route }) => {
  const { firma, tarih, saat, bosKoltuk } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Otobilet.com</Text>
      </View>
      <View style={styles.bodyContainer}>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.title}>Sefer Detayı</Text>
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
            <Text style={styles.columnTitle}>Boş Koltuk</Text>
          </View>
        </View>

        <View style={styles.voyageContainer}>
          <View style={{ width: "20%" }}>
            <Text>{firma}</Text>
          </View>

          <View style={{ width: "21%", alignItems: "center" }}>
            <Text>{tarih}</Text>
          </View>

          <View style={{ width: "20%", alignItems: "center" }}>
            <Text>{saat}</Text>
          </View>

          <View style={{ width: "20%", alignItems: "center" }}>
            <Text>{bosKoltuk}</Text>
          </View>
        </View>

        <BusSeatViewer />

        <View style={{ alignItems: "flex-end", margin: 10 }}>
          <TouchableOpacity>
            <View
              style={{
                borderWidth: 1,
                borderRadius: 10,
                width: 80,
                height: 60,
                padding: 5,
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View>
                <Text>70 TL</Text>
              </View>
              <View>
                <Text>Satın Al</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default VoyageDetail;
