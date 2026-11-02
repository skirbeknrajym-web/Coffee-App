import { StyleSheet } from "react-native";
import { theme1 } from "../../theme";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    marginBottom: "10%",
    width: "64%",
    height: "7%",
    paddingLeft: 12,
    backgroundColor: theme1.clearBrown,
    color: theme1.black,
  },
});

export default styles;
