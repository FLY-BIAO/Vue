<template>
  <div class="box">
    <!-- 动态组件 -->
    <!-- componet标签是vue内置的,作用:组件的占位符 -->
    <!-- is属性的值,表示要渲染的组件的名字 -->
    <!-- is属性的值,应该是组件在components节点下的注册名称 -->
    <button @click="comName='Right'">Right</button>
    <button @click="comName='Left'">Left</button>
    <!-- keep-alive 可以把内部的组件进行缓存，而不是销毁组件 -->
    <!-- keep-alive 有include属性和exclude属性，同时只能用一个 -->
    <keep-alive include="Right">
      <component :is="comName"></component>
    </keep-alive>
  </div>
</template>

<script>
import Right from '@/components/Right'
import Left from '@/components/Left'
export default {
  // 组件自带的name属性名称，就是挂载上去后vue-devtools上显示的名称
  name: 'Comp',
  components:{
    // 注册名称，代码内以标签形式使用的，但是在vue-devtools上显示的是Right组件内定义的name属性。
    // 在keep-alive 的include和exclude中，需要输入的是组件的name属性，而不是注册名称。
    Right,
    Left
    },
  data() {
    return {
      comName: 'Right'
    }
  },
}
</script>

<style>

</style>