import { View, Text } from "react-native";
import React from "react";
import { useAuth } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import { Button } from "../../../components/button";

export default function Account() {
  const { signOut, actor } = useAuth();
  const router = useRouter();

  const onSignOut = async () => {
    await signOut();
    router.replace("/(auth)/sign-in");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Account</Text>
      <Button onPress={onSignOut}>Sign Out</Button>
    </View>
  );
}
