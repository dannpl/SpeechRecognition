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
    recordAudio () {
      // testa se o navegador suporta o reconhecimento de voz
      if (window.SpeechRecognition || window.webkitSpeechRecognition) {
        // captura a voz
        var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
        var recognition = new SpeechRecognition();
        // inicia reconhecimento
        recognition.lang = 'pt-BR';
        recognition.start();
        // resultado do reconhecimento
        recognition.addEventListener('result', function (e) {
          console.log(e);
          var result = e.results[0][0].transcript;
          console.log(result);
          if (result.toLowerCase() === 'alex') {
            alert('Alex gay')
          }
          // window.location.href = 'http://' + result;
        }, false);
      } else {
        alert('Este navegador não suporta esta funcionalidade ainda!');
      }
    }
  }
}
</script>

<style scoped>
</style>