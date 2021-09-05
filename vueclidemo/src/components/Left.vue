<template>
  <div class="left-container">
      <h3>Left 组件---{{count}}</h3>
      <p>父组件的count是: {{ homecount }}</p>
      <p>父组件的msg是: {{ msg }}</p>
      <p>父组件的userinfo是: {{ userinfo }}</p>
      <button @click="add()">+1</button>

      <button @click="sendmsg">发送msg"黑云压城城欲摧，甲光向日金鳞开"</button>
  </div>
</template>

<script>
import bus from './eventBus.js'

export default {
    name: 'Left',
    props: ['msg', 'userinfo', 'homecount'],
    data() {
        return {
            count: 0,
            mymsg: '黑云压城城欲摧，甲光向日金鳞开'
        }
    },
    methods: {
        add() {
            this.count++;
        },
        sendmsg() {
            bus.$emit('msg', this.mymsg)
        }
    }
}
</script>

<style lang="less">
.left-container {
    padding: 0 20px 20px;
    background: orange;
}
</style>