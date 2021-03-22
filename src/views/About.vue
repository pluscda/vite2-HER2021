<template>
  <h4>{{ state.count }}</h4>
</template>

<script setup>
import { inject } from "vue";
const state = inject("state");
const actions = inject("actions");
state.count++;
// (async () => {
//   alert(await actions.sayHi());
// })();
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
