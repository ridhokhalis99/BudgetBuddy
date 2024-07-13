import { View, Text, Pressable } from "react-native";
import React from "react";
import { useAuth } from "@clerk/clerk-expo";
import { Button } from "../../../components/button";
import { Redirect, useRouter } from "expo-router";

export default function HomeScreen() {
  const { signOut, actor } = useAuth();
  console.log("[] ~ HomeScreen ~ actor:", useAuth());
  const router = useRouter();

  const onSignOut = async () => {
    await signOut();
    router.replace("/(auth)/sign-in");
  };

  return (
    <View className="flex-1 justify-center items-center px-5 space-y-9 bg-white">
      <Text>HomeScreen</Text>
      <Button onPress={onSignOut}>Sign Out</Button>
    </View>
  );
}
