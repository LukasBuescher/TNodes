<template>
  <v-app-bar app dense>
    <v-btn large icon class="mr-2" @click="back()"> <v-icon> mdi-arrow-left </v-icon> </v-btn>
    <div class="text-h5"> TNotes {{routineName}} </div>
  </v-app-bar>
</template>

<script>
export default {
  computed: {
    routineName () {
      return this.$store.state.routineName
    }
  },
  methods: {
    back() {
      this.$router.go(-1)
    }
  }
}
</script>

<style>

</style>
