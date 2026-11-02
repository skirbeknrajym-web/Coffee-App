import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { theme1 } from "../theme";

const OrdersCard = ({ onClickHandler, title, price }) => {
  return (
    <TouchableOpacity
      style={{
        marginVertical: 14,
        width: "100%",
        height: 124,
        flexDirection: "row",
        justifyContent: "center",
      }}
      onPress={onClickHandler}
    >
      <View
        style={{
          width: "40%",
          height: "100%",
          backgroundColor: theme1.clearBrown,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../../assets/images/coffee-cup.png")}
          style={{
            height: "90%",
            width: "100%",
          }}
        />
      </View>
      <View
        style={{
          padding: 24,
          width: "60%",
          height: "100%",
          paddingHorizontal: 24,
        }}
      >
        <Text
          style={{ fontSize: 21, color: theme1.lightBrown, fontWeight: "bold" }}
        >
          {title}
        </Text>
        <Text style={{ fontSize: 14, color: "gray" }}>cүт қосылған</Text>
        <View flexDirection="row">
          <Text
            style={{
              marginLeft: 5,
              marginRight: 40,
              marginVertical: 15,
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
             {price} тг
          </Text>
          <Text
            style={{
              marginRight: 5,
              marginVertical: 15,
              marginLeft: 40,
              color: theme1.lightBrown,
            }}
          >
            ★ 4.7
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default OrdersCard;
