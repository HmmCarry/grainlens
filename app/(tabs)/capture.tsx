import React from "react";
import { Text, View } from "react-native";

/**
 * Hidden tab placeholder — actual capture UI is at app/capture.tsx (stack screen).
 * This file exists only for expo-router routing; it's hidden from the tab bar with href: null.
 */
export default function CaptureTabPlaceholder() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Redirecting...</Text>
    </View>
  );
}
