<template>
    <div class="addexpense">
        <h1>Add a expense</h1>
        <div class="addexpense__form">
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
                    <option value="creditcard">Credit Card</option>
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
            }
            else{
                const expense = {
                    price: parseInt(this.price),
                    category: this.category,
                    name:this.name,
                    account: this.account
                }
                this.$store.dispatch('checkAccount',{expense})
                Object.assign(this.$data, this.$options.data.apply(this))
            }
        }
    }
}
</script>

<style lang="scss">
.addexpense{
    grid-column-start: 1;
    grid-column-end: 4;
    height: 100%;
    margin-bottom: 1rem;
    
    &__form{
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-items: start;
        align-items: end;
        gap: 1.5rem;

        input, select{
            width: 15rem;
            height: 2.5rem;
            padding: .6rem;
        }
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
        }

    }

    button{
        background-color: #293366;
        color: #fff;
        padding: 1rem;
        border-radius: 1rem;
        outline: 0;
        border: 0;
        transition: all ease .5s;
        &:hover{
            background-color: #344180;
            transform: scale(1.05);
        }
    }
}

@media screen and (max-width: 600px) {
  .addexpense__form{
    grid-template-columns: 1fr;
  }
}
</style>