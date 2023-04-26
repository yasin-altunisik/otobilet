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
    backgroundColor: "white",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 100,
    backgroundColor: "grey",
    padding: 5,
    borderRadius: 5,
    alignItems: "center",
  },
});
