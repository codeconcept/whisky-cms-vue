<template>
  <div>
    <cc-main-header></cc-main-header>
    <v-layout row v-for="p in posts" :key="p.id">
      <!-- card begin -->
      <cc-blog-card :blog-post='p'></cc-blog-card>
      <!-- card end -->
    </v-layout>
  </div>
</template>

<script>
import axios from 'axios';
import MainHeader from './MainHeader.vue';
import BlogCard from './BlogCard.vue';

export default {
  components: {
    ccMainHeader: MainHeader,
    ccBlogCard: BlogCard,
  },
  data: () => ({
    posts: [],
  }),
  created() {
    axios
      .get('http://localhost:8081/api/v1/posts')
      .then((result) => {
        this.posts = result.data;
      })
      .catch(err => console.error(err));
  },
};
</script>

<style>
</style>
