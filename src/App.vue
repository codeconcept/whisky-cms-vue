<template>
  <v-app id="app">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Accueil</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
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
          <!-- card begin -->
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-card>
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                  height="200px"
                >
                </v-img>

                <v-card-title primary-title>
                  <div>
                    <div class="headline">Etre programmeur ça pique parfois</div>
                    <span class="grey--text">ce cactus est pas là pour rien</span>
                  </div>
                </v-card-title>

                <v-card-actions>
                  <v-btn flat>Partager</v-btn>
                  <v-btn flat color="purple">Explorer</v-btn>
                  <v-spacer></v-spacer>
                  <v-btn icon @click="show = !show">
                    <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                  </v-btn>
                </v-card-actions>

                <v-slide-y-transition>
                  <v-card-text v-show="show">
                    I'm a thing. But, like most politicians, he promised more than he could deliver.
                    You won't have time for sleeping, soldier,
                    not with all the bed making you'll be doing.
                    Then we'll go with that data file!
                    Hey, you add a one and two zeros to that or we walk!
                    You're going to do his laundry? I've got to find a way to escape.
                  </v-card-text>
                </v-slide-y-transition>
              </v-card>
            </v-flex>
            </v-layout>
          <!-- card end -->

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

export default {
  name: 'app',
  components: {
    ccMainHeader: MainHeader,
  },
  data: () => ({
    drawer: null,
    show: false,
  }),
  props: {
    source: String,
  },
};
</script>

<style>
#app {
}
</style>
