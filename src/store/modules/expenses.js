export default {
    namespaced:true,
    state:{
        expenses:[
            {
                name:'health',
                historic:[
                    {
                        name: "Medicines",
                        price: 60
                    },
                ],
            },
            {
                name:'essentials',
                historic:[
                    {
                        name: "Civic 98 Stage 3 Project",
                        price: 20000
                    },
                ],
            },
            {   
                name:'entertainment',
                historic:[
                {
                    name: "Shopping",
                    price: 300
                },
                {
                    name: "Cinema",
                    price: 100
                },
                ]
            }
        ],
        walletBalance:2331
    },
    getters:{
        getExpense: (state) => (index) => {
            return state.expenses[index].historic
        }
    },
    mutations:{
        addExpense(state, {expense}){   
            if(expense.account == 'wallet'){
                state.walletBalance -= expense.price
            }
            const filter = state.expenses.find(elem => elem.name == expense.category)
            const indexOfFilter = state.expenses.indexOf(filter)
            state.expenses[indexOfFilter].historic.push({price: expense.price, name: expense.name})
            localStorage.setItem('expenses', JSON.stringify(state.expenses))
            localStorage.setItem('walletBalance', JSON.stringify(state.walletBalance))
        },
        addFundsToWallet(state, value){
            state.walletBalance += value
            localStorage.setItem('walletBalance', JSON.stringify(state.walletBalance))
        }
    },
    actions:{
        initialiseStore({state, rootState}){
            if(localStorage.getItem('expenses') && localStorage.getItem('walletBalance')){
                state.expenses = JSON.parse(localStorage.getItem('expenses'))
                state.walletBalance = JSON.parse(localStorage.getItem('walletBalance'))
                rootState.card.balance = JSON.parse(localStorage.getItem('cardBalance'))
            }
        }
    }
}