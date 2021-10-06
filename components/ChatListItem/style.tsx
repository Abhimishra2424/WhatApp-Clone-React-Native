import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 10,
  },
  leftcontainer: {
    flexDirection: "row",
  },
  midcontainer: {
    justifyContent: "space-around",
  },
  avatar: {
    width: 60,
    height: 60,
    marginRight: 15,
    borderRadius: 50,
  },
  userName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  lastMsg: {
    fontSize: 16,
    color: "grey",
  },
  time: {
    fontSize: 16,
    color: "grey",
  },
});

export default styles;
