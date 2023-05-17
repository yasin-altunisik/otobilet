import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f2f2f2",
  },
  input: {
    height: 40,
    width: 250,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderColor: "black",
    paddingLeft: 5,
    backgroundColor: "white",
    borderRadius: 5,
  },
  button: {
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
