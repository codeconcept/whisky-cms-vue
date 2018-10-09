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
    posts: [
      {
        id: 1,
        title: 'Etre programmeur ça pique parfois',
        subTitle: 'ce cactus est pas là pour rien',
        image: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
        content:
          "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier. not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
      },
      {
        id: 2,
        title: 'Un nouveau framework JS',
        subTitle: 'encore !?',
        image: 'https://fakeimg.pl/300/?text=frameworks',
        content: 'Ca en fait 1 par semaine. On va pas tenir le rythme',
      },
      {
        id: 3,
        title: 'Vive le vanilla JavaScript',
        subTitle: 'encore !?',
        image: 'https://fakeimg.pl/300/?text=JS',
        content: 'Là au moins, on est sûr que ça va durer',
      },
    ],
  }),
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
