<template>
  <v-app>
    <!-- Navigation Bar -->
    <v-app-bar app color="#E10600" dark class="top_bar">

      <div class="d-flex align-center">
        <h1>Formula 1</h1>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <!-- Main App Components -->
    <v-main>
      <div class="backdrop">
        <HelloWorld/>
        <Dashboard/>
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
import HelloWorld from './components/HelloWorld';
import Dashboard from './components/Dashboard';

export default {
  name: 'App',

  components: {
    HelloWorld,
    Dashboard
  },

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
</style>
