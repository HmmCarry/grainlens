import { getGrade } from "@/constants/theme";
import React from "react";
import { Text, View } from "react-native";

interface ScoreDisplayProps {
  score: number;
  size?: "sm" | "lg";
}

/**
 * Bold, confident score display — NOT a circular progress ring.
 * Uses a thick left accent border with the grade color for instant recognition.
 */
export function ScoreDisplay({ score, size = "lg" }: ScoreDisplayProps) {
  const grade = getGrade(score);

  if (size === "sm") {
    return (
      <View style={{ flexDirection: "row", alignItems: "baseline", gap: 2 }}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: "900",
            color: grade.color,
            letterSpacing: -0.5,
          }}
        >
          {score}
        </Text>
        <Text
          style={{
            fontSize: 13,
            fontWeight: "600",
            color: "#A68B5B",
          }}
        >
          /100
        </Text>
      </View>
    );
  }

  return (
    <View
      style={{
        backgroundColor: grade.bg,
        borderLeftWidth: 5,
        borderLeftColor: grade.color,
        borderRadius: 12,
        padding: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View>
        <Text
          style={{
            fontSize: 48,
            fontWeight: "900",
            color: grade.color,
            letterSpacing: -1,
            lineHeight: 52,
          }}
        >
          {score}
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "600",
            color: grade.color,
            opacity: 0.7,
            marginTop: 2,
          }}
        >
          out of 100
        </Text>
      </View>
      <View
        style={{
          backgroundColor: grade.color,
          paddingHorizontal: 16,
          paddingVertical: 8,
          borderRadius: 8,
        }}
      >
        <Text
          style={{
            color: "#FFFFFF",
            fontWeight: "800",
            fontSize: 16,
            letterSpacing: 0.5,
          }}
        >
          {grade.label}
        </Text>
      </View>
    </View>
  );
}
