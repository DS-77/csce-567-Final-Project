<template>
  <v-app>
    <!-- Navigation Bar -->
    <v-app-bar app color="#E10600" dark class="top_bar">

      <v-img
      class="mx-2"
      :src="require('./assets/black_f1_logo.png')"
      max-width="100"
      contain
    ></v-img>

      <v-toolbar-title class="d-flex align-center">
        <h1>Data Visualization</h1>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <router-link tag="a" to="/">Home</router-link>

    </v-app-bar>

    <!-- Main App Components -->
    <v-main>
      <div class="backdrop">
        <div class="blur">
          <transition>
            <router-view />
          </transition>
        </div>
      </div>
    </v-main>

    <!-- Footer -->
    <v-footer app padless>
      <v-card width="100%" flat tile class="white--text text-center">
        <v-card-text class="white--text">Made By: Deja Scott</v-card-text>

        <v-divider></v-divider>

        <v-card-text>CSCE 567 003 - Spring 2021</v-card-text>

      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style lang="sass">
  .backdrop
    background-image: url("assets/background.jpeg")
    background-size: cover
    background-origin: content-box
    background-attachment: fixed
  
  .blur
    backdrop-filter: blur(8px)
    background: rgba(255, 255, 255, 0.2)
</style>
