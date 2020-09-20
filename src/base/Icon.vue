<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="`#icon-${name}`"></use>
</svg>
</template>

<script>
import './svg.js'
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  setup() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.icon {
  width: 1.5em;
  height: 1.5em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>