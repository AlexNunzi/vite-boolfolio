<template>
  
  <PageHeader />

  <PageMain />

</template>

<script>
import PageHeader from './components/PageHeader.vue';
import PageMain from './components/PageMain.vue';

export default {
  components: {
    PageHeader,
    PageMain
  }
}
</script>


<style lang="scss">
  @use './styles/general.scss';
</style>
