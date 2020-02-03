<template>
  <nav class="nav">
    <ul class="nav__center" @mouseover="mouseOverNav" @mouseout="mouseOutNav">
      <li class="nav__item nav__item_active" data-test="navItem">
        <router-link to="/" data-test="navLink">首页</router-link>
      </li>
      <li class="nav__item" data-test="navItem">
        <router-link to="/about?page=1" data-test="navLink">机票</router-link>
      </li>
      <li class="nav__item" data-test="navItem">
        酒店
      </li>
      <li class="nav__item" data-test="navItem">
        团购
      </li>
      <li class="nav__item" data-test="navItem">
        度假
      </li>
      <li class="nav__item" data-test="navItem">
        邮轮
      </li>
      <li class="nav__item" data-test="navItem">
        门票
      </li>
      <li class="nav__item" data-test="navItem">
        火车票
      </li>
      <li class="nav__item" data-test="navItem">
        攻略
      </li>
      <li class="nav__item" data-test="navItem">
        当地人
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    mouseOverNav(e) {
      if (e.target.classList.contains('nav__item')) {
        e.target.classList.add('nav__item_hover')
      }
    },
    mouseOutNav(e) {
      const classList = e.target.classList
      if (classList.contains('nav__item') && classList.contains('nav__item_hover')) {
        e.target.classList.remove('nav__item_hover')
      }
    }
  }
}
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: center;
  height: 44px;
  background: linear-gradient(90deg,#00d0d4 19%,#00c5c3 58%,#9effa4 100%);
}
.nav__center {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 800px;
  height: 100%;
}
.nav__item{
  height: 100%;
  line-height: 44px;
  padding: 0 10px;
  color: #fff;
  cursor: pointer;
}
.nav__item_hover {
  background: #00bcd4;
}
.nav__item_active {
  background: #00bcd4;
}
</style>