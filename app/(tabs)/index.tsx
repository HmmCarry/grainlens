import { CaptureButton } from "@/components/ui/fab";
import { ScreenHeader } from "@/components/ui/screen-header";
import { Colors } from "@/constants/theme";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

export default function Home() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: Colors.light.background }}>
      <ScreenHeader
        title="GrainLens"
        subtitle="Rice Quality Assessment"
        right={<OfflineChip />}
      />

      <ScrollView
        contentContainerStyle={{ padding: 20, paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Welcome */}
        <View style={{ marginBottom: 24 }}>
          <Text
            style={{
              fontSize: 26,
              fontWeight: "900",
              color: Colors.light.text,
              letterSpacing: -0.3,
            }}
          >
            Welcome back!
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: Colors.light.textSecondary,
              marginTop: 4,
              fontWeight: "500",
            }}
          >
            Assess rice quality with AI-powered analysis
          </Text>
        </View>

        {/* Primary CTA — Big, tactile scan button */}
        <Pressable
          onPress={() => router.push("/capture")}
          style={({ pressed }) => ({
            backgroundColor: pressed
              ? Colors.light.accent
              : Colors.light.accentLight,
            borderRadius: 16,
            padding: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            borderWidth: 2,
            borderColor: Colors.light.accent,
            elevation: 4,
            shadowColor: Colors.light.accent,
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.25,
            shadowRadius: 6,
            marginBottom: 28,
          })}
        >
          <View
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              backgroundColor: "rgba(255,255,255,0.3)",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MaterialCommunityIcons name="camera" size={24} color="#FFFFFF" />
          </View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "800",
              color: "#FFFFFF",
              letterSpacing: 0.5,
            }}
          >
            Scan Rice Sample
          </Text>
        </Pressable>

        {/* Quick Stats */}
        <SectionLabel text="Quick Stats" />
        <View
          style={{
            flexDirection: "row",
            gap: 12,
            marginBottom: 28,
          }}
        >
          <StatCard
            icon="grain"
            label="Total Scans"
            value="0"
            color={Colors.light.accent}
          />
          <StatCard
            icon="today"
            label="Last Scan"
            value="Today"
            color="#15803D"
          />
        </View>

        {/* Pro Tip */}
        <View
          style={{
            backgroundColor: Colors.light.accentSubtle,
            borderRadius: 12,
            padding: 16,
            borderWidth: 1.5,
            borderColor: "#FDE68A",
            flexDirection: "row",
            gap: 12,
            marginBottom: 28,
          }}
        >
          <View
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              backgroundColor: Colors.light.accentLight,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MaterialCommunityIcons
              name="lightbulb-on"
              size={20}
              color="#FFFFFF"
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "800",
                color: Colors.light.text,
                marginBottom: 4,
              }}
            >
              Pro Tip
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: Colors.light.textSecondary,
                lineHeight: 20,
              }}
            >
              Place rice sample on white paper or cloth and ensure good natural
              lighting for the most accurate analysis.
            </Text>
          </View>
        </View>

        {/* Guidelines */}
        <SectionLabel text="Guidelines for Best Results" />
        <View style={{ gap: 12 }}>
          <GuidelineStep
            number={1}
            title="Lighting"
            description="Ensure good natural lighting"
            icon="wb-sunny"
          />
          <GuidelineStep
            number={2}
            title="Background"
            description="Use white or light background"
            icon="crop-square"
          />
          <GuidelineStep
            number={3}
            title="Distance"
            description="Hold camera 20-30cm above sample"
            icon="straighten"
          />
          <GuidelineStep
            number={4}
            title="Focus"
            description="Ensure rice grains are in focus"
            icon="center-focus-strong"
          />
        </View>
      </ScrollView>

      <CaptureButton />
    </View>
  );
}

function OfflineChip() {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        backgroundColor: "rgba(255,255,255,0.15)",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.25)",
      }}
    >
      <View
        style={{
          width: 7,
          height: 7,
          borderRadius: 4,
          backgroundColor: "#4ADE80",
        }}
      />
      <Text
        style={{
          fontSize: 11,
          fontWeight: "700",
          color: "rgba(255,255,255,0.9)",
          letterSpacing: 0.3,
        }}
      >
        OFFLINE
      </Text>
    </View>
  );
}

function SectionLabel({ text }: { text: string }) {
  return (
    <Text
      style={{
        fontSize: 16,
        fontWeight: "800",
        color: Colors.light.text,
        marginBottom: 12,
        letterSpacing: 0.2,
      }}
    >
      {text}
    </Text>
  );
}

function StatCard({
  icon,
  label,
  value,
  color,
}: {
  icon: string;
  label: string;
  value: string;
  color: string;
}) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
        borderRadius: 12,
        padding: 16,
        borderWidth: 1.5,
        borderColor: Colors.light.border,
      }}
    >
      <View
        style={{
          width: 40,
          height: 40,
          borderRadius: 10,
          backgroundColor: color + "18",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 12,
        }}
      >
        <MaterialIcons name={icon as any} size={22} color={color} />
      </View>
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
          fontSize: 13,
          color: Colors.light.textMuted,
          fontWeight: "600",
          marginTop: 2,
        }}
      >
        {label}
      </Text>
    </View>
  );
}

function GuidelineStep({
  number,
  title,
  description,
  icon,
}: {
  number: number;
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 14,
        backgroundColor: "#FFFFFF",
        borderRadius: 12,
        padding: 14,
        borderWidth: 1.5,
        borderColor: Colors.light.border,
      }}
    >
      <View
        style={{
          width: 40,
          height: 40,
          borderRadius: 20,
          backgroundColor: Colors.light.primary,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "900",
            color: Colors.light.textOnDark,
          }}
        >
          {number}
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "700",
            color: Colors.light.text,
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            fontSize: 13,
            color: Colors.light.textSecondary,
            marginTop: 2,
          }}
        >
          {description}
        </Text>
      </View>
      <MaterialIcons
        name={icon as any}
        size={22}
        color={Colors.light.textMuted}
      />
    </View>
  );
}
