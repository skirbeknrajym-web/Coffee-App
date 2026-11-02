import { Text, Image, View, ScrollView, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import styles from "./styles";
import Line from "../../components/Line";
import Checkbox from 'expo-checkbox';
import { theme1 } from "../../theme";
import { Entypo } from "@expo/vector-icons";
import {
  increment,
  decrement,
  addToOrder,
} from "../../redux/features/addOrder/addOrderSlice";
import { useDispatch, useSelector } from "react-redux";
import { GLView } from "expo-gl";
import { Renderer, THREE } from "expo-three";
// import React, { useEffect } from "react";


const DetailsAm = ({ navigation }) => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const total = 990 * count + 100;
  console.log(useSelector((state) => state.counter.orders));
  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <View style={styles.header_background}></View>
        <Image
          source={require("../../../assets/images/coffee-cup.png")}
          style={styles.header_image}
        />
      </View>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.coffee_title}>
            <Text style={styles.coffee_name}>Кофе Американо</Text>
            <Text style={styles.coffee_star}>★ 5</Text>
          </View>
          <Text style={styles.coffee_info}>
          Біз кофенің еліктіретін хош иісі мен керемет дәмін татып қана қоймай, оны дайындаудан қуанышқа бөлейміз.
          </Text>
        </View>
        <Line />
        <View style={styles.size_content}>
          <Text style={styles.coffee_size_title}>Өлшем</Text>
          <View style={styles.coffee_size_wrapper}>
            <View style={styles.coffee_size}>
              <Image
                source={require("../../../assets/images/coffee-size.png")}
                style={styles.coffee_small_size}
              />
              <Text>Кіші</Text>
            </View>
            <View style={styles.coffee_size}>
              <Image
                source={require("../../../assets/images/coffee-size.png")}
                style={styles.coffee_medium_size}
              />
              <Text>Орташа</Text>
            </View>
            <View style={styles.coffee_size}>
              <Image
                source={require("../../../assets/images/coffee-size.png")}
                style={styles.coffee_large_size}
              />
              <Text>Үлкен</Text>
            </View>
            <View style={styles.coffee_size}>
              <Image
                source={require("../../../assets/images/coffee-size.png")}
                style={styles.coffee_extralarge_size}
              />
              <Text>Өте үлкен</Text>
            </View>
          </View>
        </View>
        <Line />
        <View>
          <Text style={styles.topping_title}>Қосымша</Text>
          <View style={styles.topping_content}>
            <View style={styles.checkbox}>
              <Checkbox
                value={true}
                color={true ? theme1.lightBrown : undefined}
              />
              <Text style={styles.topping_name}>Қант</Text>
            </View>
            <Text>+100.00 тг</Text>
          </View>
          <View style={styles.topping_content}>
            <View style={styles.checkbox}>
              <Checkbox
                value={false}
                color={true ? theme1.lightBrown : undefined}
              />
              <Text style={styles.topping_name}>Сироп</Text>
            </View>
            <Text></Text>
          </View>
        </View>
        <Line />
        <View style={styles.note_content}>
          <Text style={styles.note_title}>Өз пікіріңізді қалдырыңыз..</Text>
          <TextInput
            textAlignVertical="top"
            style={styles.note}
            placeholder="Note..."
            multiline={true}
          />
        </View>
        <Line />
        <View style={styles.quantity_container}>
          <Text style={styles.quantity_title}>Дана</Text>
          <View style={styles.quantity_content}>
            <TouchableOpacity
              disabled={count <= 1 ? true : false}
              onPress={() => {
                dispatch(decrement());
              }}
            >
              <Text style={styles.quantity_info}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantity_info}>{count}</Text>
            <TouchableOpacity
              onPress={() => {
                dispatch(increment());
              }}
            >
              <Text style={styles.quantity_info}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Line />
        <View style={styles.price_container}>
          <View style={styles.price_content}>
            <Text style={styles.price_title}>Бағасы</Text>
            <View style={styles.price_info}>
              <Text style={styles.main_price}>{990 * count} тг</Text>
              <Text style={styles.addition_price}>+ 100.00 тг</Text>
              <Text style={styles.total_price}>{total} тг</Text>
            </View>
          </View>
          <View style={styles.price_buttons}>
            <TouchableOpacity
              style={styles.order_button}
              onPress={() => {
                dispatch(
                  addToOrder({ title: "Американо кофе", price: total })
                );
              }}
            >
              <Text style={styles.button_text}>Тапсырыс</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cart_button}
              onPress={() => navigation.navigate("Жәшік")}
            >
              <Entypo name="shopping-cart" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailsAm;
