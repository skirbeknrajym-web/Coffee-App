import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import { theme1 } from "../theme";
const image = {
  uri: "https://images.pexels.com/photos/14416493/pexels-photo-14416493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
};
const SpecialsCard = ({ onClickHandler }) => {
  return (
    <TouchableOpacity
      style={{
        width: 284,
        height: 170,
        backgroundColor: theme1.gray,
        borderRadius: 24,
        marginLeft: 24,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
      }}
      onPress={onClickHandler}
    >
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={{ flex: 1 }}
        borderRadius={24}
      ></ImageBackground>
    </TouchableOpacity>
  );
};

export default SpecialsCard;
