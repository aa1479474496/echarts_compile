<template>
  <div>
    <h3>events</h3>
    <p v-for="item in fields" :key="item">{{item}}</p>
    <child></child>
  </div>
</template>

<script>
import child from './components/child.vue';
export default {
  provide() {
    return {
      elEvent: this
    }
  },
  components: {
    child
  },
  data() {
    return {
      fields: ['event test']
    }
  },
  created() {
    this.$on('event.addField', (field) => {
      if (field) {
        this.fields.push(field)
      }
    })
  }
}
</script>