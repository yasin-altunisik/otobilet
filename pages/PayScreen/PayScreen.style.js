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
    //justifyContent: "center",
    alignItems: "center",
  },
  inputLarge: {
    borderWidth: 1,
    borderRadius: 10,
    width: "80%",
    marginVertical: 10,
    paddingLeft: 10,
  },
  inputMedium: {
    borderWidth: 1,
    borderRadius: 10,
    width: "30%",
    marginVertical: 10,
    marginHorizontal: 10,
    paddingLeft: 10,
  },
  row: {
    flexDirection: "row",
  },
  alignRight: {
    alignItems: "flex-end",
  },
});
