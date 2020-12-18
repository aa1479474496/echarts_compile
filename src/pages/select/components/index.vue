<template>
  <div>
    <h3>测试组件</h3>
    <slot></slot>
    <myoption v-bind="$attrs"></myoption>
  </div>
</template>

<script>
import myoption from './option.vue';
export default {
  components: {
    myoption
  },
  // props: {
  //   value: [String, Number],
  //   namespace: [String]
  // },
  mounted() {
    console.log('++++', this);
    // console.log('------', this.value);
  }
}
</script>