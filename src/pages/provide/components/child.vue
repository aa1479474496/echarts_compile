<template>
  <div>
    <div>-----------------------</div>
    <!-- <p>child-{{message}}</p> -->
    <p>child-{{this.msg.name}}</p>
    <el-button type='primary' @click="childTest">child-button</el-button>
  </div>
</template>

<script>
export default {
  inject: ['test', 'msg'],
  data() {
    return {
    }
  },
  methods: {
    childTest() {
      // this.msg.name = 'child-message';
      this.test('child emit')
    }
  }
}
</script>