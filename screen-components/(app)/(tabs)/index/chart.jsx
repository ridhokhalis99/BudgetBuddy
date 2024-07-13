import React from "react";
import { View, Text } from "react-native";
import { LineChart } from "react-native-gifted-charts";
import colors from "../../../../constants/colors";
import { formatCurrency } from "../../../../functions/number";

export const CurrentMonthExpense = () => {
  const ptData = [
    { value: 160, date: "1 Apr 2024" },
    { value: 180, date: "2 Apr 2024" },
    { value: 190, date: "3 Apr 2024" },
    { value: 180, date: "4 Apr 2024" },
    { value: 140, date: "5 Apr 2024" },
    { value: 145, date: "6 Apr 2024" },
    { value: 160, date: "7 Apr 2024" },
    { value: 200, date: "8 Apr 2024" },

    { value: 220, date: "9 Apr 2024" },
    {
      value: 240,
      date: "10 Apr 2024",
    },
    { value: 280, date: "11 Apr 2024" },
    { value: 260, date: "12 Apr 2024" },
    { value: 340, date: "13 Apr 2024" },
    { value: 385, date: "14 Apr 2024" },
    { value: 280, date: "15 Apr 2024" },
    { value: 390, date: "16 Apr 2024" },

    { value: 370, date: "17 Apr 2024" },
    { value: 285, date: "18 Apr 2024" },
    { value: 295, date: "19 Apr 2024" },
    {
      value: 300,
      date: "20 Apr 2024",
    },
    { value: 280, date: "21 Apr 2024" },
    { value: 295, date: "22 Apr 2024" },
    { value: 260, date: "23 Apr 2024" },
    { value: 255, date: "24 Apr 2024" },

    { value: 190, date: "25 Apr 2024" },
    { value: 220, date: "26 Apr 2024" },
    { value: 205, date: "27 Apr 2024" },
    { value: 230, date: "28 Apr 2024" },
    { value: 210, date: "29 Apr 2024" },
    {
      value: 200,
      date: "30 Apr 2024",
    },
    { value: 240, date: "1 May 2024" },
    { value: 250, date: "2 May 2024" },
    { value: 280, date: "3 May 2024" },
    { value: 250, date: "4 May 2024" },
    { value: 210, date: "5 May 2024" },
  ];

  return (
    <View
      style={{
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 16,
          fontWeight: "500",
        }}
      >
        Current Month Expense
      </Text>
      <View style={{ marginLeft: -32 }}>
        <LineChart
          areaChart
          curved
          hideAxesAndRules
          hideOrigin
          disableScroll
          data={ptData}
          width={350}
          hideDataPoints
          spacing={10}
          color="#007bff"
          thickness={2}
          startFillColor="rgba(0, 123, 255, 0.3)"
          endFillColor="rgba(0, 123, 255, 0.01)"
          startOpacity={0.9}
          endOpacity={0.2}
          initialSpacing={0}
          noOfSections={6}
          maxValue={600}
          yAxisColor="white"
          yAxisThickness={0}
          yAxisSide="right"
          xAxisColor="lightgray"
          pointerConfig={{
            pointerStripHeight: 160,
            pointerStripColor: colors.blue500,
            pointerStripWidth: 2,
            pointerColor: colors.blue500,
            radius: 6,
            pointerLabelWidth: 100,
            activatePointersOnLongPress: true,
            autoAdjustPointerLabelPosition: false,
            pointerLabelComponent: (items) => {
              return (
                <View
                  style={{
                    height: 60,
                    width: 100,
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 5,
                    backgroundColor: "#ffffff",
                    borderRadius: 8,
                  }}
                >
                  <Text
                    style={{
                      color: "#000",
                      fontSize: 12,
                      fontWeight: "500",
                      textAlign: "center",
                    }}
                  >
                    {items[0].date}
                  </Text>

                  <Text
                    style={{
                      fontWeight: "500",
                      textAlign: "center",
                      color: "#000",
                      fontSize: 12,
                    }}
                  >
                    {"Rp " + formatCurrency(items[0].value * 1000)}
                  </Text>
                </View>
              );
            },
          }}
        />
      </View>
    </View>
  );
};
