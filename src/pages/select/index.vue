<template>
  <div>
    <h1>select-index</h1>
    <myselect v-model="name" namespace="el">
      <!-- <myselect :value="name"></myselect> -->
      <!-- <div value="1111"></div> -->
      <!-- <myoption></myoption> -->
    </myselect>
  </div>
</template>

<script>
import myselect from "./components/index.vue";
import myoption from "./components/option.vue";
export default {
  components: {
    myselect,
    myoption
  },
  data() {
    return {
      name: 1111
    }
  }
};
</script>