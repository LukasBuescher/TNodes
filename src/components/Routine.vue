<template>
  <div>
    <v-col v-for="(day, i) in routine.days" :key="i">
      <v-row justify="center">
        <v-card width="400" color="primary" v-on:click="toDay(day.id)">
          <v-card-title v-text="day.dateString" >
          </v-card-title>
          <v-card-text>
            <h2 v-for="(exercise, j) in day.exercises" :key="j">
              {{exercise.exerciseOrder}}. {{exercise.name}} {{exercise.trainingSets.length}} Sets
            </h2>
          </v-card-text>
        </v-card>
      </v-row>
    </v-col>
  </div>
</template>

<script>
const axios = require('axios')

export default {
  data: function () {
    return {
      routine: ""
    }
  },
  created() {
    this.getRoutine(this.$route.params.id)
  },
  methods: {
    getRoutine: function (routineId) {
      var context = this
      axios.get("http://localhost:9000/routines/" + routineId ).then(response => (
        context.routine = response.data)
      )
    },
    toDay: function (dayId) {
      this.$router.push('/day/' + dayId)
    }
  }
}
</script>

<style>
</style>
