import React, { useMemo } from "react";
import { useSignIn } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import { Text, View } from "react-native";
import { TextInput } from "../../components/text-input";
import { Image } from "expo-image";
import { useForm } from "react-hook-form";
import { Button } from "../../components/button";

export default function SignIn() {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();
  const useFormObj = useForm();
  const { handleSubmit, watch } = useFormObj;

  const isButtonDisabled = useMemo(() => {
    const { email, password } = watch();
    return !email || !password;
  }, [watch()]);

  const onSignInPress = React.useCallback(
    async (data) => {
      const { email, password } = data;
      if (!isLoaded) {
        return;
      }

      try {
        const signInAttempt = await signIn.create({
          identifier: email,
          password,
        });

        if (signInAttempt.status === "complete") {
          await setActive({ session: signInAttempt.createdSessionId });
          router.replace("/(app)");
        } else {
          console.error(JSON.stringify(signInAttempt, null, 2));
        }
      } catch (err) {
        console.error(JSON.stringify(err, null, 2));
      }
    },
    [isLoaded]
  );

  return (
    <View className="flex-1 justify-center items-center px-5 space-y-9 bg-white">
      <Image
        source={require("../../assets/logo.svg")}
        className="w-[172px] h-[62px] mx-auto"
      />
      <View className="w-full space-y-7">
        <View>
          <TextInput
            useFormObj={useFormObj}
            name="email"
            label="Email"
            placeholder="Email..."
            style={{ marginTop: 0 }}
          />
          <TextInput
            useFormObj={useFormObj}
            name="password"
            label="Password"
            placeholder="Password..."
            isPassword
          />
        </View>
        <Button
          onPress={handleSubmit(onSignInPress)}
          disabled={isButtonDisabled}
        >
          Sign In
        </Button>
        <View className="flex-row space-x-1 mx-auto">
          <Text className="text-gray-500">Don't have an account?</Text>
          <Link href="/sign-up">
            <Text className="text-sky-600 font-medium">Sign up</Text>
          </Link>
        </View>
      </View>
    </View>
  );
}
