import { Tabs } from "expo-router";
import React from "react";
import { Platform, View } from "react-native";

import { HapticTab } from "@/components/haptic-tab";
import { Colors } from "@/constants/theme";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function TabLayout() {
  const colors = Colors.light;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarActiveTintColor: colors.tabIconSelected,
        tabBarInactiveTintColor: colors.tabIconDefault,
        tabBarStyle: {
          backgroundColor: colors.tabBar,
          borderTopColor: colors.tabBarBorder,
          borderTopWidth: 1,
          height: Platform.OS === "ios" ? 88 : 68,
          paddingBottom: Platform.OS === "ios" ? 28 : 10,
          paddingTop: 8,
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
          letterSpacing: 0.3,
          marginTop: 2,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: "center" }}>
              {focused && (
                <View
                  style={{
                    position: "absolute",
                    top: -8,
                    width: 32,
                    height: 3,
                    borderRadius: 2,
                    backgroundColor: colors.tabIconSelected,
                  }}
                />
              )}
              <MaterialIcons name="home-filled" size={26} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: "center" }}>
              {focused && (
                <View
                  style={{
                    position: "absolute",
                    top: -8,
                    width: 32,
                    height: 3,
                    borderRadius: 2,
                    backgroundColor: colors.tabIconSelected,
                  }}
                />
              )}
              <MaterialIcons name="history" size={26} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="info"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: "center" }}>
              {focused && (
                <View
                  style={{
                    position: "absolute",
                    top: -8,
                    width: 32,
                    height: 3,
                    borderRadius: 2,
                    backgroundColor: colors.tabIconSelected,
                  }}
                />
              )}
              <MaterialCommunityIcons
                name="account"
                size={26}
                color={color}
              />
            </View>
          ),
        }}
      />
      {/* Capture tab exists for routing but is hidden from tab bar */}
      <Tabs.Screen
        name="capture"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
