<template>
  <div class="app">
    <h1>Hello App!</h1>
    <p>
      <!-- use the router-link component for navigation. -->
      <!-- specify the link by passing the `to` prop. -->
      <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->
      <router-link to="/">Go to Home</router-link>
      <router-link to="/about">Go to About</router-link>
    </p>
    <!-- route outlet -->
    <!-- component matched by the route will render here. -->
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent } from "vue";
</script>

<style scoped lang="less"></style>
