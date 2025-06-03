import { Image, Text, View } from "react-native";
import React from "react";
import { Stack, Tabs } from "expo-router";
// import homeLogo from "../../assets/logo/homeLogo.png";
// import orderLogo from "../../assets/logo/orderLogo.png";
// import profileLogo from "../../assets/logo/profileLogo.png";
import { Ionicons } from "@expo/vector-icons";

const Layout = () => {
  return (
    <Tabs className="flex-1  justify-center items-center border-1 ">
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <>
              <Ionicons size={24} name={focused ? "home" : "home-outline"} />
            </>
          ),
          // tabBarStyle: {
          //   position: "absolute",
          //   marginBottom: 36,
          //   height: 52,
          //   marginTop: 10,
          //   backgroundColor: "#64748B",
          //   borderRadius: 50,
          //   marginHorizontal: 20,
          //   borderWidth: 1,
          // },
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: "orders",
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <>
              <Ionicons
                size={24}
                name={focused ? "document-text" : "document-text-outline"}
              />
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <>
              <Ionicons
                size={24}
                name={focused ? "person" : "person-outline"}
              />
            </>
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
