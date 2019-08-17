<template>
<v-card class="conteudo">

<div class="chat">

     <v-text-field class="barra-digitar"
            placeholder="Digite Aqui"
            outlined>
          </v-text-field>

            <v-btn class="btn-enviar"
              dark
              fab
              color="green"
            >
              <v-icon></v-icon>
            </v-btn>
</div>
</v-card>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.conteudo{
    width: 100%;
    height: 100%;
}
.chat{
    padding: 21%;
    background-color: green;
    border-radius:10px;
}
.barra-digitar{
    position: absolute;
    bottom: 0;
    width: 10%;
    border-radius: 30px;
    width: 91%;
    right: 8%;
}
.btn-enviar{
    bottom: 0 !important;
    position: absolute !important;
    position: absolute !important;
    right: 23px;
    padding: 30px;
    margin-bottom: 26px;
}


</style>