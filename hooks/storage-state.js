import * as SecureStore from "expo-secure-store";
import { useCallback, useEffect, useState } from "react";

export async function setStorageState(key, value) {
  if (value === null) {
    await SecureStore.deleteItemAsync(key);
  } else {
    await SecureStore.setItemAsync(key, JSON.stringify(value));
  }
}

export function useStorageState(key, defaultValue) {
  const [state, setState] = useState(defaultValue);

  useEffect(() => {
    SecureStore.getItemAsync(key).then((value) => {
      if (value) {
        setState(JSON.parse(value));
      }
    });
  }, [key]);

  const setStorageState = useCallback(
    (value) => setStorageState(key, value),
    [key]
  );

  return [state, setStorageState];
}
