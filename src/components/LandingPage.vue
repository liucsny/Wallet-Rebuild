<template>
  <div class="white fw2 h-100 bg-dark">
    <main class="z-1 relative h-100">
      <app-nav></app-nav>
      <div class="w-100 mb6">
        <div class="mw9 center pt6 ph3 ph5-ns">
          <div class="pv2">Bring ethereum to all people</div>
          <div class="ttu f-title roboto"><span class="fw8">sparkle</span><span class="fw1"> wallet</span></div>
          <div class="mt3">
            <router-link :to="{ name: 'CreateWallet', params: { type: 'create' }}" class="dim mv2 link white dib tc v-mid br-pill cust-bg-blue cust-pv cust-ph mr3">新建钱包</router-link>
            <router-link :to="{ name: 'CreateWallet', params: { type: 'importKeystore' }}" class="dim mv2 link white dib tc v-mid br-pill cust-pv cust-ph ba cust-b--blue cust-bw1">导入钱包</router-link>
          </div>
        </div>
      </div>
      <footer class="pv4 ph2 ph3-m ph4-l white-40 fw2 absolute bottom-0 w-100">
        <small class="f7 db tc">© 2016 <span class="ttu ">CHAINDATA Inc</span>.  All Rights Reserved</small>
      </footer>
    </main>
    <div class="absolute top--2 z-0 w-100 o-90">
      <img class="dn db-ns w-90-l h-100 center" src="../assets/bg-landing.svg" alt="#">
      <img class="dn-l dn-m db w-100 h-100" src="../assets/bg-landing-small.svg" alt="#">
    </div>
  </div>  
</template>

<script>
import Nav from "./navbar"

export default {
  components:{
    "app-nav": Nav
  },
  created(){

  }
}
</script>

<style scoped>
.roboto{
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}
.f-title{
  font-size: 4.5rem;
}
.cust-pv{
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.cust-ph{
  padding-right: 2.6rem;
  padding-left: 2.6rem;
}

.cust-bg-blue{
  background: #007BFF;
}

.cust-b--blue{
  border-color: #007BFF;
}

.cust-bw1{
  border-width: .1rem;
}

#rect{
  transform-origin: 50% 50%;
}

#Triangle{
  transform: translate(40vw,70vh);
}

#Combined-Shape{
  transform: translate(54vw,50vh);
}

</style>
