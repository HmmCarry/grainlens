import { Colors, getGrade } from "@/constants/theme";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const MOCK_REPORT = {
  score: 87,
  date: "2026-02-17",
  overview: {
    totalGrains: 345,
    brokenGrains: 47,
  },
  qualityMetrics: {
    brokenPercent: 13.7,
    chalkyPercent: 9.5,
    discoloredPercent: 7.4,
    foreignMatterPercent: 4.8,
    immaturePercent: 2.1,
  },
  physicalProperties: {
    avgLength: 6.91,
    avgWidth: 2.15,
    lengthWidthRatio: 3.22,
    grainType: "Long Grain",
  },
  standardThresholds: {
    brokenMax: 15,
    chalkyMax: 10,
    discoloredMax: 5,
    foreignMatterMax: 3,
  },
  recommendations: [
    "Rice quality is suitable for premium markets",
    "Broken grain percentage is within acceptable limits",
    "Consider improving post-harvest handling to reduce chalky grains",
    "Foreign matter is slightly above threshold — check cleaning process",
  ],
};

type Section =
  | "overview"
  | "quality"
  | "physical"
  | "thresholds"
  | "recommendations";

export default function ReportScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const grade = getGrade(MOCK_REPORT.score);
  const [openSections, setOpenSections] = useState<Set<Section>>(
    new Set(["overview"])
  );

  const toggleSection = (section: Section) => {
    setOpenSections((prev) => {
      const next = new Set(prev);
      if (next.has(section)) {
        next.delete(section);
      } else {
        next.add(section);
      }
      return next;
    });
  };

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
          onPress={() => router.back()}
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
          Detailed Report
        </Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView
        contentContainerStyle={{ padding: 20, paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Report header summary */}
        <View
          style={{
            backgroundColor: grade.bg,
            borderRadius: 12,
            padding: 16,
            borderLeftWidth: 5,
            borderLeftColor: grade.color,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 13,
                fontWeight: "600",
                color: Colors.light.textMuted,
              }}
            >
              {MOCK_REPORT.date}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "baseline",
                gap: 4,
                marginTop: 4,
              }}
            >
              <Text
                style={{
                  fontSize: 36,
                  fontWeight: "900",
                  color: grade.color,
                  letterSpacing: -1,
                }}
              >
                {MOCK_REPORT.score}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                  color: grade.color,
                  opacity: 0.6,
                }}
              >
                /100
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: grade.color,
              paddingHorizontal: 14,
              paddingVertical: 8,
              borderRadius: 8,
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontWeight: "800",
                fontSize: 15,
              }}
            >
              {grade.label}
            </Text>
          </View>
        </View>

        {/* Accordion Sections */}
        <AccordionSection
          title="Overview"
          icon="bar-chart"
          isOpen={openSections.has("overview")}
          onToggle={() => toggleSection("overview")}
        >
          <ReportRow
            label="Overall Score"
            value={`${MOCK_REPORT.score}/100`}
            valueColor={grade.color}
          />
          <ReportRow label="Quality Grade" value={grade.label} valueColor={grade.color} />
          <ReportRow
            label="Total Grains Detected"
            value={MOCK_REPORT.overview.totalGrains.toString()}
          />
          <ReportRow
            label="Broken Grains Count"
            value={MOCK_REPORT.overview.brokenGrains.toString()}
          />
          <ReportRow label="Assessment Date" value={MOCK_REPORT.date} />
        </AccordionSection>

        <AccordionSection
          title="Quality Metrics"
          icon="grain"
          isOpen={openSections.has("quality")}
          onToggle={() => toggleSection("quality")}
        >
          <ReportRow
            label="Broken Grains"
            value={`${MOCK_REPORT.qualityMetrics.brokenPercent}%`}
            valueColor={
              MOCK_REPORT.qualityMetrics.brokenPercent >
              MOCK_REPORT.standardThresholds.brokenMax
                ? Colors.light.gradePoor
                : Colors.light.premium
            }
          />
          <ReportRow
            label="Chalky Grains"
            value={`${MOCK_REPORT.qualityMetrics.chalkyPercent}%`}
            valueColor={
              MOCK_REPORT.qualityMetrics.chalkyPercent >
              MOCK_REPORT.standardThresholds.chalkyMax
                ? Colors.light.gradePoor
                : Colors.light.premium
            }
          />
          <ReportRow
            label="Discolored Grains"
            value={`${MOCK_REPORT.qualityMetrics.discoloredPercent}%`}
            valueColor={
              MOCK_REPORT.qualityMetrics.discoloredPercent >
              MOCK_REPORT.standardThresholds.discoloredMax
                ? Colors.light.gradePoor
                : Colors.light.gradeFair
            }
          />
          <ReportRow
            label="Foreign Matter"
            value={`${MOCK_REPORT.qualityMetrics.foreignMatterPercent}%`}
            valueColor={
              MOCK_REPORT.qualityMetrics.foreignMatterPercent >
              MOCK_REPORT.standardThresholds.foreignMatterMax
                ? Colors.light.gradePoor
                : Colors.light.gradeFair
            }
          />
          <ReportRow
            label="Immature Grains"
            value={`${MOCK_REPORT.qualityMetrics.immaturePercent}%`}
          />
        </AccordionSection>

        <AccordionSection
          title="Physical Properties"
          icon="straighten"
          isOpen={openSections.has("physical")}
          onToggle={() => toggleSection("physical")}
        >
          <ReportRow
            label="Average Length"
            value={`${MOCK_REPORT.physicalProperties.avgLength} mm`}
          />
          <ReportRow
            label="Average Width"
            value={`${MOCK_REPORT.physicalProperties.avgWidth} mm`}
          />
          <ReportRow
            label="Length-Width Ratio"
            value={`${MOCK_REPORT.physicalProperties.lengthWidthRatio}:1`}
          />
          <ReportRow
            label="Grain Type"
            value={MOCK_REPORT.physicalProperties.grainType}
          />
        </AccordionSection>

        <AccordionSection
          title="Standard Thresholds"
          icon="rule"
          isOpen={openSections.has("thresholds")}
          onToggle={() => toggleSection("thresholds")}
        >
          <ReportRow
            label="Max Broken"
            value={`${MOCK_REPORT.standardThresholds.brokenMax}%`}
          />
          <ReportRow
            label="Max Chalky"
            value={`${MOCK_REPORT.standardThresholds.chalkyMax}%`}
          />
          <ReportRow
            label="Max Discolored"
            value={`${MOCK_REPORT.standardThresholds.discoloredMax}%`}
          />
          <ReportRow
            label="Max Foreign Matter"
            value={`${MOCK_REPORT.standardThresholds.foreignMatterMax}%`}
          />
        </AccordionSection>

        <AccordionSection
          title="Recommendations"
          icon="lightbulb-outline"
          isOpen={openSections.has("recommendations")}
          onToggle={() => toggleSection("recommendations")}
        >
          {MOCK_REPORT.recommendations.map((rec, i) => (
            <View
              key={i}
              style={{
                flexDirection: "row",
                gap: 10,
                paddingVertical: 6,
              }}
            >
              <View
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: 3,
                  backgroundColor: Colors.light.accent,
                  marginTop: 7,
                }}
              />
              <Text
                style={{
                  flex: 1,
                  fontSize: 14,
                  color: Colors.light.text,
                  lineHeight: 20,
                }}
              >
                {rec}
              </Text>
            </View>
          ))}
        </AccordionSection>

        {/* Export buttons */}
        <Text
          style={{
            fontSize: 16,
            fontWeight: "800",
            color: Colors.light.text,
            marginTop: 28,
            marginBottom: 12,
          }}
        >
          Export Options
        </Text>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Pressable
            style={({ pressed }) => ({
              flex: 1,
              backgroundColor: pressed ? Colors.light.surface : "#FFFFFF",
              borderRadius: 12,
              padding: 14,
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
              size={22}
              color={Colors.light.accent}
            />
            <Text
              style={{
                fontSize: 14,
                fontWeight: "700",
                color: Colors.light.text,
              }}
            >
              PDF
            </Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => ({
              flex: 1,
              backgroundColor: pressed ? Colors.light.surface : "#FFFFFF",
              borderRadius: 12,
              padding: 14,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              borderWidth: 1.5,
              borderColor: Colors.light.border,
            })}
          >
            <MaterialCommunityIcons
              name="file-delimited"
              size={22}
              color={Colors.light.accent}
            />
            <Text
              style={{
                fontSize: 14,
                fontWeight: "700",
                color: Colors.light.text,
              }}
            >
              CSV
            </Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => ({
              flex: 1,
              backgroundColor: pressed ? Colors.light.surface : "#FFFFFF",
              borderRadius: 12,
              padding: 14,
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
              size={22}
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
      </ScrollView>
    </View>
  );
}

function AccordionSection({
  title,
  icon,
  isOpen,
  onToggle,
  children,
}: {
  title: string;
  icon: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <View style={{ marginBottom: 10 }}>
      <Pressable
        onPress={onToggle}
        style={({ pressed }) => ({
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: pressed ? Colors.light.surface : "#FFFFFF",
          borderRadius: 12,
          padding: 16,
          borderWidth: 1.5,
          borderColor: Colors.light.border,
          borderBottomLeftRadius: isOpen ? 0 : 12,
          borderBottomRightRadius: isOpen ? 0 : 12,
        })}
      >
        <MaterialIcons
          name={icon as any}
          size={20}
          color={Colors.light.textSecondary}
        />
        <Text
          style={{
            flex: 1,
            fontSize: 15,
            fontWeight: "700",
            color: Colors.light.text,
            marginLeft: 12,
          }}
        >
          {title}
        </Text>
        <MaterialIcons
          name={isOpen ? "keyboard-arrow-up" : "keyboard-arrow-down"}
          size={22}
          color={Colors.light.textMuted}
        />
      </Pressable>
      {isOpen && (
        <View
          style={{
            backgroundColor: "#FFFFFF",
            borderWidth: 1.5,
            borderTopWidth: 0,
            borderColor: Colors.light.border,
            borderBottomLeftRadius: 12,
            borderBottomRightRadius: 12,
            padding: 16,
            gap: 10,
          }}
        >
          {children}
        </View>
      )}
    </View>
  );
}

function ReportRow({
  label,
  value,
  valueColor,
}: {
  label: string;
  value: string;
  valueColor?: string;
}) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 4,
      }}
    >
      <Text
        style={{
          fontSize: 14,
          color: Colors.light.textSecondary,
          fontWeight: "500",
          flex: 1,
        }}
      >
        {label}
      </Text>
      <Text
        style={{
          fontSize: 14,
          fontWeight: "700",
          color: valueColor || Colors.light.text,
        }}
      >
        {value}
      </Text>
    </View>
  );
}
