import React from "react";
import { Platform, Text } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

// import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import SettingsScreen from "../screens/SettingsScreen";

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
});

SettingsStack.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: ({ focused }) => <Text>Settings</Text>
  // <TabBarIcon
  //   focused={focused}
  //   name={Platform.OS === "ios" ? "ios-person" : "md-person"}
  // />
};

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: "Watch",
  tabBarIcon: ({ focused }) => <Text>Watch</Text>
  // <TabBarIcon
  //   focused={focused}
  //   name={Platform.OS === "ios" ? "ios-play" : "md-play"}
  // />
};

const FavoritesStack = createStackNavigator({
  Favorites: FavoritesScreen
});

FavoritesStack.navigationOptions = {
  tabBarLabel: "Favorites",
  tabBarIcon: ({ focused }) => <Text>Favorites</Text>
  // <TabBarIcon
  //   focused={focused}
  //   name={Platform.OS === "ios" ? "ios-heart" : "md-heart"}
  // />
};

export default createBottomTabNavigator({
  SettingsStack,
  HomeStack,
  FavoritesStack
});
