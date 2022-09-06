<template>
    <div class="add">
        <h1>Add a expense</h1>
        <div class="add__form">
            <div>
                <p>Insert a name for the expense</p>
                <input type="text" v-model="name">
            </div>
            <div>
                <p>Select a category</p>
                <select name="category" v-model="category">
                    <option value="health">Health</option>
                    <option value="essentials">Essentials</option>
                    <option value="entertainment">Entertainment</option>
                </select>
            </div>
            <div>
                <p>Price</p>
                <input type="number" min="0" v-model="price"/>
            </div>
            <div>
                <p>Select the type of account that will be debited</p>
                <select name="account" v-model="account">
                    <option value="wallet">Wallet</option>
                    <option value="debitcard">Debit Card</option>
                </select>
            </div>
            <button @click="addExpense">+ ADD EXPENSE</button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            price: null,
            category: null,
            name:null,
            account:null
        }
    },
    methods:{
        addExpense(){
            if(this.$store.state.walletBalance < this.price || this.$store.state.card.balance < this.price){
                window.alert("Your account don't have the necessary funds! Look out!")
            }
            else if (this.price == null || this.category == null 
            || this.name == null || this.account == null){
                window.alert('Fill all inputs to add a expense!')
            }else if(this.price < 0){
                window.alert("Can't insert negative price value!")
            }else{
                const expense = {
                    price: parseInt(this.price),
                    category: this.category,
                    name:this.name,
                    account: this.account
                }
                this.$store.dispatch('checkAccount',{expOrFund: expense})
                Object.assign(this.$data, this.$options.data.apply(this))
            }
        }
    }
}
</script>

<style lang="scss">
@import '../assets/add.scss';
</style>