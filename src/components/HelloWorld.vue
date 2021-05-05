<template>
  <div>
    <v-container fluid>
      <v-row class="text-center">
        <v-col cols="12">
          <v-img
            :src="require('../assets/f1_logo.png')"
            class="my-3"
            contain
            height="480"
          />
        </v-col>
      </v-row>
    <!-- TODO: Add a description of project. Maybe Like the Background and why its important -->
  </v-container>

    <div class="content">
      <v-card class="card" flat tile>
        <v-container>
          <v-card-title>The Mission</v-card-title>
          <v-divider></v-divider>
          <v-card-text>Built on science, technology, and engineering Formula 1 racing is one of the world’s most elite racing competitions. Scientists, engineers, mechanics, strategists, and drivers all work together to ensure that they and the race car are in peak condition to run an intensive race in the Grand Prix. At the root of this exclusive unit are the driver, the car, and the hardworking pit crew. For the purpose of this project, our mission was to analyze just how important pitstops are when the car, pit crew, and driver come together, and if these stops affect the construct’s win rations positively or negatively.</v-card-text>
        </v-container>
      </v-card>
    </div>

    <Dashboard></Dashboard>
  </div>
</template>

<script>
import Dashboard from './Dashboard'
  export default {
  components: { Dashboard },
    name: 'HelloWorld',
  }
</script>

<style lang="sass">
  .content 
    margin-top: 200px
  .card 
    background-color:  #4599FE
</style>
