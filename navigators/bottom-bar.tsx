import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HOME, LOGIN, USER } from "../constants/tabs";
import { LoginPage } from "../screens/login-page";
import { MangaListNavigator } from "./mangalist-navigator";
import { UserListNavigator } from "./userlist-navigator";
import Icon from "react-native-vector-icons/AntDesign";

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName={HOME}>
      <Tab.Screen
        name={HOME}
        component={MangaListNavigator}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="home" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name={USER}
        component={UserListNavigator}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="user" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name={LOGIN}
        component={LoginPage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="login" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
