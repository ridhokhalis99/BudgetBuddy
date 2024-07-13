import { View, Text, Image } from "react-native";
import { StyleSheet } from "react-native";
import { formatDate } from "../../../../functions/date";
import { formatCurrency } from "../../../../functions/number";
import CustomIcon from "../../../../components/custom-icon";
import colors from "../../../../constants/colors";

const DUMMY_DATA = [
  {
    id: 1,
    title: "Dividen BIRD",
    amount: 400_000,
    category: "investment",
    date: new Date(),
    isExpense: false,
    color: "green",
  },
  {
    id: 2,
    title: "Github Copilot",
    amount: 165_372,
    category: "bill",
    date: new Date(),
    isExpense: true,
    color: "blue",
  },
  {
    id: 3,
    title: "Klinik Kopi",
    amount: 88_000,
    category: "food",
    date: new Date(),
    isExpense: true,
    color: "rose",
  },
  {
    id: 3,
    title: "Biznet",
    amount: 475_000,
    category: "bill",
    date: new Date(),
    isExpense: true,
    color: "blue",
  },
];

const TransactionIcon = ({ category, color }) => {
  return <CustomIcon name={category} size={24} color={color} />;
};

const TransactionItem = ({
  title,
  amount,
  date,
  category,
  isExpense,
  color,
}) => {
  const amountStyle = isExpense ? styles.expenseAmount : styles.incomeAmount;

  return (
    <View style={styles.transactionItem}>
      <View
        style={[
          styles.categoryIconContainer,
          { backgroundColor: colors[`${color}200`] },
        ]}
      >
        <TransactionIcon category={category} color={colors[`${color}600`]} />
      </View>
      <View style={styles.titleDateContainer}>
        <Text style={styles.transactionItemTitle}>{title}</Text>
        <Text style={styles.transactionDate}>{formatDate(date)}</Text>
      </View>
      <Text style={[styles.transactionItemAmount, amountStyle]}>
        {isExpense ? "-" : "+"} {formatCurrency(amount)}
      </Text>
    </View>
  );
};

export const RecentTransactions = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Recent Transactions</Text>
        <Image
          source={require("../../../../assets/icon/chevron-right.svg")}
          style={styles.chevronIcon}
        />
      </View>
      <View style={styles.transactionItemsContainer}>
        {DUMMY_DATA.map((item, index) => {
          const isLastItem = index === DUMMY_DATA.length - 1;

          return (
            <>
              <TransactionItem key={item.id} {...item} />
              {!isLastItem && <View style={styles.horizontalLine} />}
            </>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 10,
  },
  chevronIcon: {
    width: 8,
    height: 12,
  },
  transactionItemsContainer: {
    marginTop: 20,
    borderRadius: 12,
    backgroundColor: colors.white,
    padding: 20,
  },
  horizontalLine: {
    height: 1,
    backgroundColor: colors.gray100,
    marginVertical: 10,
  },
  transactionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  transactionItemTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.gray700,
  },
  transactionDate: {
    fontSize: 12,
    color: colors.slate500,
  },
  transactionItemAmount: {
    fontSize: 14,
    fontWeight: "500",
  },
  titleDateContainer: {
    flex: 1,
    gap: 4,
  },
  expenseAmount: {
    color: colors.red500,
  },
  incomeAmount: {
    color: colors.green500,
  },
  categoryIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
});
