import React, { useEffect } from "react";
import { View } from "react-native";
import { Slot, SplashScreen } from "expo-router";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import LottieView from "lottie-react-native";
import "../global.css";

export default function Layout() {
  const [fontsLoaded, fontError] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded) {
    return (
      <View className="flex-1 bg-white items-center justify-center gap-5">
        <LottieView
          source={require("../assets/lottie/piggy-bank.json")}
          autoPlay
          loop
          className="w-[250px] h-[250px]"
        />
      </View>
    );
  }

  return (
    <View className="flex-1 items-center justify-center">
      <Slot />
    </View>
  );
}
