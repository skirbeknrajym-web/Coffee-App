import { StyleSheet, Dimensions } from "react-native";
import { theme1 } from "../../theme";

const styles = StyleSheet.create({
  header: {
    marginTop: "15%",
    alignItems: "center",
  },
  profileHead: {
    marginTop: "5%",
    alignItems: "center",
    borderColor: "black",
  },
  profilePic: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  insidebutton: {
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#EBE1CE",
    marginVertical: "4%",
    padding: "4%",
    borderRadius: 4,
  },
  insidetText: {
    flex: 2,
    fontWeight: "200",
  },
  smallIcon: {
    width: 20,
    height: 20,
  },
  input: {
    width: "90%",
    marginVertical: "4%",
    backgroundColor: "#EBE1CE",
    padding: "5%",
    borderRadius: 4,
    paddingHorizontal: "3%",
    fontWeight: "200",
    alignSelf: "center",
  },
  inputBox: {
    width: "100%",
    alignContent: "flex-start",
  },
  formbox: {
    marginTop: "3%",
  },
  button: {
    width: "90%",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: theme1.lightBrown,
    padding: "5%",
  },
  inputLabel: {
    color: theme1.lightBrown,
    marginStart: "5%",
    fontWeight: "200",
  },
  headText: {
    fontSize: 32,
    color: theme1.lightBrown,
    fontWeight: "400",
  },
});

export default styles;
