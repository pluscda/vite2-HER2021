<template>
  <div>
    <div class="about">{{ test }}<el-button type="primary">EL</el-button></div>
    <div>{{ count }}</div>
  </div>
</template>

<script>
import * as R from "ramda";
export default {
  data() {
    return {
      test: R.repeat("T", 10).join("-"),
      count: "3",
    };
  },
  mounted() {
    this.count = this.$store.state.count + 100;
  },
};
</script>

<style lang="scss" scoped>
.about {
  color: $themeColor;
}
</style>
