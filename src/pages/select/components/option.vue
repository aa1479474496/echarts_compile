<template>
  <div>
    <h5>option</h5>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    value: [String, Number],
    namespace: [String],
  },
  mounted() {
    console.log("+++++", this.namespace);
  },
};
</script>