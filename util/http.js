import axios from 'axios';
const BASE_URL = 'http://192.168.1.13:5000'

export function storeExpense(expenseData) {
    axios.post(BASE_URL+'/api/newExpense', expenseData)
}