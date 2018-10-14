<template>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img
          :src="blogPost.image"
          height="200px"
        >
        </v-img>

        <v-card-title primary-title>
          <div>
            <div class="headline">
              <router-link :to="`/blog-post/${blogPost.id}`">{{blogPost.title}}</router-link>
            </div>
            <span class="grey--text">{{blogPost.subTitle}}</span>
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
            {{blogPost.content}}
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>

</template>

<script>
export default {
  props: ['blogPost'],
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style>
</style>
