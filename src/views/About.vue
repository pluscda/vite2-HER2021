<template>
  <button @click="inc">{{ count }}</button>
  <div>{{ sss }}</div>
  <div>{{ computedMsg }}</div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
const store = useStore();
const count = ref(0);
const inc = () => count.value++;
const computedMsg = computed(() => count.value + "eee!!!");
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
