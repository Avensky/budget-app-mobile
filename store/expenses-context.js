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
    setExpenses: (expenses)=>{},
    deleteExpense: (id) => {},
    updateExpense: (id, {title, amount, date}) => {}
})

function expensesReducer(state, action){
    switch( action.type){
        case 'ADD':
            return [{ ...action.payload}, ...state]
        case 'SET':
            const inverted = action.payload.reverse();
            return inverted;
        case 'UPDATE':
            // console.log('state: ', state)
            // const updateableExpenseIndex = state.findIndex((expense)=> {
            //     console.log('expense: ', expense)
            //     console.log('expense.id: ', expense.id)
            //     console.log('action.payload.id: ', action.payload.id)
            //     expense.id == action.payload.id
            // });
            // console.log('updateableExpenseIndex: ', updateableExpenseIndex)
            // const updateableExpense = state[updateableExpenseIndex]
            // console.log('updateableExpense: ', updateableExpense)
            //const updatedItem = {...updateableExpense, ...action.payload.data}
            //console.log('updatedItem: ', updatedItem)
            //const updatedExpenses = [...state];
            let updatedExpenses = [...state];
            //console.log('updatedExpenses: ', updatedExpenses)
            // updatedExpenses[updateableExpenseIndex] = updatedItem;
            // console.log('updatedExepenses: ', updatedExpenses)

            updatedExpenses = updatedExpenses.map(expense => expense.id !== action.payload.id ? expense: {key:expense.id, id:action.payload.id, ...action.payload.data})

            return updatedExpenses
        case 'DELETE':
            return state.filter((expense) => expense.id !== action.payload)
        default:
            return state;
    }
}

function ExpensesContextProvider({children}) {
    const [expensesState, dispatch ] = useReducer(expensesReducer, []);

    function addExpense(expenseData) {
        dispatch({ type: 'ADD', payload: expenseData });
    }

    function setExpenses(expenses) {
        dispatch({ type: 'SET', payload: expenses});
    }
    function deleteExpense(id) {
        dispatch({ type: 'DELETE', payload: id });
    }
    function updateExpense(id, expenseData) {
        //console.log('update Expense: ', id)
        dispatch({ type: 'UPDATE', payload: {id: id, data: expenseData} });
    }
    const value = {
        expenses: expensesState,
        addExpense: addExpense,
        setExpenses: setExpenses,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense,
    };

    return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>
}

export default ExpensesContextProvider;