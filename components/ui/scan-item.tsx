import { Colors, getGrade } from "@/constants/theme";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { Pressable, Text, View } from "react-native";

interface ScanItemProps {
  date: string;
  score: number;
  brokenPercent: number;
  totalGrains: number;
  onPress?: () => void;
  onDelete?: () => void;
}

export function ScanItem({
  date,
  score,
  brokenPercent,
  totalGrains,
  onPress,
  onDelete,
}: ScanItemProps) {
  const grade = getGrade(score);

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: pressed ? Colors.light.surface : "#FFFFFF",
        borderRadius: 12,
        borderWidth: 1.5,
        borderColor: Colors.light.border,
        padding: 14,
        gap: 14,
      })}
    >
      {/* Score block with grade color */}
      <View
        style={{
          width: 64,
          height: 64,
          borderRadius: 12,
          backgroundColor: grade.bg,
          borderWidth: 2,
          borderColor: grade.color,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
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
      </View>

      {/* Details */}
      <View style={{ flex: 1, gap: 4 }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <View
            style={{
              backgroundColor: grade.bg,
              paddingHorizontal: 8,
              paddingVertical: 2,
              borderRadius: 4,
              borderWidth: 1,
              borderColor: grade.color,
            }}
          >
            <Text
              style={{
                fontSize: 11,
                fontWeight: "800",
                color: grade.color,
                letterSpacing: 0.3,
              }}
            >
              {grade.label}
            </Text>
          </View>
          <Text
            style={{
              fontSize: 13,
              color: Colors.light.textMuted,
              fontWeight: "500",
            }}
          >
            {date}
          </Text>
        </View>

        <View style={{ flexDirection: "row", gap: 16, marginTop: 2 }}>
          <Text style={{ fontSize: 13, color: Colors.light.textSecondary }}>
            <Text style={{ fontWeight: "700" }}>{brokenPercent}%</Text> broken
          </Text>
          <Text style={{ fontSize: 13, color: Colors.light.textSecondary }}>
            <Text style={{ fontWeight: "700" }}>{totalGrains}</Text> grains
          </Text>
        </View>
      </View>

      {/* Actions */}
      <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
        {onDelete && (
          <Pressable
            onPress={onDelete}
            hitSlop={12}
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              backgroundColor: "#FEF2F2",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MaterialIcons name="delete-outline" size={20} color="#DC2626" />
          </Pressable>
        )}
        <MaterialIcons
          name="chevron-right"
          size={22}
          color={Colors.light.textMuted}
        />
      </View>
    </Pressable>
  );
}
