import { Colors } from "@/constants/theme";
import React, { type ReactNode } from "react";
import { Platform, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface ScreenHeaderProps {
  title: string;
  subtitle?: string;
  right?: ReactNode;
}

/**
 * Warm umber header bar — distinctive and confident.
 * Uses the primary dark brown, not generic green or blue.
 */
export function ScreenHeader({ title, subtitle, right }: ScreenHeaderProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        backgroundColor: Colors.light.primary,
        paddingTop: insets.top + 8,
        paddingBottom: 16,
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "800",
              color: Colors.light.textOnDark,
              letterSpacing: 0.3,
            }}
          >
            {title}
          </Text>
          {subtitle && (
            <Text
              style={{
                fontSize: 13,
                color: Colors.light.textOnDark,
                opacity: 0.75,
                marginTop: 2,
                fontWeight: "500",
              }}
            >
              {subtitle}
            </Text>
          )}
        </View>
        {right && <View>{right}</View>}
      </View>
    </View>
  );
}
