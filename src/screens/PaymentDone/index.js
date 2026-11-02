import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./style";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";

const PaymentDone = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.check}>
        <Icon name="check-circle" size={100} color={"#fff"} />
      </View>
      <View>
        <Text style={styles.message}>Төлем сәтті жасалды.</Text>
        <Text style={styles.message}>Тапсырыс жақын арада дайын болады.</Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Басты бет")}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Басты бет</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default PaymentDone;
