<!--  -->
<template>
  <div>
    会员等级 ID={{this.$route.params.id}}
  </div>
</template>

<script>
import { fromByteArray } from 'ipaddr.js';

export default {
beforeRouteEnter:(to,from,next)=>{
  console.log( "进入会员等级页面")
  next(vm=>{

  });
},
beforeRouteLeave:(to,from,next)=>{
 console.log( "离开会员等级页面")
 next();
},
}

</script>

<style lang='stylus' scoped>

</style>
