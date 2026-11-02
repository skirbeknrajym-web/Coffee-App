import { StyleSheet } from "react-native";
import { theme1 } from "../../theme";

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: theme1.white,
  },
  container: {
    flex: 1,
    height: "100%",
  },
  container_search: {
    position: "relative",
    width: "100%",
    height: 180,
    backgroundColor: theme1.lightBrown,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    marginBottom: 20,
  },
  container_header: {
    width: "90%",
    position: "absolute",
    bottom: 24,
    height: 100,
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 16,
  },
  container_header_text: {
    width: "80%",
  },
  container_header_input: {
    width: "20%",
  },
  header_text_name: {
    fontSize: 12,
    color: "white",
    marginBottom: 12,
  },
  header_text: {
    fontSize: 20,
    color: "white",
    letterSpacing: 2,
  },

  text: {
    justifyContent: "center",
    textAlign: "center",
  },
  text_input: {
    borderRadius: 24,
    width: "90%",
    position: "absolute",
    bottom: 24,
    height: 42,
    marginLeft: 24,
    marginRight: 24,
    paddingLeft: 14,
    backgroundColor: theme1.gray,
  },
  orders_items: {
    flex: 1,
    paddingHorizontal: "4%",
  },
  pay_button: {
    backgroundColor: theme1.lightBrown,
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 100,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 10,
  },
  payment_Text: {
    color: theme1.white,
  },
});

export default styles;
