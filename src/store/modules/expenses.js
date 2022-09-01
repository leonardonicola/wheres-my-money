export default {
    namespaced:true,
    state:{
        expenses:[
            {
                name:'health',
                historic:[],
                budget:200
            },
            {
                name:'essentials',
                historic:[],
                budget:200
            },
            {   
                name:'entertainment',
                budget:300,
                historic:[
                {
                    name: "Comprinhas no shopping"
                    ,price: 1200
                },
                ]
            }
        ]
    },
    getters:{
        get_health(state){
            return state.expenses[0]
        },
        get_entertainment(state){
            return state.expenses[2]
        },
        get_essentials(state){
            return state.expenses[1]
        }
    },
    mutations:{
        addExpense(state,{expense}){
            const filter = state.expenses.find(elem => elem.name == expense.category)
            const indexOfFilter = state.expenses.indexOf(filter)

            state.expenses[indexOfFilter].historic.push({price: expense.price, name: expense.name})
        }
    }
}