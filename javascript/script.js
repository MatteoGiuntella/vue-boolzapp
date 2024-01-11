const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!'
      }
    },
    methods: {

        },
    mounted () {
          axios
            .get('')
            .then()
        }
  }).mount('#app')