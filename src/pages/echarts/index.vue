<template>
  <div>
    <h3 class="test_title">vue-echarts compile 测试</h3>
    <el-row :gutter="20" style="padding: 24px;">
      <el-col :span="12">
        <div style="height:350px">
          <echarts />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import echarts from '@/components/echarts/index.vue';
export default {  
  components: {
    echarts
  }
}
</script>

<style lang="scss" scoped>
.test_title {
  @include text_color(color_2);
}
  
</style>