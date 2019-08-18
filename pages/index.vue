<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card>
        <v-card-title class="headline">Chat audio</v-card-title>
        <v-card-text></v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" @click="recordAudio()">voice</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      recorder: '',
      isRecording: false
    }
  },
  methods: {

  }
}
</script>

<style scoped>
</style>