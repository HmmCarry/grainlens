import { getGrade } from "@/constants/theme";
import React from "react";
import { Text, View } from "react-native";

interface GradeBadgeProps {
  score: number;
  size?: "sm" | "md" | "lg";
}

export function GradeBadge({ score, size = "md" }: GradeBadgeProps) {
  const grade = getGrade(score);

  const sizeStyles = {
    sm: { paddingHorizontal: 8, paddingVertical: 3 },
    md: { paddingHorizontal: 12, paddingVertical: 5 },
    lg: { paddingHorizontal: 16, paddingVertical: 7 },
  };

  const fontSizes = {
    sm: 11,
    md: 13,
    lg: 15,
  };

  return (
    <View
      style={[
        {
          backgroundColor: grade.bg,
          borderRadius: 6,
          borderWidth: 1.5,
          borderColor: grade.color,
        },
        sizeStyles[size],
      ]}
    >
      <Text
        style={{
          color: grade.color,
          fontWeight: "800",
          fontSize: fontSizes[size],
          letterSpacing: 0.5,
        }}
      >
        {grade.label}
      </Text>
    </View>
  );
}
