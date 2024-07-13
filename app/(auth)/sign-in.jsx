import React, { useMemo, useCallback, useState } from "react";
import { useSignIn, useOAuth } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import { Text, View } from "react-native";
import { TextInput } from "../../components/text-input";
import { Image } from "expo-image";
import { useForm } from "react-hook-form";
import { Button } from "../../components/button";
import * as Linking from "expo-linking";

export default function SignIn() {
  const [loading, setLoading] = useState("");
  const { signIn, setActive, isLoaded } = useSignIn();
  const { startOAuthFlow: startOAuthFlowGoogle } = useOAuth({
    strategy: "oauth_google",
  });
  const { startOAuthFlow: startOAuthFlowFacebook } = useOAuth({
    strategy: "oauth_facebook",
  });

  const router = useRouter();
  const useFormObj = useForm();
  const { handleSubmit, watch } = useFormObj;

  const isButtonDisabled = useMemo(() => {
    const { email, password } = watch();
    return !email || !password;
  }, [watch()]);

  const onSignInPress = useCallback(
    async (data) => {
      const { email, password } = data;
      if (!isLoaded) {
        return;
      }
      try {
        setLoading("sign_in");
        const signInAttempt = await signIn.create({
          identifier: email,
          password,
        });

        if (signInAttempt.status === "complete") {
          await setActive({ session: signInAttempt.createdSessionId });
          router.replace("/(app)/(tabs)");
        } else {
          console.error(JSON.stringify(signInAttempt, null, 2));
        }
      } catch (err) {
        console.error(JSON.stringify(err, null, 2));
      }
      setLoading("");
    },
    [isLoaded]
  );

  const onPressGoogle = useCallback(async () => {
    try {
      setLoading("google");
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlowGoogle({
          redirectUrl: Linking.createURL("/dashboard", { scheme: "myapp" }),
        });

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
    setLoading("");
  }, [startOAuthFlowGoogle]);

  const onPressFacebook = useCallback(async () => {
    try {
      setLoading("facebook");
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlowFacebook({
          redirectUrl: Linking.createURL("/dashboard", { scheme: "myapp" }),
        });

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
    setLoading("");
  }, [startOAuthFlowFacebook]);

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
            placeholder="e.g., budget@buddy.com"
            style={{ marginTop: 0 }}
          />
          <TextInput
            useFormObj={useFormObj}
            name="password"
            label="Password"
            placeholder="e.g., ********"
            isPassword
          />
        </View>
        <Button
          onPress={handleSubmit(onSignInPress)}
          disabled={isButtonDisabled}
          loading={loading === "sign_in"}
        >
          Sign In
        </Button>
        <View className="flex-row items-center">
          <View className="flex-1 h-px bg-gray-300" />
          <View>
            <Text className="w-12 text-center text-gray-500">Or</Text>
          </View>
          <View className="flex-1 h-px bg-gray-300" />
        </View>
        <View>
          <View>
            <Button
              onPress={onPressGoogle}
              variant="outline"
              color="sky-500"
              leftIcon="google"
              style={{ marginTop: 0 }}
              loading={loading === "google"}
            >
              Sign in with Google
            </Button>
          </View>
          <View>
            <Button
              onPress={onPressFacebook}
              variant="outline"
              color="facebook-500"
              leftIcon="facebook"
              loading={loading === "facebook"}
            >
              Sign in with Facebook
            </Button>
          </View>
        </View>
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
