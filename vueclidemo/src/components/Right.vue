<template>
    <div class="right-container">
        <h3>Right 组件---{{count}}</h3>
        <button @click="add()">+1</button>
        <h4>{{ msg }}</h4>
    </div>
</template>

<script>
import bus from './eventBus.js'

export default {
    name: 'Right',
    data() {
        return {
            count:2,
            msg: ''
        }
    },
    created() {
        bus.$on('msg',(res)=>{
            this.msg = res
        })
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
    background: skyblue;
}
</style>