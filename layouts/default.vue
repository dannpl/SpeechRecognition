<template>
  <v-app dark>
    <v-app-bar fixed app>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon>
        <v-icon color="#000000b3">more_vert</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      title: 'AlineBot'
    }
  }
}
</script>

<style>
.container {
  max-width: 100%;
}
.v-toolbar {
  border-bottom: 0.1px solid #000000cf;
  box-shadow: none;
}
.v-toolbar__title {
  font-weight: bold;
  color: #000000b3;
}
</style>
