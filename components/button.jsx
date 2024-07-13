import { camelCase } from "change-case";
import { Image } from "expo-image";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

const icons = {
  google: require("../assets/icon/google.svg"),
  facebook: require("../assets/icon/facebook.svg"),
};

export const Button = ({
  onPress,
  disabled,
  children,
  style = {},
  variant = "filled",
  leftIcon,
  loading,
}) => {
  const buttonVariantStyle = styles[camelCase(`button-${variant}`)];
  const textVariantStyle = styles[camelCase(`text-${variant}`)];

  const loadingColor = variant === "filled" ? "#ffffff" : "#0ea5e9";

  return (
    <TouchableOpacity
      style={[
        styles.button,
        buttonVariantStyle,
        disabled && styles.buttonDisabled,
        style,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      {leftIcon && !loading && (
        <Image source={icons[leftIcon]} style={styles.leftIcon} />
      )}
      {loading && (
        <ActivityIndicator style={styles.leftIcon} color={loadingColor} />
      )}
      <Text style={[styles.text, textVariantStyle]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 16,
  },
  buttonFilled: {
    backgroundColor: "#0ea5e9",
  },
  buttonOutline: {
    backgroundColor: "transparent",
    borderColor: "#0ea5e9",
    borderWidth: 1,
  },
  buttonDisabled: {
    backgroundColor: "#94a3b8",
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  textFilled: {
    color: "#ffffff",
  },
  textOutline: {
    color: "#0ea5e9",
  },
  leftIcon: {
    marginRight: 8,
    height: 20,
    width: 20,
  },
});
