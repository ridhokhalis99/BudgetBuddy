import { Image } from "expo-image";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center space-y-8 w-full px-5">
      <View className="space-y-5 justify-center items-center">
        <Image
          source={require("../assets/illustration/saving-money.svg")}
          className="w-[360px] h-[360px]"
        />
        <View className="space-y-3">
          <Text className="text-xl font-bold text-sky-600 text-center">
            Simplify Your Budgeting Journey
          </Text>
          <Text className="text-center text-gray-600 leading-6 tracking-wide">
            Effortlessly track your expenses and save more money. Stay on top of
            your finances with intuitive tools and insights.
          </Text>
        </View>
      </View>
      <Link href="/(auth)/sign-in" asChild>
        <Pressable className="bg-sky-500 text-white py-3 px-5 rounded-xl w-full">
          <Text className="text-white text-base font-bold text-center">
            Get Started
          </Text>
        </Pressable>
      </Link>
    </View>
  );
}
