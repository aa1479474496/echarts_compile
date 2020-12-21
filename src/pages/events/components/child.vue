<template>
  <div>
    <div>---------------</div>
    <div>child</div>
  </div>
</template>

<script>
export default {
  inject: ['elEvent'],
  mounted() {
    this.elEvent.$emit('event.addField', 'child test');
  }
}
</script>