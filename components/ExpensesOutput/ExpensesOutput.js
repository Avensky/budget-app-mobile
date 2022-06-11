import { View, Text, StyleSheet } from "react-native"
import ExpensesSummary from "./ExpensesSummary"
import ExpensesList from "./ExpensesList"
import { GlobalStyles } from "../../constants/styles"




function ExpensesOutput({expenses, expensesPeriod, fallbackText}) {
    let content = <Text style={styles.infoText}>{fallbackText}</Text>

    if (expenses.length > 0) {
        content = <ExpensesList expenses={expenses}/>
    }

    return (
    <View style={styles.contain}>
        <ExpensesSummary expenses={expenses} periodName= {expensesPeriod}/>
        {content}
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
    },
    infoText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 32
    }
})