import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    width: 250,
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
  },
  warningInput: {
    height: 40,
    width: 250,
    margin: 12,
    borderBottomWidth: 1,
    borderColor: "red",
    padding: 10,
  },
  headerContainer: {
    flex: 1,
    backgroundColor: "crimson",
    justifyContent: "center",
  },
  header: {
    textAlign: "center",
    fontSize: 50,
    fontWeight: "bold",
    color: "white",
  },
  bodyContainer: {
    padding: 20,
    flex: 2,
    backgroundColor: "#f2f2f2",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    /*
    width: 100,
    backgroundColor: "white",
    padding: 5,
    borderRadius: 5,
    alignItems: "center",
    */

    padding: 5,
    borderRadius: 5,
    alignItems: "center",
    width: 100,

    shadowColor: "rgba(0,0,0, .8)", // IOS
    shadowOffset: { height: 5, width: 5 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: "white",
    elevation: 10, // Android
  },
});
