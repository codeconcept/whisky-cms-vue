<template>
  <div id="app">
    <cc-main-header></cc-main-header>
  </div>
</template>

<script>
import MainHeader from './components/MainHeader.vue';

export default {
  name: 'app',
  components: {
    ccMainHeader: MainHeader,
  },
};
</script>

<style>
#app {
  margin-top: 60px;
}
</style>
