
import { GET_BALANCE ,GET_BALANCE_INCOMES_TOTAL } from '../actions/balance';

export function balance(state={
    status: "ready",
    loadingText: "开始加载",
    balance: null,
    total: {
        todayTotal: 0,
        weekTotal: 0,
        monthTotal: 0,
    }
},action){
    switch(action.type) {
        case GET_BALANCE:
            return  Object.assign({},state,{balance: action.balance})
        case GET_BALANCE_INCOMES_TOTAL:
            return Object.assign({},state,{total: action.total})
        default:
            return state
    }
}