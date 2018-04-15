<template>
  <div class="h-100 relative">
      <div class="mt4 cf">
        <small class="black-30 fw5 fl">请输入Keystore</small>
        <input type="file" class="dn" ref="pickFile" @change="onFilePicked" >
        <small class="black-30 fw4 fr pointer link underline-hover cust-blue" @click="onPickFile">从钱包文件导入</small>
      </div>
      <small v-show="textareaError" class="textareaErrorFont absolute f7">上传的钱包文件有误，请重新上传。</small>
      <textarea class="outline-0 w-100 mb2 mt2 br2 ba b--black-10 pa2 h4 f7 black-70 lh-title" :class="{ textareaErrorBorder:textareaError }" style="resize: none" v-text="keystore" @focus="textareaError = false"></textarea>
      <div class="w-100 cf">
        <small class="black-30 fw5 fl dib">请输入密码</small>
      </div>
      <div class="w-100 mb4 mt2 br2 ba b--black-10 pa2 flex items-center">
        <input class="outline-0 w-100 bn" :type="inputType">
        <i class="material-icons black-20 pointer fr relative icon-size" @mousedown="inputType='text'; visibility='visibility_off'" @mouseup="inputType='password'; visibility='visibility'" >{{visibility}}</i>
      </div>
      <button class="w-100 pa3 pointer br2 outline-0 cust-bg-blue white">导入钱包</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      inputType: "password",
      visibility: "visibility",
      textareaError: false,
      keystore: ""
    }
  },
  methods:{
    onPickFile(){
      this.$refs.pickFile.click()
    },
    onFilePicked(event){
      const file = event.target.files[0];
      console.log(file);
      
      if(file.size > 10000){
        this.textareaError = true;
        this.keystore = "";
        return
      }

      const fileReader = new FileReader();

      fileReader.addEventListener("load",()=>{      
        this.keystore = fileReader.result
      })
      fileReader.readAsText(file);

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

.cust-blue{
  color: #007BFF;
}
.icon-size{
    font-size: 1rem;
}

.textareaErrorFont{
  color: #FF5B52;
  top: 2rem;
  left: 0.6rem;
}
.textareaErrorBorder{
  border: #FF5B52 1px solid;
}
</style>