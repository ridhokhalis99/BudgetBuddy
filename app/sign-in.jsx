import { View, Text } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { Pressable } from "react-native";

export default function LoginScreen() {
  return (
    <View className="w-full space-y-12 px-5">
      <Image
        source={require("../assets/logo.svg")}
        className="w-[300px] h-[85px] scale-75 mx-auto"
      />
      <View className="space-y-5">
        <Pressable className="border border-gray-200 text-white py-3 px-5 rounded-xl w-full justify-center items-center flex-row space-x-2">
          <Image
            source={require("../assets/icon/google.svg")}
            className="w-5 h-5"
          />
          <Text className="text-gray-700 text-base font-semibold text-center">
            Continue with Google
          </Text>
        </Pressable>
        <Pressable className="border border-gray-200 text-white py-3 px-5 rounded-xl w-full justify-center items-center flex-row space-x-2">
          <Image
            source={require("../assets/icon/facebook.svg")}
            className="w-5 h-5"
          />
          <Text className="text-gray-700 text-base font-semibold text-center">
            Continue with Facebook
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
