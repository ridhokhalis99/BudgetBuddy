import { StyleSheet, View } from "react-native";
import { Tabs } from "expo-router";
import colors from "../../../constants/colors";
import CustomIcon from "../../../components/custom-icon";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.blue500,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => (
            <CustomIcon name="home" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="report"
        options={{
          tabBarIcon: ({ color }) => (
            <CustomIcon name="report" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="qr"
        options={{
          tabBarIcon: () => (
            <View style={styles.qrIcon}>
              <CustomIcon name="qr" size={28} color={colors.white} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="statistic"
        options={{
          tabBarIcon: ({ color }) => (
            <CustomIcon name="statistic" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          tabBarIcon: ({ color }) => (
            <CustomIcon name="account" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    marginRight: 20,
    marginLeft: 20,
    position: "absolute",
    bottom: 24,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 0,
    borderTopWidth: 0,
    shadowColor: "#44577B",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  qrIcon: {
    backgroundColor: colors.blue500,
    padding: 18,
    borderRadius: 100,
  },
});
