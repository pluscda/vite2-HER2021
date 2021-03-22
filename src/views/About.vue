<template>
  <button @click="inc">{{ count }}</button>
  <div>{{ sss }}</div>
  <div>{{ computedMsg }}</div>

  <button class="btn btn-green">Button</button>
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

<style lang="scss" scoped>
.btn {
  @apply py-2 px-4 font-semibold rounded-lg shadow-md;
}
.btn-green {
  @apply text-white bg-green-500 hover:bg-green-700;
}
</style>
