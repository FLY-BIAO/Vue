<template>
  <div class="left-container">
      <h3>Left 组件---{{count}}</h3>
      <p>父组件的count是: {{ homecount }}</p>
      <p>父组件的msg是: {{ msg }}</p>
      <p>父组件的userinfo是: {{ userinfo }}</p>
      <button @click="add()">+1</button>
  </div>
</template>

<script>
export default {
    name: 'left',
    props: ['msg', 'userinfo', 'homecount'],
    data() {
        return {
            count: 0
        }
    },
    methods: {
        add() {
            this.count++;
        }
    }
}
</script>

<style lang="less">
.left-container {
    padding: 0 20px 20px;
}
</style>