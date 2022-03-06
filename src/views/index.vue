<template>
  <div class="index">这是首页</div>
  <LinkedListNode />
</template>

<script>
import { defineComponent } from "vue";
import LinkedListNode from "./LinkedListNode.jsx";
export default defineComponent({
  setup() {},
  components: { LinkedListNode },
});
</script>

<style scoped lang="less"></style>
