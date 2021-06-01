<template>
    <v-container>
      <v-text-field label="Name" > </v-text-field>
        <v-btn class="mx-3" color="accent" v-on:click="save()"> Speichern </v-btn>
        <v-btn class="mx-3" color="error" v-on:click="back()"> Abbrechen </v-btn>
    </v-container>
</template>

<script>
  const axios = require('axios')
  export default {
    data: function () {
      return{
        route: {
          id: "",
          name: ""
        },
      }
    },
    methods: {
      save(){
        this.$router.push('/routine/' + this.route.id)
      },
      back() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style>
</style>
