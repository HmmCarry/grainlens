import "@/app/globals.css";
import { Colors } from "@/constants/theme";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: Colors.light.primary },
          headerTintColor: Colors.light.textOnDark,
          headerTitleStyle: { fontWeight: "700", fontSize: 18 },
          contentStyle: { backgroundColor: Colors.light.background },
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="capture"
          options={{
            presentation: "fullScreenModal",
            headerShown: false,
            animation: "slide_from_bottom",
          }}
        />
        <Stack.Screen
          name="results"
          options={{
            title: "Analysis Results",
            animation: "slide_from_right",
          }}
        />
        <Stack.Screen
          name="report"
          options={{
            title: "Detailed Report",
            animation: "slide_from_right",
          }}
        />
      </Stack>
      <StatusBar style="light" />
    </>
  );
}
