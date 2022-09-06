<template>
    <div class="add">
        <h1>Add funds</h1>
        <div class="add__form">
            <div>
                <p>Value</p>
                <input type="number" min="0" v-model="value"/>
            </div>
            <div>
                <p>Select the type of account that will be added</p>
                <select name="account" v-model="account">
                    <option value="wallet">Wallet</option>
                    <option value="debitcard">Debit Card</option>
                </select>
            </div>
            <button @click="addFunds">+ ADD FUNDS</button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            value: null,
            account:null
        }
    },
    methods:{
        addFunds(){
            if(this.value < 0){
                window.alert("Can't insert a negative value")
            }
            else if (this.value == null || this.account == null){
                window.alert('Fill all inputs to add a funds!')
            }else{
                const fund = {
                    value: parseInt(this.value),
                    account: this.account
                }
                this.$store.dispatch('checkAccount',{expOrFund: fund})
                Object.assign(this.$data, this.$options.data.apply(this))
            }
        }
    }
}
</script>

<style lang="scss">
@import '../assets/add.scss';
</style>