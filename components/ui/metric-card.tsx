import { Colors } from "@/constants/theme";
import React from "react";
import { Text, View } from "react-native";

interface MetricCardProps {
  label: string;
  value: string;
  unit?: string;
  status?: "good" | "warning" | "bad" | "neutral";
  threshold?: number;
  current?: number;
}

const statusColors = {
  good: { accent: "#15803D", bg: "#F0FDF4", bar: "#15803D" },
  warning: { accent: "#D97706", bg: "#FFFBEB", bar: "#D97706" },
  bad: { accent: "#DC2626", bg: "#FEF2F2", bar: "#DC2626" },
  neutral: {
    accent: Colors.light.textSecondary,
    bg: Colors.light.surface,
    bar: Colors.light.textMuted,
  },
};

export function MetricCard({
  label,
  value,
  unit,
  status = "neutral",
  threshold,
  current,
}: MetricCardProps) {
  const colors = statusColors[status];

  return (
    <View
      style={{
        backgroundColor: colors.bg,
        borderRadius: 12,
        padding: 16,
        borderWidth: 1,
        borderColor: Colors.light.borderLight,
        flex: 1,
        minWidth: 140,
      }}
    >
      <Text
        style={{
          fontSize: 13,
          fontWeight: "600",
          color: Colors.light.textSecondary,
          marginBottom: 8,
          textTransform: "uppercase",
          letterSpacing: 0.5,
        }}
      >
        {label}
      </Text>
      <View style={{ flexDirection: "row", alignItems: "baseline", gap: 3 }}>
        <Text
          style={{
            fontSize: 28,
            fontWeight: "900",
            color: colors.accent,
            letterSpacing: -0.5,
          }}
        >
          {value}
        </Text>
        {unit && (
          <Text
            style={{
              fontSize: 15,
              fontWeight: "600",
              color: colors.accent,
              opacity: 0.7,
            }}
          >
            {unit}
          </Text>
        )}
      </View>

      {threshold !== undefined && current !== undefined && (
        <View style={{ marginTop: 10 }}>
          <View
            style={{
              height: 6,
              backgroundColor: "#E0D3BA",
              borderRadius: 3,
              overflow: "hidden",
            }}
          >
            <View
              style={{
                height: 6,
                width: `${Math.min(100, (current / (threshold * 2)) * 100)}%`,
                backgroundColor: colors.bar,
                borderRadius: 3,
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 11,
              color: Colors.light.textMuted,
              marginTop: 4,
            }}
          >
            Threshold: {threshold}%
          </Text>
        </View>
      )}
    </View>
  );
}
