import { View, Text } from "react-native";
import React from "react";
import { AuthProvider } from "../../contexts/auth-context";

export default function AppLayout() {
  return (
    <AuthProvider>
      <View>
        <Text>_layout</Text>
      </View>
    </AuthProvider>
  );
}
