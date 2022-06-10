import {Text} from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import RecentExpenses from './RecentExpenses';

function AllExpenses() {
    return <ExpensesOutput expensesPeriod="All time"/>
}

export default AllExpenses;