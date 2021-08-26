<template>
  <div class="home">
    <h1>Home根组件---{{ homecount }}</h1>
    <div>{{userinfo}}</div>
    <div>
      <button @click="changeMsg()">changeMsg</button>
      <button @click="changeInfo()">changeInfo</button>
      </div>
    <div style="width: 900px;margin:0 auto">
      <Left :homecount="homecount" :msg="msg" :userinfo="userinfo"></Left>
      <Right @addNumber="getNumber"></Right>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Left from '@/components/Left.vue'
import Right from '@/components/Right.vue'

export default {
  name: 'Home',
  data() {
    return {
      homecount: 1,
      userinfo: {
        name: '钰彪',
        age: 21
      },
      msg: '你好啊！'
    }
  },
  components: {
    Left,
    Right
  },
  methods: {
    changeMsg() {
      this.msg = this.msg=='Hello!'? '你好啊！' : 'Hello!';
    },
    changeInfo() {
      this.userinfo.name = this.userinfo.name=='YB'? '钰彪':'YB';
    },
    getNumber(val) {
      this.homecount = val
    }
  }
}
</script>

<style lang="less">
div[class$="container"] {
  float: left;
  width: 400px;
}

</style>