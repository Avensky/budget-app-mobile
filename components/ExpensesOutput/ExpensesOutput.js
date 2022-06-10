import { View, StyleSheet } from "react-native"
import ExpensesSummary from "./ExpensesSummary"
import ExpensesList from "./ExpensesList"
import { GlobalStyles } from "../../constants/styles"


const DUMMY_EXPENSES = [
    { id: 'e1',  title: 'BoA - 4235', amount: 100.00, owe: 1318.86, date: new Date(2022, 2, 12),},
    { id: 'e2',  title: 'Dell Finacial Services', amount: 60, date: new Date(2022, 1, 4) },
    { id: 'e3',  title: 'Car Insurance', amount: 251.18,date: new Date(2022, 1, 7),},
    { id: 'e4',  title: 'Rent',amount: 300.00,date: new Date(2022, 1, 1),},
    { id: 'e5',  title: 'Viz Media', amount: 1.99, date: new Date(2022, 0, 31) },
    { id: 'e6',  title: 'Microsoft', amount: 6.99, date: new Date(2022, 1, 1) },
    { id: 'e7',  title: 'Sprint', amount: 166.27, date: new Date(2022, 1, 3) },
    { id: 'e8',  title: 'Gas', amount: 50, date: new Date(2022, 1, 1) },
    { id: 'e9',  title: 'Amazon Web Services', amount: 21, date: new Date(2022, 1, 3) },
    { id: 'e10', title: 'Laundry', amount: 20, date: new Date(2022, 1, 1) },
    { id: 'e11', title: 'Gym', amount: 30, date: new Date(2022, 1, 1) },
    { id: 'e12', title: 'Misc', amount: 384.86, date: new Date(2022, 1, 1) }
  ]

function ExpensesOutput({expenses, expensesPeriod}) {
    return (
    <View style={styles.contain}>
        <ExpensesSummary expenses={DUMMY_EXPENSES} periodName= {expensesPeriod}/>
        <ExpensesList expenses={DUMMY_EXPENSES}/>
    </View>)
}

export default ExpensesOutput

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 40,
        backgroundColor: GlobalStyles.colors.primary700,
    }
})