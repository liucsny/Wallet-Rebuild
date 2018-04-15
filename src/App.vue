<template>
  <div class="helvetica near-black h-100" id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,body{
    height: 100%;
    width: 100%;
}

.bg-dark{
  background-color: #1F2531;
}
</style>
