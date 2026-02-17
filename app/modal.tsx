import { Colors } from "@/constants/theme";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function ModalScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        backgroundColor: Colors.light.background,
      }}
    >
      <MaterialIcons
        name="info-outline"
        size={48}
        color={Colors.light.textMuted}
      />
      <Text
        style={{
          fontSize: 22,
          fontWeight: "800",
          color: Colors.light.text,
          marginTop: 16,
        }}
      >
        GrainLens
      </Text>
      <Text
        style={{
          fontSize: 14,
          color: Colors.light.textSecondary,
          marginTop: 8,
          textAlign: "center",
        }}
      >
        Rice Quality Assessment Tool
      </Text>
      <Link href="/" dismissTo style={{ marginTop: 20 }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "700",
            color: Colors.light.accent,
          }}
        >
          Go back
        </Text>
      </Link>
    </View>
  );
}
