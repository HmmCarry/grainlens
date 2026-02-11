import { ThemedText } from "@/components/themed-text";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Info() {
  return (
    <SafeAreaView className="flex-1">
      <View>
        <ThemedText className="">Info</ThemedText>
      </View>
    </SafeAreaView>
  );
}
