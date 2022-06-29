import axios from 'axios';
const BASE_URL = 'http://192.168.100.7:5000'

export async function storeExpense(expenseData) {
    const response = await axios.post(BASE_URL+'/api/newExpense', expenseData);
    //console.log('response _id: ',response.data._id)
    const id = response.data._id;
    return id
}

export async function fetchExpenses() {
    const response = await axios.get(BASE_URL+'/api/getExpenses')

    const expenses = [];
    console.log('fetchedExpenses: ', response.data)
    for (const key in response.data) {
        //console.log('key: ', key)
        const expenseObj = {
            //id: key,
            id: response.data[key]._id,
            amount: response.data[key].amount,
            date: new Date(response.data[key].date),
            description: response.data[key].description
        }
        expenses.push(expenseObj);
    }
    //console.log('expenses rebuilt: ', expenses)
    return expenses;
}

export function updateExpense(id, expenseData) {
    //console.log('http updateExpense id: ',id )
    return axios.post(BASE_URL + `/api/updateExpense/${id}`, expenseData);
}

export function deleteExpense(id) {
    const deleteExpense = axios.post(BASE_URL + `/api/deleteExpense/${id}`);
    return deleteExpense
}