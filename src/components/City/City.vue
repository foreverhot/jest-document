<template>
  <div>
    <section class="city" v-for="(item, index) in list" :key="index" data-test="item" @click="deleteItem(index)" title="点击删除">
      {{ item }}
    </section>
    <div v-show="list.length === 0" data-test="noData" class="no-data">暂无数据</div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    deleteItem(index) {
      this.$emit('delete', index)
    }
  }
}
</script>

<style scoped>
.city {
  margin: 10px;
  width: 300px;
  height: 200px;
  display: inline-block;
  font-size: 24px;
  color: red;
  background-image: url(https://imgs.qunarzz.com/vs_ceph_vs_tts/f38c6b48-af7a-4bfa-b810-114cfe76b02f.jpg_r_390x260x90_e14b94eb.jpg);
  background-size: 100% 100%;
  cursor: pointer;
}
.no-data{
  margin-top: 40px;
  text-align: center;
  font-size: 26px;
}
</style>