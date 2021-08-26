<template>
    <div class="right-container">
        <h3>Right 组件---{{count}}</h3>
        <button @click="add()">+1</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count:2,
        }
    },
    methods: {
        add(){
            this.count++
            this.$emit('addNumber', this.count)
        }
    }
}
</script>

<style>
.right-container {
    padding: 0 20px 20px;
}
</style>