<template>
  <div>
  </div>
</template>

<script>
  const axios = require('axios')
  export default {
    created() {

    },
    data: function () {
      return {
        day: {
          id: "",
          name: "",
          dateString: "",
          note: ""
        }
      }
    },
    methods: {
      getDay() {
        var context = this
        if(this.$route.params.id != "new"){
          axios.get("http://localhost:9000/days/" + this.$route.params.id ).then(response => (
            context.day = response.data)
          )
        }
      }
    }
  }
</script>

<style>

</style>
