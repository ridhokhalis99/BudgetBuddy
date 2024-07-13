import { sentenceCase } from "change-case";
import { useEffect } from "react";
import {
  View,
  Text,
  TextInput as TextInputRaw,
  StyleSheet,
} from "react-native";
import { Controller } from "react-hook-form";

export const TextInput = ({
  name = "",
  label: labelProp,
  placeholder,
  isPassword,
  style,
  useFormObj,
}) => {
  const { register, errors, control } = useFormObj;

  const label = labelProp || sentenceCase(name);

  useEffect(() => {
    register(name);
  }, [register, name]);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <View style={{ ...styles.container, ...style }}>
          <Text style={styles.label}>{label}</Text>
          <TextInputRaw
            autoCapitalize="none"
            placeholder={placeholder}
            onChangeText={onChange}
            value={value}
            style={styles.input}
            secureTextEntry={isPassword}
          />
        </View>
      )}
    ></Controller>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    gap: 8,
    marginTop: 12,
  },
  label: {
    fontFamily: "Inter",
    fontSize: 14,
    fontWeight: "500",
  },
  input: {
    width: "100%",
    backgroundColor: "white",
    borderColor: "#E6E6E6",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
});
