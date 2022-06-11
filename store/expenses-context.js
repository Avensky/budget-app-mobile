import { createContext, useReducer } from 'react';

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
    { id: 'e12', title: 'Misc', amount: 384.86, date: new Date(2022, 5, 10) }
  ]

export const ExpensesContext = createContext({
    expeses: [],
    addExpense: ({title, amount, date}) => {},
    deleteExpense: (id) => {},
    updateExpense: (id, {title, amount, date}) => {}
})

function expensesReducer(state, action){
    switch( action.type){
        case 'ADD':
            const id = new Date().toString()+Math.random().toString();
            return [{ ...action.payload, id: id }, ...state]
        case 'UPDATE':
            const updateableExpenseIndex = state.findIndex((expense)=> 
                expense.id===action.payload.id);
            const updateableExpense = state[updateableExpenseIndex]
            const updatedItem = {...updateableExpense, ...action.payload.data}
            const updatedExpenses = [...state];
            updatedExpenses[updateableExpenseIndex] = updatedItem;
            return updatedExpenses
        case 'DELETE':
            return state.filter((expense) => expense.id !== action.payload)
        default:
            return state;
    }
}

function ExpensesContextProvider({children}) {
    const [expensesState, dispatch ] = useReducer(expensesReducer, DUMMY_EXPENSES);

    function addExpense(expenseData) {
        dispatch({ type: 'ADD', payload: expenseData });
    }
    function deleteExpense(id) {
        dispatch({ type: 'DELETE', payload: id });
    }
    function updateExpense(id, expenseData) {
        dispatch({ type: 'UPDATE', payload: {id: id, data: expenseData} });
    }
    const value = {
        expenses: expensesState,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense,
    };

    return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>
}

export default ExpensesContextProvider;