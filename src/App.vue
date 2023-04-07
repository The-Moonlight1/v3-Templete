<script setup></script>

<template>
  <div class="app">
    <h2>app</h2>
    <hr />
    <router-link to="/">home </router-link> |
    <router-link to="/about"> about</router-link>
    <router-view> </router-view>
  </div>
</template>

<style lang="less" scoped></style>
