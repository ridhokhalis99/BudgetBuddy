import React from "react";
import { useStorageState } from "../hooks/storage-state";
import { Redirect } from "expo-router";

const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useStorageState("user", null);

  if (!user) return <Redirect to="/sign-in" />;

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return React.useContext(AuthContext);
}
