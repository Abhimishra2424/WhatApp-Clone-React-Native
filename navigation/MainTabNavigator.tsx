import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import TabOneScreen from "../screens/ChatsScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import { MainTabParamList } from "../types";
import { Fontisto } from "@expo/vector-icons";
import ChatsScreen from "../screens/ChatsScreen";

const MainTab = createMaterialTopTabNavigator<MainTabParamList>();

export default function MainTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <MainTab.Navigator
      initialRouteName="Chats"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].background,
        tabBarStyle: {
          backgroundColor: Colors[colorScheme].tint,
        },
        tabBarIndicatorStyle: {
          backgroundColor: Colors[colorScheme].background,
          height: 4,
        },
        tabBarLabelStyle: {
          fontWeight: "bold",
        },
        tabBarShowIcon: true,
      }}
    >
      <MainTab.Screen
        name="Camera"
        component={TabOneScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Fontisto name="camera" color={color} size={18} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <MainTab.Screen name="Chats" component={ChatsScreen} />
      <MainTab.Screen name="Status" component={TabTwoScreen} />
      <MainTab.Screen name="Calls" component={TabTwoScreen} />
    </MainTab.Navigator>
  );
}
