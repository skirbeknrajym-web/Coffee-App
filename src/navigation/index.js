import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import Login from "../screens/Login";
import Account from "../screens/Account";
import Cart from "../screens/Cart";
import PaymentDone from "../screens/PaymentDone";
import { EvilIcons, Feather, FontAwesome5 } from "@expo/vector-icons";
import { theme1 } from "../theme";
import Details from "../screens/Details";
import DetailsCappucino from "../screens/DetailsCappucino";
import DetailsAm from "../screens/DetailsAm";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          borderTopWidth: 0,
        },
        headerShown: false,
        tabBarActiveTintColor: theme1.lightBrown,
      }}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Жәшік"
        component={Cart}
        options={{
          tabBarIcon: ({ color }) => (
            <EvilIcons name="cart" size={32} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Басты бет"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="coffee" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Аккаунт"
        component={Account}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user" size={21} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" component={MyTabs} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="DetailsCappucino" component={DetailsCappucino} />
        <Stack.Screen name="DetailsAm" component={DetailsAm} />
        <Stack.Screen name="PaymentDone" component={PaymentDone} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
