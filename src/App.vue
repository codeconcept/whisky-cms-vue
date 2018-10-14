<template>
  <v-app id="app">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <v-list-tile @click="toDo">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Accueil</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="toDo">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>MVDP</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout>
          <v-flex text-xs-center>
          <cc-main-header></cc-main-header>
          <v-layout row v-for="p in posts" :key="p.id">
            <!-- card begin -->
            <cc-blog-card :blog-post='p'></cc-blog-card>
            <!-- card end -->
          </v-layout>

          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
import axios from 'axios';
import MainHeader from './components/MainHeader.vue';
import BlogCard from './components/BlogCard.vue';

export default {
  name: 'app',
  components: {
    ccMainHeader: MainHeader,
    ccBlogCard: BlogCard,
  },
  data: () => ({
    drawer: null,
    show: false,
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
  methods: {
    toDo() {
      console.log('todo');
    },
  },
  props: {
    source: String,
  },
};
</script>
