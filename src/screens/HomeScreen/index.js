import {
  View,
  Text,
  TextInput,
  ScrollView,
  ImageBackground,
} from "react-native";
import React from "react";
import styles from "./style";
import PopularCard from "../../components/PopularCard";
import SpecialsCard from "../../components/SpecialsCard";
import { SafeAreaView } from "react-native-safe-area-context";
import PopularCardCap from "../../components/PopularCardCap";
import PopularCardAm from "../../components/PopularCardAm";

const image = {
  uri: "https://images.pexels.com/photos/14398228/pexels-photo-14398228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
};

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.main}>
        <View style={styles.container}>
          <View style={styles.container_wrapper}>
            <TextInput style={styles.text_input} placeholder="Іздеу.." />
            <View style={styles.card_container}>
              <ImageBackground source={image} resizeMode="cover" style={styles.card_image} imageStyle={{ borderRadius: 24 }}>
                <Text style={styles.card_text}>Сергітетін капуччино тапсырысына 30% жеңілдік</Text>
              </ImageBackground>
            </View>
            <Text style={styles.popular_card_text}>Кофе мәзірі</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.popular_card_items}>
            <PopularCard
              onClickHandler={() => {
                navigation.navigate("Details");
              }}
            />
            <PopularCardCap
              onClickHandler={() => {
                navigation.navigate("DetailsCappucino");
              }}
            />
            <PopularCardAm
              onClickHandler={() => {
                navigation.navigate("DetailsAm");
              }}
            />
          </ScrollView>
        </View>
        <View style={styles.container_wrapper}>
          <Text style={styles.popular_card_text}>Салқын сусындар</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.popular_card_items}>
          <SpecialsCard
            onClickHandler={() => {
              navigation.navigate("Details");
            }}
          />
          <SpecialsCard
            onClickHandler={() => {
              navigation.navigate("Details");
            }}
          />
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
