import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Image } from "expo-image";
import { RecentTransactions } from "../../../screen-components/(app)/(tabs)/index/transactions";
import { CurrentMonthExpense } from "../../../screen-components/(app)/(tabs)/index/chart";

const HEADER_NAVIGATION = [
  {
    text: "Send",
    icon: require("../../../assets/icon/send.svg"),
  },
  {
    text: "Request",
    icon: require("../../../assets/icon/request.svg"),
  },
  {
    text: "In & Out",
    icon: require("../../../assets/icon/transfer.svg"),
  },
  {
    text: "QR Code",
    icon: require("../../../assets/icon/qr.svg"),
  },
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../../assets/pattern/circular.svg")}
          style={styles.pattern}
        />
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceTitle}>Your Balance</Text>
          <View style={styles.balanceRow}>
            <Text style={styles.balanceAmount}>$24,321.900</Text>
            <Image
              source={require("../../../assets/icon/hide.svg")}
              style={styles.hideIcon}
            />
          </View>
        </View>
        <View style={styles.bellContainer}>
          <Image
            source={require("../../../assets/icon/bell.svg")}
            style={styles.bellIcon}
          />
          <View style={styles.notificationDot}>
            <Text style={styles.notificationDotText}>2</Text>
          </View>
        </View>
      </View>

      <View style={styles.actionRow}>
        {HEADER_NAVIGATION.map((item) => (
          <TouchableOpacity key={item.text} style={styles.actionButton}>
            <View style={styles.actionIconContainer}>
              <Image source={item.icon} style={styles.actionIcon} />
            </View>
            <Text style={styles.actionText}>{item.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <CurrentMonthExpense />
      <RecentTransactions />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray50,
  },
  header: {
    backgroundColor: colors.blue600,
    padding: 20,
    paddingTop: 80,
    paddingBottom: 150,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
  },
  pattern: {
    width: 320,
    height: 320,
    position: "absolute",
    top: 0,
    right: 0,
  },
  balanceContainer: {
    flex: 1,
  },
  balanceTitle: {
    color: "white",
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "500",
  },
  balanceRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  balanceAmount: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 10,
  },
  hideIcon: {
    width: 20,
    height: 20,
  },
  bellContainer: {
    backgroundColor: colors.white,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  bellIcon: {
    width: 24,
    height: 24,
  },
  notificationDot: {
    backgroundColor: colors.red500,
    borderRadius: 100,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: -4,
    right: -4,
    padding: 2,
  },
  notificationDotText: {
    color: colors.white,
    width: 16,
    textAlign: "center",
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 20,
    marginTop: -120,
    paddingHorizontal: 10,
  },
  actionButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  actionIconContainer: {
    backgroundColor: colors.blue500,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
  },
  actionIcon: {
    width: 26,
    height: 26,
  },
  actionText: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "500",
    color: colors.white,
  },
});
