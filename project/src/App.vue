<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">

@aa:100px;
div{
  width:@aa;
  height:100px;
  background:Red;
}
</style>
