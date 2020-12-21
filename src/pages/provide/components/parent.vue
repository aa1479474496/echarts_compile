<template>
  <div>
    <p>parent</p>
    <child></child>
  </div>
</template>

<script>
import child from './child.vue';
export default {
  components: {
    child
  }
}
</script>