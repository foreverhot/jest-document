<template>
  <div id="app">
    <Header />
    <Nav />
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/Header/Header'
import Nav from '@/components/Nav/Nav'
export default {
  name: 'app',
  components: {
    Header,
    Nav
  }
}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
ul, li, dl, dd {
  list-style: none;
}
</style>
