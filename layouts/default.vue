<template>
  <div>
    <AppHeader />
    <slot />
    layout
  </div>
</template>
<script>
import AppHeader from 'layouts/header.vue'
export default {
  components: {
    AppHeader
  }
}
</script>
