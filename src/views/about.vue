<template>
  <div class="about">这是关于页面</div>
</template>

<script>
import { defineComponent } from "vue";
import LinkedList from "../algorithm/data-structures/linked-list/LinkedList";
export default defineComponent({
  setup() {
    console.log(`LinkedList,${LinkedList}`);
  },
});
</script>

<style scoped lang="less"></style>
