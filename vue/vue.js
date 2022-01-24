new Vue({
  el: "#app",
  data: {
    emailList: [],
  },
  methods: {
    newMail: function () {
      for (i = 0; i < 9; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((result) => {
            this.emailList.push(result.data.response);
          });
      }
    },
  },
  mounted() {
    this.newMail();
  },
});
