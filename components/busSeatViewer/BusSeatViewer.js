import react from "react";
import { View, ScrollView, Text } from "react-native";
import styles from "./BusSeatViewer.style";

const BusSeatViewer = () => {
  return (
    <View style={styles.scrollContainer}>
      <ScrollView horizontal={true} style={styles.busSeatContainer}>
        <View style={styles.busBorder}>
          <View>
            <View style={styles.corridor}>
              <Text>kapı</Text>
            </View>
            <View style={styles.corridor}></View>
            <View style={styles.corridor}></View>
            <View style={styles.seat}></View>
          </View>
          <View>
            <View style={styles.seat}></View>
            <View style={styles.seat}></View>
            <View style={styles.corridor}></View>
            <View style={styles.seat}></View>
          </View>
          <View>
            <View style={styles.seat}></View>
            <View style={styles.seat}></View>
            <View style={styles.corridor}></View>
            <View style={styles.seat}></View>
          </View>
          <View>
            <View style={styles.seat}></View>
            <View style={styles.seat}></View>
            <View style={styles.corridor}></View>
            <View style={styles.seat}></View>
          </View>
          <View>
            <View style={styles.seat}></View>
            <View style={styles.seat}></View>
            <View style={styles.corridor}></View>
            <View style={styles.seat}></View>
          </View>
          <View>
            <View style={styles.seat}></View>
            <View style={styles.seat}></View>
            <View style={styles.corridor}></View>
            <View style={styles.seat}></View>
          </View>
          <View>
            <View style={styles.seat}></View>
            <View style={styles.seat}></View>
            <View style={styles.corridor}></View>
            <View style={styles.seat}></View>
          </View>
          <View>
            <View style={styles.seat}></View>
            <View style={styles.seat}></View>
            <View style={styles.corridor}></View>
            <View style={styles.seat}></View>
          </View>
          <View>
            <View style={styles.corridor}>
              <Text>kapı</Text>
            </View>
            <View style={styles.corridor}></View>
            <View style={styles.corridor}></View>
            <View style={styles.seat}></View>
          </View>
          <View>
            <View style={styles.seat}></View>
            <View style={styles.seat}></View>
            <View style={styles.corridor}></View>
            <View style={styles.seat}></View>
          </View>
          <View>
            <View style={styles.seat}></View>
            <View style={styles.seat}></View>
            <View style={styles.corridor}></View>
            <View style={styles.seat}></View>
          </View>
          <View>
            <View style={styles.seat}></View>
            <View style={styles.seat}></View>
            <View style={styles.corridor}></View>
            <View style={styles.seat}></View>
          </View>
          <View>
            <View style={styles.seat}></View>
            <View style={styles.seat}></View>
            <View style={styles.corridor}></View>
            <View style={styles.seat}></View>
          </View>
          <View>
            <View style={styles.seat}></View>
            <View style={styles.seat}></View>
            <View style={styles.corridor}></View>
            <View style={styles.seat}></View>
          </View>
          <View>
            <View style={styles.seat}></View>
            <View style={styles.seat}></View>
            <View style={styles.seat}></View>
            <View style={styles.seat}></View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default BusSeatViewer;
