<template>
  <div class="p-6 max-w-sm mx-auto bg-white rouned-xl shadow-md flex items-center space-x-4">
    <div class="flex-shrink-0">
      <img class="h-12 w-12" src="//unsplash.it/120/120" />
    </div>
  </div>
  <div class="mb-4 rounded-t-md"></div>
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
