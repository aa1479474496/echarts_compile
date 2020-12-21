<template>
  <div>
    <p>provide - inject 测试-{{ message.name }}</p>
    <parent></parent>
  </div>
</template>

<script>
import parent from "./components/parent.vue";
// provide 如果想实现数据响应， 那么就传入一个可监听的对象
// 子组件使用inject 对这个可监听的对象 进行操作， 也会引起数据的变化 。 如child组件中的childTest方法可以直接 修改this.msg.name
export default {
  provide: function () {
    return {
      test: this.test,
      msg: this.message,
    };
  },
  components: {
    parent,
  },

  data() {
    return {
      message: {
        name: "init",
      },
    };
  },

  methods: {
    test(params) {
      if (this.message.name == "change") {
        this.message.name = "init";
      } else {
        this.message.name = "change";
      }
      console.log("----", this.message);
    },
  },
};
</script>