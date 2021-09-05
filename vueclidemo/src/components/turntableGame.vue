<template>
  <div>
    <div class="dial-animate-wrap flex-center">
      <div class="wheel-wrapper">
        <div class="wheel-bg" :style="`transform: rotate(${wheelDeg}deg)`">
          <div class="prize-list">
            <div class="prize-item-wrapper" v-for="(item,index) in prizeList" :key="index">
              <div class="prize-item" :style="`transform: rotate(${(360/ prizeList.length) * index}deg)`">
                <p style="height:36px"></p>
                <img style="width:40px;height:30px" :src="item.icon">
                <p class="prize-item-reward">{{item.reward}}</p>
                <div v-if="item.name" class="prize-name font-mini">{{ item.name }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="dial-run flex-col-center"></div>
      <div class="run-btn" @click="onClickRotate"></div>
    </div>
  </div>
</template>
<script>
import { getDraw, getStart } from '../axios'
export default {
  data () {
    return {
      rolling: false,  // 锁
      wheelDeg: 0,     // 旋转总deg
      prizeNumber: 6,  // 总格子数
      random:2,        // 中奖格子数
      prizeListOrigin: [
        {
          icon: "https://picsum.photos/40?random=6",
          reward: "谢谢参与",
          award_id: false,
        },
        {
          icon: "https://picsum.photos/40?random=1",
          reward:'二等奖',
          name: "UMATE USE3.1",
          award_id: 2,
        },
        {
          icon: "https://picsum.photos/40?random=6",
          reward: "谢谢参与",
          award_id: false,
        },
        {
          icon: "https://picsum.photos/40?random=2",
          reward:'一等奖',
          name: "UMATE USE3.1",
          award_id: 1,
        },
        {
          icon: "https://picsum.photos/40?random=3",
          reward: "谢谢参与",
          award_id: false,
        },
        {
          icon: "https://picsum.photos/40?random=6",
          reward:'三等奖',
          name: "UMATE USE3.1",
          award_id: 3,
        }
      ],
    }
  },
  props: {
    httpData: {}, // 接口调用所需参数
    stateData: {
      type: Object,
      default: () => {
        return {
          prize_img: '' // 转盘图片
        }
      }
    }
  },
  created(){
    var awardsList = JSON.parse(sessionStorage.getItem('awards'))
    if(!awardsList){
      getStart().then(res=>{
        if(res.code==200){
          sessionStorage.setItem('awards', JSON.stringify(res.data.awards));
          awardsList = res.data.awards
        }
      })
    }
    var thank = {
      icon: "https://picsum.photos/40?random=6",
      reward: "谢谢参与",
      award_id: false,
    }
    if(awardsList){
      this.prizeListOrigin = []
      awardsList.forEach(a => {
        this.prizeListOrigin.push(thank)
        this.prizeListOrigin.push(a)
      });
      
    }
  },
  watch: {
    prizeNumber() {
      this.wheelDeg = 0
    }
  },
  computed: {
    prizeList() {
      return this.prizeListOrigin.slice(0, this.prizeNumber)
    }
  },
  methods: {
    onClickRotate() {
      if (this.rolling) return;
      getDraw().then(res=>{
        this.rolling = true
        if(res.code && res.data.award){
          this.prizeListOrigin.some((a,i)=>{
            if(a.award_id == res.data.award){
              this.random = i
              return true
            }
          })
        }else{
          let thankYou = [0,2,4]
          this.random = thankYou[Math.ceil(Math.random()*2)]
        }
        const {wheelDeg, prizeList} = this;
        this.wheelDeg = wheelDeg - wheelDeg % 360 + 6 * 360 + (360 - 360 / prizeList.length * this.random);
        setTimeout(() => {
          this.rolling = false;
          this.$emit('draw_fin', this.prizeListOrigin[this.random]);
        }, 4500);
      })
    },
  }
}
</script>
<style scoped lang="less">
.prize-item-reward{
  font-size: 12px;
  color: #F45C43;
  font-weight: 700;
  margin-top: 3px;
}
.wheel-wrapper {
  width: 330px;
  height: 330px;
}
.wheel-bg {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  transition: transform 4s ease-in-out;
  background: url('../assets/img/dial.png') no-repeat;
  background-size: 100% 100%;
}
.prize-list {
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
}
.prize-item-wrapper {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 175px;
  height: 164px;
}
.prize-item {
  width: 100%;
  height: 100%;
  transform-origin: bottom;
}
.prize-name {
  color: #F45C43;
  transform: scale(0.8);
}

.run-btn{
  width: 90px;
  height: 90px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: -12px;
  margin: auto;
}
.dial-animate-wrap{
  width: 90%;
  height: 100%;
  position: relative;
  overflow: unset;
  .dial-run{
    width: 176px;
    height: 226px;
    background: url('../assets/img/pointer-btn.png') no-repeat;
    background-size: 100% 100%;
    position: absolute;
    top: -7px;
    margin: auto;
    text-align: center;
  }
}
</style>