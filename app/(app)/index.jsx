import { View, Text, Pressable } from "react-native";
import React from "react";
import { useAuth } from "@clerk/clerk-expo";

export default function HomeScreen() {
  const { signOut } = useAuth();
  return (
    <View>
      <Text>HomeScreen</Text>
      <Pressable onPress={signOut} className="px-5 py-3 bg-sky-500">
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
}
