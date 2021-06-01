<template>
  <div>
    <v-col v-for="(routine, i) in routines" :key="i">
      <v-row align="start" justify="center">
        <v-card width="400" color="primary" v-on:click="toRoutine(routine.id,routine.name)">
          <v-card-title v-text="routine.name" class="justify-center" >
          </v-card-title>
        </v-card>
      </v-row>
        <v-btn v-on:click="newRoutine()" width="400" color="accent" class="mt-4"> New Routine </v-btn>
    </v-col>
  </div>
</template>

<script>
const axios = require('axios')

export default {
  data: function () {
    return {
      routines: []
    }
  },
  created() {
    this.getRoutines()
  },
  methods: {
    getRoutines: function () {
      var context = this
      axios.get("http://localhost:9000/routines").then(response => (
        context.routines = response.data
      ))
    },
    toRoutine: function (routineId,routineName) {
      this.$store.commit('setRoutineName', routineName)
      this.$router.push('/routine/' + routineId)
    },
    newRoutine: function () {
      this.$router.push('/editroutine/new')
    }
  }
}
</script>

<style>

</style>
