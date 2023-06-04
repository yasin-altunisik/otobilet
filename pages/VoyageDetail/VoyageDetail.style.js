import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    backgroundColor: "crimson",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  bodyContainer: {
    marginTop: 10,
    flex: 9,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  columnTitle: {
    fontWeight: "bold",
  },
  voyageContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
    marginHorizontal: 10,
    borderRadius: 10,
    paddingVertical: 10,
    marginVertical: 5,
  },
  seatPink: {
    width: 30,
    height: 30,
    backgroundColor: "pink",
    borderRadius: 10,
    margin: 5,
  },
  seatLightskyblue: {
    width: 30,
    height: 30,
    backgroundColor: "lightskyblue",
    borderRadius: 10,
    margin: 5,
  },
  seatBisque: {
    width: 30,
    height: 30,
    backgroundColor: "bisque",
    borderRadius: 10,
    margin: 5,
  },
});
