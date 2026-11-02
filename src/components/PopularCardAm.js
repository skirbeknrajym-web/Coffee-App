import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { theme1 } from "../theme";
const image = {
  uri: "https://images.pexels.com/photos/3563623/pexels-photo-3563623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
};
const PopularCardAm = ({ onClickHandler }) => {
  return (
    <TouchableOpacity
      style={{
        width: 185,
        height: 170,
        backgroundColor: theme1.gray,
        borderRadius: 5,
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
      <Image
        source={image}
        resizeMode="cover"
        style={{
          width: "100%",
          height: 100,
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
        }}
      ></Image>
      <View
        style={{
          paddingHorizontal: 14,
          paddingTop: 4,
        }}
      >
        <Text
          style={{
            color: theme1.lightBrown,
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          Американо
        </Text>
        <Text style={{ fontSize: 12, fontWeight: "bold", color: theme1.black }}>
          сергіткіш кофе
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularCardAm;


