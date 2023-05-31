<template>
  
  <PageHeader />

  <router-view></router-view>

</template>

<script>
import PageHeader from './components/PageHeader.vue';

export default {
  components: {
    PageHeader
  }
}
</script>


<style lang="scss">
  @use './styles/general.scss';
</style>
