<template>
  <div class="container">
    <div class="nav-scroller py-1 mb-2">
      <nav class="nav d-flex justify-content-between">
        <a class="p-2 text-muted" :href="item.url" v-for="item in navigation" :key="item.title">{{item.title}}</a>
      </nav>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Navigation',
  data(){
    return {
      navigation: []
    }
  },
  mounted(){
    axios.get('http://localhost:8080/data/navigation.json')
    .then(response => {
      this.navigation = [...response.data]
    })
  }
};
</script>