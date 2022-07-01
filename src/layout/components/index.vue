<template>
  <div>
    <img src="../../assets/猫.jpeg" alt="">
    <h1 class="sidebar-title">universal</h1>
    <sidebar-menu></sidebar-menu>
  </div>
</template>

<script setup>
import SidebarMenu from './SidebarMenu'
</script>

<style lang="scss" scoped>
.sidebar-title {
  text-align: center;
  padding: 15px 0;
  font-size: 22px;
  color: #fff;
}
img{
  width: 30px;
  height: 30px;
  position: fixed;
  padding-left: 22px;
  padding-top: 13px;
}
</style>
