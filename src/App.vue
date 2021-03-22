<template>
  <router-view />
</template>

<script>
import { state, actions, mutations } from "@/store/global.js";
export default {
  provide: {
    state,
    actions,
    mutations,
  },
};
</script>

<style></style>
