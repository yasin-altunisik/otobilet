import { StyleSheet } from "react-native";

export default StyleSheet.create({
  scrollContainer: {},
  busSeatContainer: {
    margin: 10,
    borderRadius: 10,
  },
  busBorder: {
    flexDirection: "row",
    height: 200,
    alignItems: "stretch",
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "lightgrey",
    padding: 10,
    backgroundColor: "white",
  },
  seat: {
    width: 30,
    height: 30,
    backgroundColor: "pink",
    borderRadius: 10,
    margin: 5,
  },
  corridor: {
    width: 30,
    height: 30,
    margin: 5,
  },
});
