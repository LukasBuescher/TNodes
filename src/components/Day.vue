<template>
  <div>
    <v-col v-for="(exercise, i) in exercises" :key="i">
      <v-row justify="center">
        <v-card width="450" color="primary">
          <v-row justify="start">
             <div class="text-h5 ml-7 mt-2"  v-text="exercise.name" > </div>
          </v-row>
          <v-card-text>
            <v-expansion-panels accordion>
              <v-expansion-panel v-for="(set, j) in exercise.trainingSets" :key="j">
                <v-expansion-panel-header >
                  <v-icon slot="actions" >$vuetify.icons.expand</v-icon>
                  {{set.setOrder}}. {{set.plannedWeight}}kg x {{set.plannedReps}}
                  <div v-if="set.asManyRepsAsPossible"> + </div>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-text-field label="Ausgeführtes Gewicht" dense outlined color="primary" class="mt-4" v-model="set.actualWeight" >
                    </v-text-field>
                    <v-text-field label="Ausgeführte Reps" dense outlined color="primary" v-model="set.actualReps">
                    </v-text-field>
                    <v-textarea label="Notizen" outlined dense color="primary" placeholder=" " rows="2" v-model="set.notes"></v-textarea>
                    <v-btn color="primary" block class="mx-1" @click="saveDeviations(set)"> Eintragen </v-btn>
                </v-expansion-panel-content>
              </v-expansion-panel>
          </v-expansion-panels>
          <v-btn @click="restTimer(exercise.restingTime)" :disabled="timerStarted" color="accent" class="text-none text-body-1 mt-4" block> <v-icon>mdi-timer-sand</v-icon> ({{exercise.restingTime}} s) </v-btn>
          </v-card-text>
        </v-card>
      </v-row>
    </v-col>

      <v-app-bar app bottom dense>
        <v-row justify="center">
         <div class="text-h4 "> {{minutes}} m {{seconds}} s</div>
         <v-btn v-if="timerStarted" class="text-h6 ml-2" color="accent" @click="stopTimer()" width="170"> Stop </v-btn>
         <v-btn v-else class="text-h6 ml-2" color="accent" @click="resetTimer()" width="170"> Reset </v-btn>
       </v-row>
     </v-app-bar>
  </div>

</template>

<script>
  const axios = require('axios')
  export default {
    data: function () {
      return {
        exercises: [],
        sessions: [],
        timerStarted: false,
        minutes: "0",
        seconds: "0",
        intervalId: ""
      }
    },
    created() {
      this.getExercises(this.$route.params.id)
    },
    methods: {
      getExercises: function (dayId) {
        var context = this
        axios.get("http://localhost:9000/days/" + dayId + "/exercises").then(response => (
          context.exercises = response.data
        ))
      },
      saveDeviations: function(trainingSet){
        axios.put("http://localhost:9000/trainingsets/" + trainingSet.id, trainingSet)
      },
      stopTimer: function(){
        this.timerStarted = !this.timerStarted
        clearInterval(this.intervalId)
      },
      resetTimer: function(){
        this.minutes = 0
        this.seconds = 0
        clearInterval(this.intervalId)
      },
      restTimer: function(restTime){
        this.timerStarted = !this.timerStarted
        const context = this
        var countDownDate = restTime * 1000 + new Date().getTime() ;
        context.intervalId = setInterval(function(){
          var distance = countDownDate - (new Date().getTime())
          context.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
          context.seconds = Math.floor((distance % (1000 * 60)) / 1000)
          if(context.minutes === 0 && context.seconds === 0){
            clearInterval(context.intervalId)
            context.timerStarted = false
          }
        }, 1000);
      }
    }
  }
</script>

<style>
</style>
