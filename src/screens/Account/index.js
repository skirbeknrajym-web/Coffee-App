import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import styles from "./style";
import { StatusBar } from "expo-status-bar";
import { theme1 } from "../../theme";
import { TouchableOpacity, ScrollView } from "react-native";
import { Linking } from "react-native";

const Account = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar />
        <View style={styles.header}>
          <Text style={styles.headText}>Менің профилім</Text>
        </View>
        <View style={styles.profileHead}>
          <Image style={styles.profilePic} source={require("../../../assets/images/mypic.jpeg")} />
          <Text style={{ padding: "2%", color: theme1.lightBrown }}>Сурет</Text>
        </View>
        <View style={styles.formbox}>
          <View style={styles.inputBox}>
            <Text style={styles.inputLabel}>Аты-жөні</Text>
            <View style={styles.insidebutton}>
              <TextInput value={"Нұрайым"} style={styles.insidetText} />
              <TouchableOpacity>
                <Image style={styles.smallIcon} source={{ uri: "https://cdn-icons-png.flaticon.com/512/2213/2213475.png" }} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.inputLabel}>Телефон номер</Text>
            <View style={styles.insidebutton}>
              <TextInput value={"+7 702 409 83 02"} style={styles.insidetText} />
              <TouchableOpacity>
                <Image style={styles.smallIcon} source={{ uri: "https://cdn-icons-png.flaticon.com/512/2213/2213475.png" }} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.inputLabel}>Email</Text>
            <View style={styles.insidebutton}>
              <TextInput value={"nuraiym77@gmail.com"} style={styles.insidetText} />
              <TouchableOpacity>
                <Image style={styles.smallIcon} source={{ uri: "https://cdn-icons-png.flaticon.com/512/2213/2213475.png" }} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.inputLabel}>Адрес</Text>
            <View style={styles.insidebutton}>
              <TextInput value={"Әл Фараби даңғылы, 71"} style={styles.insidetText} />
              <TouchableOpacity>
                <Image style={styles.smallIcon} source={{ uri: "https://cdn-icons-png.flaticon.com/512/2213/2213475.png" }} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.inputBox}>
            <TouchableOpacity style={styles.button} onPress={() => {
                                Linking.openURL("https://youtube.com/shorts/guTKYs010ug?si=kRVSxXZ-mVwe5i_k");
                              }}>
              <Text style={{ color: "white" }}>3Д модель</Text>
            </TouchableOpacity>
          </View>
         
        </View>
      </View>
    </ScrollView>
  );
};

export default Account;
