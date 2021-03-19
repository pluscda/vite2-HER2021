<template>
  <button @click="inc">{{ count }}</button>
  <div>{{ sss }}</div>
</template>

<script setup>
import { onMounted, ref } from "vue";
const count = ref(0);
const inc = () => count.value++;
onMounted(() => {
  console.log("mounted in the composition api!");
  inc();
  inc();
  inc();
});
</script>

<script>
export default {
  data() {
    return {
      sss: "ddd",
    };
  },
};
</script>
