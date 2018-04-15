<template>
  <div class="h-100">
      <div class="mt4 cf">
        <small class="black-30 fw5 fl">请设置新钱包密码</small>
      </div>
      <div class="w-100 mb4 mt2 br2 ba b--black-10 pa2 flex items-center">
        <input class="outline-0 w-100 bn" :type="inputType">
        <i class="material-icons black-20 pointer fr relative icon-size" @mousedown="inputType='text'; visibility='visibility_off'" @mouseup="inputType='password'; visibility='visibility'" >{{visibility}}</i>
      </div>
      <button class="w-100 pa3 pointer br2 outline-0 cust-bg-blue white">创建钱包</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      inputType: "password",
      visibility: "visibility"
    }
  }
}
</script>

<style scoped>
.cust-bg-blue{
    background: #007BFF;
    border: 1px solid #1D65B3;
}

.cust-bg-blue:hover{
    background: rgb(25, 136, 255);
}

.cust-bg-blue:active{
    background: rgb(8, 114, 226);
}

.icon-size{
    font-size: 1rem;
}
</style>
