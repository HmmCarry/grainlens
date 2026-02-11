import { ThemedText } from "@/components/themed-text";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function History() {
  return (
    <SafeAreaView>
      <View>
        <ThemedText>History</ThemedText>
      </View>
    </SafeAreaView>
  );
}
