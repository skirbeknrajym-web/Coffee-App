import { StyleSheet } from "react-native";
import { theme1 } from "../../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme1.lightBrown,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  check: {
    marginBottom: 10,
  },
  message: {
    fontSize: 20,
    fontWeight: "400",
    color: theme1.gray,
    textAlign: "center",
    lineHeight: 25,
  },
  button: {
    backgroundColor: theme1.gray,
    padding: 15,
    paddingHorizontal: 120,
    marginTop: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "400",
  },
});

export default styles;
