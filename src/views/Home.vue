<template>
  <router-link to="/">Home</router-link>
  <router-link to="/about">About</router-link>

  <h5>{{ count }}</h5>
</template>

<script>
export default {
  inject: ["state", "actions", "mutations"],
  data() {
    return {
      count: 0,
    };
  },
  async mounted() {
    this.count = this.state.count;
  },
};
</script>

<style></style>
