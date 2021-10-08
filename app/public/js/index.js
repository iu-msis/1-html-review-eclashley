
const Profile = {
  data() {
    return {
      result: {},
      books: []
    }
  },
  computed: {
      prettyBirthday() {
          return dayjs(this.result.dob.date)
          .format('D MMM YYYY')
      }
  },
  methods: {
    prettyDollar(n) {
      const d = new Intl.NumberFormat("en-US").format(n);
      return "$ " + d;
    },
      fetchUserData(){
              //Method 1:
      fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then((json) => {
          console.log("Got json back:", json);
          this.result = json.results[0];
          console.log("C");
      })
      .catch( (error) => {
          console.error(error);
      });
  }

},
  created() {

      this.fetchUserData()
  }

}

Vue.createApp(Profile).mount('#Profile');