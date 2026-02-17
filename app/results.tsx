import { GradeBadge } from "@/components/ui/grade-badge";
import { MetricCard } from "@/components/ui/metric-card";
import { ScoreDisplay } from "@/components/ui/score-display";
import { Colors, getGrade } from "@/constants/theme";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Mock analysis results
const MOCK_RESULTS = {
  score: 87,
  totalGrains: 345,
  brokenGrains: 47,
  brokenPercent: 13.7,
  chalkyPercent: 9.5,
  discoloredPercent: 7.4,
  foreignMatterPercent: 4.8,
  avgLength: 6.91,
  lengthWidthRatio: 3.22,
  recommendation:
    "Excellent quality rice. Suitable for premium markets and direct consumption.",
};

export default function ResultsScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const grade = getGrade(MOCK_RESULTS.score);

  return (
    <View style={{ flex: 1, backgroundColor: Colors.light.background }}>
      {/* Header */}
      <View
        style={{
          paddingTop: insets.top + 8,
          paddingBottom: 16,
          paddingHorizontal: 16,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: Colors.light.primary,
        }}
      >
        <Pressable
          onPress={() => router.dismissAll()}
          hitSlop={16}
          style={{
            width: 40,
            height: 40,
            borderRadius: 10,
            backgroundColor: "rgba(255,255,255,0.15)",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MaterialIcons
            name="arrow-back"
            size={22}
            color={Colors.light.textOnDark}
          />
        </Pressable>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "800",
            color: Colors.light.textOnDark,
            letterSpacing: 0.3,
          }}
        >
          Analysis Results
        </Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView
        contentContainerStyle={{ padding: 20, paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Score + Grade — the hero element */}
        <ScoreDisplay score={MOCK_RESULTS.score} />

        {/* Recommendation box */}
        <View
          style={{
            marginTop: 20,
            backgroundColor: grade.bg,
            borderRadius: 12,
            padding: 16,
            borderLeftWidth: 4,
            borderLeftColor: grade.color,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "800",
              color: grade.color,
              marginBottom: 6,
            }}
          >
            Recommendation
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: Colors.light.text,
              lineHeight: 20,
            }}
          >
            {MOCK_RESULTS.recommendation}
          </Text>
        </View>

        {/* Quality Metrics */}
        <Text
          style={{
            fontSize: 16,
            fontWeight: "800",
            color: Colors.light.text,
            marginTop: 28,
            marginBottom: 14,
            letterSpacing: 0.2,
          }}
        >
          Quality Metrics
        </Text>

        <View style={{ gap: 12 }}>
          {/* Row 1 */}
          <View style={{ flexDirection: "row", gap: 12 }}>
            <MetricCard
              label="Broken Grains"
              value={MOCK_RESULTS.brokenPercent.toString()}
              unit="%"
              status={MOCK_RESULTS.brokenPercent < 15 ? "warning" : "bad"}
              threshold={15}
              current={MOCK_RESULTS.brokenPercent}
            />
            <MetricCard
              label="Chalky Grains"
              value={MOCK_RESULTS.chalkyPercent.toString()}
              unit="%"
              status={MOCK_RESULTS.chalkyPercent < 10 ? "warning" : "bad"}
              threshold={10}
              current={MOCK_RESULTS.chalkyPercent}
            />
          </View>

          {/* Row 2 */}
          <View style={{ flexDirection: "row", gap: 12 }}>
            <MetricCard
              label="Discolored"
              value={MOCK_RESULTS.discoloredPercent.toString()}
              unit="%"
              status={MOCK_RESULTS.discoloredPercent < 5 ? "good" : "warning"}
              threshold={5}
              current={MOCK_RESULTS.discoloredPercent}
            />
            <MetricCard
              label="Foreign Matter"
              value={MOCK_RESULTS.foreignMatterPercent.toString()}
              unit="%"
              status={
                MOCK_RESULTS.foreignMatterPercent < 3 ? "good" : "warning"
              }
              threshold={3}
              current={MOCK_RESULTS.foreignMatterPercent}
            />
          </View>

          {/* Row 3: Physical */}
          <View style={{ flexDirection: "row", gap: 12 }}>
            <MetricCard
              label="Avg Length"
              value={MOCK_RESULTS.avgLength.toString()}
              unit="mm"
              status="neutral"
            />
            <MetricCard
              label="L:W Ratio"
              value={MOCK_RESULTS.lengthWidthRatio.toString()}
              unit=":1"
              status="neutral"
            />
          </View>
        </View>

        {/* Summary row */}
        <View
          style={{
            marginTop: 20,
            backgroundColor: Colors.light.surface,
            borderRadius: 12,
            padding: 16,
            borderWidth: 1.5,
            borderColor: Colors.light.border,
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 22,
                fontWeight: "900",
                color: Colors.light.text,
              }}
            >
              {MOCK_RESULTS.totalGrains}
            </Text>
            <Text
              style={{
                fontSize: 11,
                fontWeight: "600",
                color: Colors.light.textMuted,
                marginTop: 2,
              }}
            >
              Total Grains
            </Text>
          </View>
          <View
            style={{ width: 1, backgroundColor: Colors.light.border }}
          />
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 22,
                fontWeight: "900",
                color: Colors.light.gradePoor,
              }}
            >
              {MOCK_RESULTS.brokenGrains}
            </Text>
            <Text
              style={{
                fontSize: 11,
                fontWeight: "600",
                color: Colors.light.textMuted,
                marginTop: 2,
              }}
            >
              Broken
            </Text>
          </View>
          <View
            style={{ width: 1, backgroundColor: Colors.light.border }}
          />
          <View style={{ alignItems: "center" }}>
            <GradeBadge score={MOCK_RESULTS.score} size="md" />
          </View>
        </View>

        {/* Action buttons */}
        <View style={{ gap: 10, marginTop: 28 }}>
          <Pressable
            onPress={() => router.push("/report")}
            style={({ pressed }) => ({
              backgroundColor: pressed
                ? Colors.light.primary
                : Colors.light.primary,
              borderRadius: 14,
              padding: 18,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              opacity: pressed ? 0.85 : 1,
            })}
          >
            <MaterialIcons name="description" size={20} color="#FFFFFF" />
            <Text
              style={{
                fontSize: 16,
                fontWeight: "800",
                color: "#FFFFFF",
                letterSpacing: 0.3,
              }}
            >
              View Full Report
            </Text>
          </Pressable>

          <View style={{ flexDirection: "row", gap: 10 }}>
            <Pressable
              style={({ pressed }) => ({
                flex: 1,
                backgroundColor: pressed
                  ? Colors.light.surface
                  : "#FFFFFF",
                borderRadius: 14,
                padding: 16,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                borderWidth: 1.5,
                borderColor: Colors.light.border,
              })}
            >
              <MaterialCommunityIcons
                name="file-pdf-box"
                size={20}
                color={Colors.light.accent}
              />
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "700",
                  color: Colors.light.text,
                }}
              >
                Export PDF
              </Text>
            </Pressable>

            <Pressable
              style={({ pressed }) => ({
                flex: 1,
                backgroundColor: pressed
                  ? Colors.light.surface
                  : "#FFFFFF",
                borderRadius: 14,
                padding: 16,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                borderWidth: 1.5,
                borderColor: Colors.light.border,
              })}
            >
              <MaterialIcons
                name="share"
                size={20}
                color={Colors.light.accent}
              />
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "700",
                  color: Colors.light.text,
                }}
              >
                Share
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
