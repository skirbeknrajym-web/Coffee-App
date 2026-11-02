import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { theme1 } from "../theme";
const Button = ({ onClickHandler }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: theme1.lightBrown,
        width: "64%",
        height: "5%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 3,
      }}
      onPress={onClickHandler}
    >
      <Text style={{ color: theme1.white }}>Кіру</Text>
    </TouchableOpacity>
  );
};

export default Button;
