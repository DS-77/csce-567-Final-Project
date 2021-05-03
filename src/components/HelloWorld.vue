<template>
  <div>
    <v-container fluid>
      <v-row class="text-center">
        <v-col cols="12">
          <v-img
            :src="require('../assets/f1_logo.png')"
            class="my-3"
            contain
            height="700"
          />
        </v-col>
      </v-row>

    <!-- TODO: Add a description of project. Maybe Like the Background and why its important -->
  </v-container>

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
