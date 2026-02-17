import { Colors } from "@/constants/theme";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useRouter } from "expo-router";
import React from "react";
import { Platform, Pressable, Text, View } from "react-native";

/**
 * Floating Action Button for camera capture.
 * Large, tactile, impossible to miss — even in bright sunlight with gloves.
 */
export function CaptureButton() {
  const router = useRouter();

  return (
    <View
      style={{
        position: "absolute",
        bottom: Platform.OS === "ios" ? 100 : 80,
        right: 20,
        zIndex: 100,
      }}
    >
      <Pressable
        onPress={() => router.push("/capture")}
        style={({ pressed }) => ({
          width: 64,
          height: 64,
          borderRadius: 16,
          backgroundColor: pressed
            ? Colors.light.accent
            : Colors.light.accentLight,
          alignItems: "center",
          justifyContent: "center",
          elevation: 8,
          shadowColor: Colors.light.accent,
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.35,
          shadowRadius: 8,
          borderWidth: 2,
          borderColor: Colors.light.accent,
        })}
      >
        <MaterialCommunityIcons name="camera" size={28} color="#FFFFFF" />
      </Pressable>
      <Text
        style={{
          textAlign: "center",
          fontSize: 10,
          fontWeight: "700",
          color: Colors.light.textSecondary,
          marginTop: 4,
          letterSpacing: 0.3,
        }}
      >
        SCAN
      </Text>
    </View>
  );
}
