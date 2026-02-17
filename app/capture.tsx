import { Colors } from "@/constants/theme";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type CaptureState = "ready" | "captured";

export default function CaptureScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [state, setState] = useState<CaptureState>("ready");

  const handleCapture = () => {
    setState("captured");
  };

  const handleRetake = () => {
    setState("ready");
  };

  const handleAnalyze = () => {
    router.push("/results");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#1A150D" }}>
      {/* Header */}
      <View
        style={{
          paddingTop: insets.top + 8,
          paddingBottom: 12,
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
          Capture Rice Sample
        </Text>
        <View style={{ width: 40 }} />
      </View>

      {/* Instruction banner */}
      <View
        style={{
          marginHorizontal: 16,
          marginTop: 12,
          backgroundColor: Colors.light.accentSubtle,
          borderRadius: 10,
          padding: 12,
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          borderWidth: 1,
          borderColor: "#FDE68A",
        }}
      >
        <MaterialCommunityIcons
          name="information"
          size={20}
          color={Colors.light.accent}
        />
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: 13,
              fontWeight: "700",
              color: Colors.light.text,
            }}
          >
            Place rice sample on white background
          </Text>
          <Text style={{ fontSize: 12, color: Colors.light.textSecondary }}>
            Good lighting, hold camera 20-30cm above
          </Text>
        </View>
      </View>

      {/* Camera viewfinder area (placeholder) */}
      <View
        style={{
          flex: 1,
          margin: 16,
          borderRadius: 16,
          backgroundColor: "#2D2418",
          overflow: "hidden",
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 2,
          borderColor: "#3D311B",
        }}
      >
        {state === "ready" ? (
          <>
            {/* Guide frame */}
            <View
              style={{
                width: "80%",
                aspectRatio: 1,
                borderWidth: 2,
                borderColor: "rgba(255,255,255,0.5)",
                borderRadius: 12,
                borderStyle: "dashed",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MaterialCommunityIcons
                name="grain"
                size={48}
                color="rgba(255,255,255,0.3)"
              />
              <Text
                style={{
                  color: "rgba(255,255,255,0.5)",
                  fontSize: 14,
                  fontWeight: "600",
                  marginTop: 12,
                  textAlign: "center",
                }}
              >
                Position rice sample{"\n"}within this frame
              </Text>
            </View>
            {/* Corner markers */}
            <CornerMarker position="top-left" />
            <CornerMarker position="top-right" />
            <CornerMarker position="bottom-left" />
            <CornerMarker position="bottom-right" />
          </>
        ) : (
          <View style={{ alignItems: "center", gap: 16, padding: 20 }}>
            <View
              style={{
                width: 56,
                height: 56,
                borderRadius: 28,
                backgroundColor: "#15803D",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MaterialIcons name="check" size={32} color="#FFFFFF" />
            </View>
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 18,
                fontWeight: "700",
                textAlign: "center",
              }}
            >
              Image Captured
            </Text>
            <Text
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: 14,
                textAlign: "center",
              }}
            >
              Review and analyze, or retake
            </Text>
          </View>
        )}
      </View>

      {/* Action buttons */}
      <View
        style={{
          paddingHorizontal: 20,
          paddingBottom: insets.bottom + 20,
          gap: 10,
        }}
      >
        {state === "ready" ? (
          <>
            {/* Gallery + Capture + Close */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 24,
              }}
            >
              {/* Gallery */}
              <Pressable
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  backgroundColor: Colors.light.primaryLight,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MaterialIcons name="photo-library" size={24} color="#FFFFFF" />
              </Pressable>

              {/* Capture button */}
              <Pressable
                onPress={handleCapture}
                style={({ pressed }) => ({
                  width: 72,
                  height: 72,
                  borderRadius: 36,
                  backgroundColor: pressed
                    ? Colors.light.accent
                    : Colors.light.accentLight,
                  alignItems: "center",
                  justifyContent: "center",
                  borderWidth: 4,
                  borderColor: "#FFFFFF",
                  elevation: 8,
                  shadowColor: Colors.light.accent,
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.4,
                  shadowRadius: 8,
                })}
              >
                <MaterialIcons name="camera-alt" size={30} color="#FFFFFF" />
              </Pressable>

              {/* Close */}
              <Pressable
                onPress={() => router.back()}
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  backgroundColor: "#DC2626",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MaterialIcons name="close" size={24} color="#FFFFFF" />
              </Pressable>
            </View>
            <Text
              style={{
                textAlign: "center",
                fontSize: 12,
                color: "rgba(255,255,255,0.5)",
                fontWeight: "500",
                marginTop: 4,
              }}
            >
              Tap the center button to capture
            </Text>
          </>
        ) : (
          <>
            <Pressable
              onPress={handleAnalyze}
              style={({ pressed }) => ({
                backgroundColor: pressed
                  ? Colors.light.accent
                  : Colors.light.accentLight,
                borderRadius: 14,
                padding: 18,
                alignItems: "center",
                borderWidth: 2,
                borderColor: Colors.light.accent,
              })}
            >
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "800",
                  color: "#FFFFFF",
                  letterSpacing: 0.5,
                }}
              >
                Analyze Image
              </Text>
            </Pressable>
            <Pressable
              onPress={handleRetake}
              style={({ pressed }) => ({
                backgroundColor: pressed ? "#3D311B" : "transparent",
                borderRadius: 14,
                padding: 16,
                alignItems: "center",
                borderWidth: 2,
                borderColor: "rgba(255,255,255,0.3)",
              })}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "700",
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                Retake Photo
              </Text>
            </Pressable>
          </>
        )}
      </View>
    </View>
  );
}

function CornerMarker({
  position,
}: {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}) {
  const size = 28;
  const offset = "8%";
  const style: any = {
    position: "absolute",
    width: size,
    height: size,
    borderColor: Colors.light.accentLight,
  };

  if (position.includes("top")) {
    style.top = offset;
    style.borderTopWidth = 3;
  }
  if (position.includes("bottom")) {
    style.bottom = offset;
    style.borderBottomWidth = 3;
  }
  if (position.includes("left")) {
    style.left = offset;
    style.borderLeftWidth = 3;
  }
  if (position.includes("right")) {
    style.right = offset;
    style.borderRightWidth = 3;
  }

  return <View style={style} />;
}
