<template>
  <header class="header">
    <div class="header__img">
      <img src="@/assets/logo.jpg" alt="" height="100%">
    </div>
    <div class="header__input">
      <input type="text" class="search" data-test="input" v-model="value">
      <button class="button__add" data-test="button" @click="handleAddBtn">添 加</button>
    </div>
  </header>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data() {
    return {
      value: ''
    }
  },
  methods: {
    ...mapMutations(['addListItem']),
    handleAddBtn() {
      if (this.value !== '') {
        this.addListItem(this.value)
        this.value = ''
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.header
  margin: 0 auto;
  display: flex;
  justify-content: center;
  width: 800px;

.header__img
  height: 80px

.header__input
  margin-left: 30px;
  display: flex;
  width: 470px;
  align-items: center;

.search
  outline: none;
  width: 382px;
  height: 42px;
  border: 2px solid #00d0d4;
  border-radius: 5px 0 0 5px;
  display: inline-block;
  padding-left: 16px;

.button__add
  border: none;
  outline: none;
  width: 68px;
  height: 48px;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
  background: linear-gradient(116deg,#00d0d4 5%,#00c5c3 51%,#9effa4 100%);
</style>
