<template>
  <div class="home flex-col-center">
    <h1>Home根组件---{{ homecount }}</h1>
    <div>{{userinfo}}</div>
    <div>
      <button @click="changeMsg()">changeMsg</button>
      <button @click="changeInfo()">changeInfo</button>
      </div>
    <div class="flex-center">
      <Left :homecount="homecount" :msg="msg" :userinfo="userinfo"></Left>
      <Right @addNumber="getNumber"></Right>
    </div>
    <div class="block-col-center"><button @click="getBookList">请求</button></div>
    <div>{{ bookList }}</div>
  </div>
</template>

<script>
import axios from 'axios'

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
      msg: '你好啊！',
      bookList: [],
      comNamer: 'Right'
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
    },
    async getBookList() { // async异步
      // axios 调用后返回一个 Promise实例，可以调用async/await来取值
      // 解构赋值，‘：’ 将解构后的data赋值给res
      const { data: res } = await axios.get('http://www.liulongbin.top:3006/api/getbooks')
      console.log('getdata')
      console.log(res.data)
      this.bookList = res.data
    },
    gotoComp(){
      this.$router.push('/comp')
    }
  }
}
</script>

<style lang="less">
div[class$="container"] {
  float: left;
  width: 400px;
}
.flex-center{
  display: flex;
  justify-content: center;
  align-items: center;
}
.flex-col-center{
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-items: center;
}
</style>