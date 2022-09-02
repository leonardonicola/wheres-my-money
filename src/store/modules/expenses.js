export default {
    namespaced:true,
    state:{
        expenses:[
            {
                name:'health',
                historic:[],
            },
            {
                name:'essentials',
                historic:[],
            },
            {   
                name:'entertainment',
                historic:[
                {
                    name: "Shopping",
                    price: 1200
                },
                ]
            }
        ],
        walletBalance:23
    },
    getters:{
        getExpense: (state) => (index) => {
            return state.expenses[index].historic
        },
        walletFunds(state){
        return state.walletBalance
        }
    },
    mutations:{
        addExpense(state,{expense}){
            const filter = state.expenses.find(elem => elem.name == expense.category)
            const indexOfFilter = state.expenses.indexOf(filter)
            state.walletBalance -= expense.price
            state.expenses[indexOfFilter].historic.push({price: expense.price, name: expense.name})
        }
    }
}