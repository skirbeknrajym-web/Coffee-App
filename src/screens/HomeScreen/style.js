import { StyleSheet } from "react-native";
import { theme1 } from "../../theme";

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
  },
  container_wrapper: {
    paddingHorizontal: 24,
  },
  text_input: {
    paddingHorizontal: 24,
    marginTop: "2%",
    borderRadius: 24,
    width: "100%",
    height: 42,
    backgroundColor: theme1.gray,
  },
  card_container: {
    marginVertical: 14,
    borderRadius: 24,
    width: "100%",
    height: 184,
    backgroundColor: theme1.gray,
  },
  card_image: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
  },
  card_text: {
    color: theme1.white,
    fontSize: 20,
    maxWidth: 164,
    letterSpacing: 2,
  },
  popular_card_text: {
    fontSize: 24,
    paddingBottom: 10,
    Color: "",
  },
  popular_card_items: {
    height: 194,
  },
});

export default styles;
