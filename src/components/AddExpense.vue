<template>
    <div>
        <h1>Add a expense</h1>
        <p>Insert a name for the expense</p>
        <input type="text" v-model="name">
        <p>Select a category</p>
        <select name="category" v-model="category">
            <option value="health">Health</option>
            <option value="essentials">Essentials</option>
            <option value="entertainment">Entertainment</option>
        </select>
        <p>Price</p>
        <input type="number" v-model="price">
        <button @click="addExpense">+ ADD EXPENSE</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            price: null,
            category: null,
            name:null
        }
    },
    methods:{
        addExpense(){
            const expense = {
                price: parseInt(this.price),
                category: this.category,
                name:this.name
            }
            this.$store.commit('expenses/addExpense',{expense})
        }
    }
}
</script>

<style>

</style>