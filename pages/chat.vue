<template>
  <v-card class="wrapper-chat">
    <v-card width="100%" class="box-messages">
      <v-card-text>
        <div class="message" v-for="(message, i) in messages" :key="i">
          <p
            class="label-name"
            :class="{'message-me': message.me === true, 'message-other': message.me === false}"
          >
            <!-- Messages Users -->
            <span
              class="message"
              v-if="message.role !== 'tip' && message.role !== 'system'"
            >{{message.message}}</span>
          </p>
        </div>
      </v-card-text>
    </v-card>
    <v-card class="text-input">
      <v-text-field
        v-model="text"
        class="input-msg"
        placeholder="Digite Aqui"
        outlined
        color="green"
        @keyup.enter="text !== '' ? send() : ''"
      ></v-text-field>

      <v-btn
        class="btn-send"
        dark
        fab
        color="#059021"
        @click="text !== '' ? send() : recordAudio()"
      >
        <v-icon size="32">{{text === '' ? 'keyboard_voice' : 'send'}}</v-icon>
      </v-btn>
    </v-card>
  </v-card>
</template>
<script>
import axios from 'axios';
export default {
  data () {
    return {
      url: `http://localhost:4200/messages/`,
      text: '',
      messages: [
        { message: 'teste', me: true },
        { message: 'Oiii', me: false, suggest: ''},
      ]
    }
  },
  methods: {
    send () {
      const data = {
        message: this.text,
        me: true
      }
      this.messages.push(data)

      // axios.post(this.url, this.mensagem)
      //   .then((response) => {
      //     this.messages.push({
      //       message: response.data.output.text,
      //       me: false,
      //       suggest: response.data.context.sugestoes
      //     });
      //     this.text = '';
      //   })
    },
    recordAudio () {
      const self = this
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
          var result = e.results[0][0].transcript;

          // Me Audio
          const message = {
            message: result,
            me: true
          }
          self.messages.push(message)

          // Bot response
          const ajuda = result.search('Ajuda')
          if (ajuda === -1) {
            const message = {
              message: 'No que posso ajudar?',
              me: false
            }
            self.messages.push(message)
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
.v-card {
  border-radius: unset !important;
}
.box-messages {
  overflow-y: auto;
  overflow-x: hidden;
  padding-bottom: 72px;
  display: flex;
  position: absolute;
  flex-direction: column-reverse;
  height: calc(100% - 2px);
  margin-top: -10px;
  margin-left: -12px;
}
.message {
  width: 100%;
  display: inline-block;
}
.wrapper-chat {
  width: 100%;
  height: 100%;
  display: contents;
}
.input-msg {
  position: fixed;
  bottom: -20px;
  width: 92%;
  right: 7%;
}
.btn-send {
  box-shadow: none;
  bottom: 0 !important;
  position: fixed !important;
  right: 9px;
  margin-bottom: 12px;
}
.message-other {
  background-color: #ffe60d;
  padding: 3px 10px;
  max-width: 68%;
  border-radius: 4px;
  word-break: break-all;
  color: #525252;
  float: left;
}
.message-me {
  background-color: #059021;
  padding: 3px 10px;
  color: white;
  max-width: 68%;
  border-radius: 4px;
  word-break: break-all;
  float: right;
}
.label-name {
  font-weight: bold;
  margin-bottom: 0px;
  font-size: 15px;
}
.text-input {
  position: absolute;
  width: 100%;
  left: 0;
  background-color: white;
  height: 78px;
  bottom: 0;
  border-top: 1px solid #00000029;
}
.v-input__slot {
  border-radius: 4px;
}
</style>