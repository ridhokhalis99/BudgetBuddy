import { camelCase } from "change-case";
import { Image } from "expo-image";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import colors from "../constants/colors";

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

  const loadingColor = variant === "filled" ? colors.white : colors.blue500;

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
    backgroundColor: colors.blue500,
  },
  buttonOutline: {
    backgroundColor: "transparent",
    borderColor: colors.blue500,
    borderWidth: 1,
  },
  buttonDisabled: {
    backgroundColor: colors.slate400,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  textFilled: {
    color: colors.white,
  },
  textOutline: {
    color: colors.blue500,
  },
  leftIcon: {
    marginRight: 8,
    height: 20,
    width: 20,
  },
});
