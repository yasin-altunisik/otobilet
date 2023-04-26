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
    flex: 9,
    alignItems: "center",
    justifyContent: "center",
  },
  dropdown1BtnStyle: {
    width: "80%",
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#444",
  },
  dropdown1BtnTxtStyle: { color: "#444", textAlign: "left" },
  dropdown1DropdownStyle: { backgroundColor: "#EFEFEF" },
  dropdown1RowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  },
  dropdown1RowTxtStyle: { color: "#444", textAlign: "left" },
  dropdown1SelectedRowStyle: { backgroundColor: "rgba(0,0,0,0.1)" },
  dropdown1searchInputStyleStyle: {
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#444",
  },
  gidisDonusContainer: {
    flexDirection: "row",
    borderRadius: 5,
  },
  gidisContainer: {
    padding: 5,
    borderRadius: 5,
    marginRight: 5,
    alignItems: "center",

    shadowColor: "rgba(0,0,0, .8)", // IOS
    shadowOffset: { height: 5, width: 5 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: "white",
    elevation: 10, // Android
  },
  donusContainer: {
    padding: 5,
    borderRadius: 5,
    marginLeft: 5,
    alignItems: "center",

    shadowColor: "rgba(0,0,0, .8)", // IOS
    shadowOffset: { height: 5, width: 5 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: "#DBDBDB",
    //elevation: 10, // Android
  },
  disabledDonusContainer: {
    padding: 5,
    borderRadius: 5,
    marginLeft: 5,
    alignItems: "center",

    shadowColor: "rgba(0,0,0, .8)", // IOS
    shadowOffset: { height: 5, width: 5 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: "#fff",
  },
  verticleLine: {
    height: "100%",
    width: 1,
    backgroundColor: "#909090",
  },
  button: {
    color: "black",
  },
  disabledButton: {
    color: "#A4A4A4",
  },
});
