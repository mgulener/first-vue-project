<template>
  <div class="main">
    <div class="container">
      <JumbotronBanner />
      <FeaturedPost :col="featuredColumn" />
    </div>
  </div>
</template>

<script>
import JumbotronBanner from './banners/JumbotronBanner'
import FeaturedPost from './contents/FeaturedPost'

export default {
  name: 'Main',
  components: {
    JumbotronBanner,
    FeaturedPost,
  },
  data(){
    return {
      featuredColumn: '2'
    }
  }
}
</script>