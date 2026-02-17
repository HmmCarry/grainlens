import { CaptureButton } from "@/components/ui/fab";
import { ScanItem } from "@/components/ui/scan-item";
import { ScreenHeader } from "@/components/ui/screen-header";
import { Colors } from "@/constants/theme";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useState } from "react";
import {
  Alert,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";

// Mock data for demonstration
const MOCK_SCANS = [
  {
    id: "1",
    date: "2026-02-17",
    score: 87,
    brokenPercent: 13.7,
    totalGrains: 345,
  },
  {
    id: "2",
    date: "2026-02-15",
    score: 72,
    brokenPercent: 22.1,
    totalGrains: 289,
  },
  {
    id: "3",
    date: "2026-02-14",
    score: 94,
    brokenPercent: 5.2,
    totalGrains: 412,
  },
  {
    id: "4",
    date: "2026-02-12",
    score: 58,
    brokenPercent: 31.8,
    totalGrains: 267,
  },
  {
    id: "5",
    date: "2026-02-11",
    score: 91,
    brokenPercent: 7.4,
    totalGrains: 398,
  },
];

type SortOption = "newest" | "oldest" | "highest" | "lowest";
type FilterOption = "all" | "premium" | "grade1" | "grade2" | "poor";

export default function History() {
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [filterBy, setFilterBy] = useState<FilterOption>("all");

  const avgScore =
    MOCK_SCANS.length > 0
      ? (
          MOCK_SCANS.reduce((sum, s) => sum + s.score, 0) / MOCK_SCANS.length
        ).toFixed(1)
      : "—";

  const sortedScans = [...MOCK_SCANS].sort((a, b) => {
    switch (sortBy) {
      case "oldest":
        return a.date.localeCompare(b.date);
      case "highest":
        return b.score - a.score;
      case "lowest":
        return a.score - b.score;
      default:
        return b.date.localeCompare(a.date);
    }
  });

  const filteredScans = sortedScans.filter((scan) => {
    switch (filterBy) {
      case "premium":
        return scan.score >= 80;
      case "grade1":
        return scan.score >= 60 && scan.score < 80;
      case "grade2":
        return scan.score >= 40 && scan.score < 60;
      case "poor":
        return scan.score < 40;
      default:
        return true;
    }
  });

  return (
    <View style={{ flex: 1, backgroundColor: Colors.light.background }}>
      <ScreenHeader
        title="Scan History"
        right={
          <Pressable
            hitSlop={12}
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              backgroundColor: "rgba(255,255,255,0.15)",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MaterialCommunityIcons
              name="file-export-outline"
              size={20}
              color={Colors.light.textOnDark}
            />
          </Pressable>
        }
      />

      <ScrollView
        contentContainerStyle={{ padding: 20, paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Summary strip */}
        <View
          style={{
            flexDirection: "row",
            backgroundColor: Colors.light.surface,
            borderRadius: 12,
            borderWidth: 1.5,
            borderColor: Colors.light.border,
            marginBottom: 20,
            overflow: "hidden",
          }}
        >
          <SummaryCell
            value={MOCK_SCANS.length.toString()}
            label="Total Scans"
            hasBorder
          />
          <SummaryCell value={avgScore} label="Avg Score" />
        </View>

        {/* Sort / Filter row */}
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            marginBottom: 16,
          }}
        >
          <FilterChip
            label={`Sort: ${sortLabels[sortBy]}`}
            icon="swap-vert"
            onPress={() => {
              const options: SortOption[] = [
                "newest",
                "oldest",
                "highest",
                "lowest",
              ];
              const next =
                options[(options.indexOf(sortBy) + 1) % options.length];
              setSortBy(next);
            }}
          />
          <FilterChip
            label={`${filterLabels[filterBy]}`}
            icon="filter-list"
            onPress={() => {
              const options: FilterOption[] = [
                "all",
                "premium",
                "grade1",
                "grade2",
                "poor",
              ];
              const next =
                options[(options.indexOf(filterBy) + 1) % options.length];
              setFilterBy(next);
            }}
          />
        </View>

        {/* Scan list */}
        {filteredScans.length === 0 ? (
          <View
            style={{
              padding: 40,
              alignItems: "center",
            }}
          >
            <MaterialIcons
              name="search-off"
              size={48}
              color={Colors.light.textMuted}
            />
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                color: Colors.light.textMuted,
                marginTop: 12,
                textAlign: "center",
              }}
            >
              No scans match this filter
            </Text>
          </View>
        ) : (
          <View style={{ gap: 10 }}>
            {filteredScans.map((scan) => (
              <ScanItem
                key={scan.id}
                date={scan.date}
                score={scan.score}
                brokenPercent={scan.brokenPercent}
                totalGrains={scan.totalGrains}
                onPress={() => {}}
                onDelete={() =>
                  Alert.alert(
                    "Delete Scan",
                    "Are you sure you want to delete this scan?"
                  )
                }
              />
            ))}
          </View>
        )}
      </ScrollView>

      <CaptureButton />
    </View>
  );
}

const sortLabels: Record<SortOption, string> = {
  newest: "Newest",
  oldest: "Oldest",
  highest: "Highest",
  lowest: "Lowest",
};

const filterLabels: Record<FilterOption, string> = {
  all: "All Grades",
  premium: "Premium",
  grade1: "Grade 1",
  grade2: "Grade 2",
  poor: "Below Std",
};

function SummaryCell({
  value,
  label,
  hasBorder,
}: {
  value: string;
  label: string;
  hasBorder?: boolean;
}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        paddingVertical: 16,
        borderRightWidth: hasBorder ? 1 : 0,
        borderRightColor: Colors.light.border,
      }}
    >
      <Text
        style={{
          fontSize: 28,
          fontWeight: "900",
          color: Colors.light.text,
          letterSpacing: -0.5,
        }}
      >
        {value}
      </Text>
      <Text
        style={{
          fontSize: 12,
          fontWeight: "600",
          color: Colors.light.textMuted,
          marginTop: 2,
          letterSpacing: 0.3,
        }}
      >
        {label}
      </Text>
    </View>
  );
}

function FilterChip({
  label,
  icon,
  onPress,
}: {
  label: string;
  icon: string;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        backgroundColor: pressed ? Colors.light.surfaceElevated : "#FFFFFF",
        paddingHorizontal: 12,
        paddingVertical: 9,
        borderRadius: 8,
        borderWidth: 1.5,
        borderColor: Colors.light.border,
      })}
    >
      <MaterialIcons
        name={icon as any}
        size={16}
        color={Colors.light.textSecondary}
      />
      <Text
        style={{
          fontSize: 13,
          fontWeight: "600",
          color: Colors.light.textSecondary,
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
}
