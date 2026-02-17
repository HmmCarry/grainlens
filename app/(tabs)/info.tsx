import { ScreenHeader } from "@/components/ui/screen-header";
import { Colors } from "@/constants/theme";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useState } from "react";
import {
  Alert,
  Pressable,
  ScrollView,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Profile() {
  const [autoSave, setAutoSave] = useState(true);
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");

  return (
    <View style={{ flex: 1, backgroundColor: Colors.light.background }}>
      <ScreenHeader title="Profile" />

      <ScrollView
        contentContainerStyle={{ padding: 20, paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Avatar & Name */}
        <View style={{ alignItems: "center", marginBottom: 28 }}>
          <View
            style={{
              width: 80,
              height: 80,
              borderRadius: 40,
              backgroundColor: Colors.light.surfaceElevated,
              borderWidth: 3,
              borderColor: Colors.light.border,
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 12,
            }}
          >
            <MaterialCommunityIcons
              name="account"
              size={40}
              color={Colors.light.textMuted}
            />
          </View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "800",
              color: Colors.light.text,
            }}
          >
            Rice Trader
          </Text>
          <Text
            style={{
              fontSize: 13,
              color: Colors.light.textMuted,
              marginTop: 2,
            }}
          >
            user@example.com
          </Text>
        </View>

        {/* Personal Information */}
        <SectionTitle text="Personal Information" />
        <View style={{ gap: 10, marginBottom: 28 }}>
          <InputField
            label="Full Name"
            placeholder="Enter your name"
            value={fullName}
            onChangeText={setFullName}
            icon="person"
          />
          <InputField
            label="Phone Number"
            placeholder="+233 XXX XXX XXXX"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            icon="phone"
            keyboardType="phone-pad"
          />
          <InputField
            label="Location"
            placeholder="City / Region"
            value={location}
            onChangeText={setLocation}
            icon="location-on"
          />
          <PickerRow label="Role" value="Farmer" icon="badge" />
        </View>

        {/* App Settings */}
        <SectionTitle text="App Settings" />
        <View style={{ gap: 2, marginBottom: 28 }}>
          <SettingRow
            icon="photo-camera"
            title="Camera Quality"
            subtitle="Set image capture quality"
            onPress={() => {}}
            hasChevron
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
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
                backgroundColor: Colors.light.surface,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MaterialIcons
                name="save"
                size={20}
                color={Colors.light.textSecondary}
              />
            </View>
            <View style={{ flex: 1, marginLeft: 12 }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "700",
                  color: Colors.light.text,
                }}
              >
                Auto-save Results
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: Colors.light.textMuted,
                  marginTop: 1,
                }}
              >
                Automatically save scan results
              </Text>
            </View>
            <Switch
              value={autoSave}
              onValueChange={setAutoSave}
              trackColor={{
                false: Colors.light.border,
                true: Colors.light.accent,
              }}
              thumbColor={autoSave ? "#FFFFFF" : "#F7F2EA"}
            />
          </View>
          <SettingRow
            icon="language"
            title="Language"
            subtitle="English"
            onPress={() => {}}
            hasChevron
          />
        </View>

        {/* App Information */}
        <SectionTitle text="App Information" />
        <View
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: 12,
            borderWidth: 1.5,
            borderColor: Colors.light.border,
            padding: 16,
            gap: 12,
            marginBottom: 28,
          }}
        >
          <InfoRow label="App Version" value="1.0.0" />
          <View
            style={{
              height: 1,
              backgroundColor: Colors.light.borderLight,
            }}
          />
          <InfoRow label="Model Version" value="UNIDO AfricaRice v1.0" />
          <View
            style={{
              height: 1,
              backgroundColor: Colors.light.borderLight,
            }}
          />
          <InfoRow label="Build Number" value="1" />
        </View>

        {/* Logout button */}
        <Pressable
          onPress={() => Alert.alert("Logout", "Are you sure?")}
          style={({ pressed }) => ({
            backgroundColor: pressed ? "#FEE2E2" : "#FEF2F2",
            borderRadius: 12,
            padding: 16,
            alignItems: "center",
            borderWidth: 1.5,
            borderColor: "#FECACA",
            marginBottom: 20,
          })}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "700",
              color: "#DC2626",
            }}
          >
            Logout
          </Text>
        </Pressable>

        {/* About links */}
        <View
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: 12,
            borderWidth: 1.5,
            borderColor: Colors.light.border,
            padding: 16,
            gap: 12,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "800",
              color: Colors.light.text,
              marginBottom: 4,
            }}
          >
            About
          </Text>
          <LinkRow label="Privacy Policy" />
          <LinkRow label="Terms of Use" />
          <LinkRow label="Help & Support" />
        </View>
      </ScrollView>
    </View>
  );
}

