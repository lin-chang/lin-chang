<template>
  <div>
<!-- <div>{{ n }}</div> -->
<button @click="aa">123</button>
<button @click="ini">123{{$store.state.list}}</button>
  </div>
</template>

<script lang="ts">
import { mapMutations } from 'vuex';
import { defineComponent } from 'vue'
export default defineComponent({
  setup () {
    return{}
  },
      methods: {
    aa(){
      this.ini()
    },
     ...mapMutations(['ini'])
  },
})
</script>

<style scoped>
/*
引入main。ts
import store from './store/index'
.use(store)
*/
</style>