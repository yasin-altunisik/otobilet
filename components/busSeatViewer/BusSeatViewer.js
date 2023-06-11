import react from "react";
import { View, ScrollView, Text } from "react-native";
import styles from "./BusSeatViewer.style";

const data = [
  {
    id: 1,
    seatid: 0,
    isEmpty: "",
    cender: "",
    text: "şoför",
  },
  {
    id: 2,
    seatid: 0,
    isEmpty: "",
    cender: "",
    text: "",
  },
  {
    id: 3,
    seatid: 0,
    isEmpty: "",
    cender: "",
    text: "",
  },
  {
    id: 4,
    seatid: 0,
    isEmpty: "",
    cender: "",
    text: "kapı",
  },
  {
    id: 5,
    seatid: 1,
    isEmpty: false,
    cender: "male",
    text: "",
  },
  {
    id: 6,
    seatid: 0,
    isEmpty: true,
    cender: "",
    text: "",
  },
  {
    id: 7,
    seatid: 2,
    isEmpty: true,
    cender: "",
    text: "",
  },
  {
    id: 8,
    seatid: 3,
    isEmpty: false,
    cender: "female",
    text: "",
  },
  {
    id: 9,
    seatid: 4,
    isEmpty: true,
    cender: "",
    text: "",
  },
  {
    id: 10,
    seatid: 0,
    isEmpty: "",
    cender: "",
    text: "",
  },
  {
    id: 11,
    seatid: 5,
    isEmpty: true,
    cender: "",
    text: "",
  },
  {
    id: 12,
    seatid: 6,
    isEmpty: false,
    cender: "female",
    text: "",
  },
  {
    id: 13,
    seatid: 7,
    isEmpty: false,
    cender: "female",
    text: "",
  },
  {
    id: 14,
    seatid: 0,
    isEmpty: "",
    cender: "",
    text: "",
  },
  {
    id: 15,
    seatid: 8,
    isEmpty: true,
    cender: "",
    text: "",
  },
  {
    id: 16,
    seatid: 9,
    isEmpty: true,
    cender: "",
    text: "",
  },
  {
    id: 17,
    seatid: 10,
    isEmpty: false,
    cender: "male",
    text: "",
  },
  {
    id: 18,
    seatid: 0,
    isEmpty: "",
    cender: "",
    text: "",
  },
  {
    id: 19,
    seatid: 11,
    isEmpty: false,
    cender: "male",
    text: "",
  },
  {
    id: 20,
    seatid: 12,
    isEmpty: false,
    cender: "male",
    text: "",
  },
  {
    id: 21,
    seatid: 13,
    isEmpty: false,
    cender: "male",
    text: "",
  },
  {
    id: 22,
    seatid: 0,
    isEmpty: "",
    cender: "",
    text: "",
  },
  {
    id: 23,
    seatid: 14,
    isEmpty: true,
    cender: "",
    text: "",
  },
  {
    id: 24,
    seatid: 15,
    isEmpty: false,
    cender: "male",
    text: "",
  },
  {
    id: 25,
    seatid: 16,
    isEmpty: true,
    cender: "",
    text: "",
  },
  {
    id: 26,
    seatid: 0,
    isEmpty: "",
    cender: "",
    text: "",
  },
  {
    id: 27,
    seatid: 17,
    isEmpty: true,
    cender: "",
    text: "",
  },
  {
    id: 28,
    seatid: 18,
    isEmpty: true,
    cender: "",
    text: "",
  },
  {
    id: 29,
    seatid: 19,
    isEmpty: true,
    cender: "",
    text: "",
  },
  {
    id: 30,
    seatid: 0,
    isEmpty: "",
    cender: "",
    text: "",
  },
  {
    id: 31,
    seatid: 20,
    isEmpty: true,
    cender: "",
    text: "",
  },
  {
    id: 32,
    seatid: 21,
    isEmpty: true,
    cender: "",
    text: "",
  },
  {
    id: 33,
    seatid: 22,
    isEmpty: false,
    cender: "female",
    text: "",
  },
  {
    id: 34,
    seatid: 0,
    isEmpty: "",
    cender: "",
    text: "",
  },
  {
    id: 35,
    seatid: 23,
    isEmpty: false,
    cender: "female",
    text: "",
  },
  {
    id: 36,
    seatid: 24,
    isEmpty: true,
    cender: "",
    text: "kapı",
  },
  {
    id: 37,
    seatid: 25,
    isEmpty: false,
    cender: "male",
    text: "",
  },
  {
    id: 38,
    seatid: 0,
    isEmpty: "",
    cender: "",
    text: "",
  },
  {
    id: 39,
    seatid: 26,
    isEmpty: true,
    cender: "",
    text: "",
  },
  {
    id: 40,
    seatid: 27,
    isEmpty: false,
    cender: "male",
    text: "",
  },
  {
    id: 41,
    seatid: 28,
    isEmpty: false,
    cender: "male",
    text: "",
  },
  {
    id: 42,
    seatid: 0,
    isEmpty: "",
    cender: "",
    text: "",
  },
  {
    id: 43,
    seatid: 29,
    isEmpty: true,
    cender: "",
    text: "",
  },
  {
    id: 44,
    seatid: 30,
    isEmpty: false,
    cender: "male",
    text: "",
  },
  {
    id: 45,
    seatid: 31,
    isEmpty: false,
    cender: "female",
    text: "",
  },
  {
    id: 46,
    seatid: 0,
    isEmpty: "",
    cender: "",
    text: "",
  },
  {
    id: 47,
    seatid: 32,
    isEmpty: true,
    cender: "",
    text: "",
  },
  {
    id: 48,
    seatid: 33,
    isEmpty: false,
    cender: "female",
    text: "",
  },
  {
    id: 49,
    seatid: 34,
    isEmpty: false,
    cender: "male",
    text: "",
  },
  {
    id: 50,
    seatid: 0,
    isEmpty: "",
    cender: "",
    text: "",
  },
  {
    id: 51,
    seatid: 35,
    isEmpty: true,
    cender: "",
    text: "",
  },
  {
    id: 52,
    seatid: 36,
    isEmpty: false,
    cender: "male",
    text: "",
  },
  {
    id: 53,
    seatid: 37,
    isEmpty: true,
    cender: "",
    text: "",
  },
  {
    id: 54,
    seatid: 0,
    isEmpty: "",
    cender: "",
    text: "",
  },
  {
    id: 55,
    seatid: 38,
    isEmpty: false,
    cender: "male",
    text: "",
  },
  {
    id: 56,
    seatid: 39,
    isEmpty: true,
    cender: "",
    text: "",
  },
  {
    id: 57,
    seatid: 40,
    isEmpty: false,
    cender: "female",
    text: "",
  },
  {
    id: 58,
    seatid: 41,
    isEmpty: true,
    cender: "",
    text: "",
  },
  {
    id: 59,
    seatid: 42,
    isEmpty: false,
    cender: "female",
    text: "",
  },
  {
    id: 60,
    seatid: 43,
    isEmpty: false,
    cender: "female",
    text: "",
  },
];

const seats = () => {
  let seatLine = [];
  for (let i = 0; i < 15; i++) {
    let seatSingle = [];
    for (let k = 0; k < 4; k++) {
      if (data[(i + 1) * (k + 1)].seatid != 0) {
        seatSingle[k] = (
          <View key={data[(i + 1) * (k + 1)].id} style={styles.seatPink}></View>
        );
      } else {
        seatSingle[k] = (
          <View key={data[(i + 1) * (k + 1)].id} style={styles.seatBlue}></View>
        );
      }
    }
    let view = <View>{seatSingle}</View>;

    seatLine[i] = view;
  }
  return seatLine;
};

const BusSeatViewer = () => {
  return (
    <View style={styles.scrollContainer}>
      <ScrollView horizontal={true} style={styles.busSeatContainer}>
        <View style={styles.busBorder}>{seats()}</View>
      </ScrollView>
    </View>
  );
};

export default BusSeatViewer;