function SectionTitle({ text }: { text: string }) {
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

function InputField({
  label,
  placeholder,
  value,
  onChangeText,
  icon,
  keyboardType,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  icon: string;
  keyboardType?: "default" | "phone-pad" | "email-address";
}) {
  return (
    <View
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: 12,
        borderWidth: 1.5,
        borderColor: Colors.light.border,
        paddingHorizontal: 14,
        paddingVertical: 12,
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
      }}
    >
      <MaterialIcons
        name={icon as any}
        size={20}
        color={Colors.light.textMuted}
      />
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 11,
            fontWeight: "700",
            color: Colors.light.textMuted,
            letterSpacing: 0.3,
            marginBottom: 2,
          }}
        >
          {label.toUpperCase()}
        </Text>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          placeholderTextColor={Colors.light.textMuted + "88"}
          style={{
            fontSize: 15,
            fontWeight: "600",
            color: Colors.light.text,
            padding: 0,
          }}
        />
      </View>
    </View>
  );
}

function PickerRow({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: string;
}) {
  return (
    <Pressable
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: 12,
        borderWidth: 1.5,
        borderColor: Colors.light.border,
        paddingHorizontal: 14,
        paddingVertical: 12,
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
      }}
    >
      <MaterialIcons
        name={icon as any}
        size={20}
        color={Colors.light.textMuted}
      />
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 11,
            fontWeight: "700",
            color: Colors.light.textMuted,
            letterSpacing: 0.3,
            marginBottom: 2,
          }}
        >
          {label.toUpperCase()}
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "600",
            color: Colors.light.text,
          }}
        >
          {value}
        </Text>
      </View>
      <MaterialIcons
        name="expand-more"
        size={20}
        color={Colors.light.textMuted}
      />
    </Pressable>
  );
}

function SettingRow({
  icon,
  title,
  subtitle,
  onPress,
  hasChevron,
}: {
  icon: string;
  title: string;
  subtitle?: string;
  onPress: () => void;
  hasChevron?: boolean;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: pressed ? Colors.light.surface : "#FFFFFF",
        borderRadius: 12,
        padding: 16,
        borderWidth: 1.5,
        borderColor: Colors.light.border,
      })}
    >
      <View
        style={{
          width: 40,
          height: 40,
          borderRadius: 10,
          backgroundColor: Colors.light.surface,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MaterialIcons
          name={icon as any}
          size={20}
          color={Colors.light.textSecondary}
        />
      </View>
      <View style={{ flex: 1, marginLeft: 12 }}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "700",
            color: Colors.light.text,
          }}
        >
          {title}
        </Text>
        {subtitle && (
          <Text
            style={{
              fontSize: 12,
              color: Colors.light.textMuted,
              marginTop: 1,
            }}
          >
            {subtitle}
          </Text>
        )}
      </View>
      {hasChevron && (
        <MaterialIcons
          name="chevron-right"
          size={22}
          color={Colors.light.textMuted}
        />
      )}
    </Pressable>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 14,
          color: Colors.light.textSecondary,
          fontWeight: "500",
        }}
      >
        {label}
      </Text>
      <Text
        style={{
          fontSize: 14,
          fontWeight: "700",
          color: Colors.light.text,
        }}
      >
        {value}
      </Text>
    </View>
  );
}

function LinkRow({ label }: { label: string }) {
  return (
    <Pressable
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 14,
          fontWeight: "600",
          color: Colors.light.accent,
        }}
      >
        {label}
      </Text>
      <MaterialIcons
        name="open-in-new"
        size={16}
        color={Colors.light.accent}
      />
    </Pressable>
  );
}
