<template>
  <main class="h-100 bg-login">
    <div class="db tc pt4">
      <div class="bg-white dib pa5 mt3 ba b--black-10 br3 cust-shadow">
          <div>
            <router-link to="/" tag="div" class="pointer">
              <img class="w-100" src="../assets/logo-blue.svg" alt="">              
            </router-link>
            <div class="dt w-100 f6 fw4 black-20 mt4">
                <div class="dtc pointer pb2 bb bw1 b--black-10" :class="{ active: component=='create' }" @click="component='create'">创建钱包</div>
                <div class="dtc pointer pb2 bb bw1 b--black-10" :class="{ active: component=='importKeystore' }" @click="component='importKeystore'">导入钱包</div>
            </div>
            <keep-alive>
                <component :is="component"></component>
            </keep-alive>
          </div>
      </div>
    </div>
  </main>
</template>

<script>
import create from  "./create.vue"
import importKeystore from  "./importKeystore.vue"

export default {
  data(){
      return {
          component: this.$route.params.type
      }
  },
  components: {
      create : create,
      importKeystore : importKeystore
  }
}
</script>

<style scoped>
.bg-login{
  background-color: #F9F9F9;
}
.cust-shadow{
  box-shadow: 0 0 20px 0 rgba(224,229,234,0.50);
}

.active{
  color: #007BFF;
  border-color: #007BFF;
}
</style>
