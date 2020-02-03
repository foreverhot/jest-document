<template>
  <div class="home">
    <div class="city-scope">
      <City :list="list" @delete="deleteItem"/>
    </div>
    <Float v-show="isFloatTag" />
  </div>
</template>

<script>
import City from '@/components/City/City'
import Float from '@/components/Float/Float'
import { mapState, mapMutations } from 'vuex'
import axios from 'axios'

export default {
  name: "home",
  components: {
    City,
    Float
  },
  data() {
    return {
      isFloatTag: false
    }
  },
  computed: {
    ...mapState(['list'])
  },
  created() {
    axios.get('/ceshi').then(res => {
      this.addListItem(res.data)
    })
  },
  mounted() {
    setTimeout(() => {
      this.isFloatTag = true
    }, 2000)
  },
  methods: {
    ...mapMutations(['addListItem', 'minusListItem']),
    deleteItem(index) {
      this.minusListItem(index)
    }
  }
};
</script>

<style scoped>
.city-scope {
  margin: 0 auto;
  width: 1200px;
}
</style>
