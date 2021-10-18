
const Profile = {
  data() {
    return {
      result: {},
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
  },
  postNewBook(evt) {
    //this.bookForm.bookId = this.selectedStudent.id;        
    
    console.log("Posting!", this.offerForm);

    fetch('api/offer/create.php', {
        method:'POST',
        body: JSON.stringify(this.bookForm),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {
        console.log("Returned from post:", json);
        // TODO: test a result was returned!
        this.offers = json;
        
        // reset the form
        this.offerForm = {};
      });
    }
},
  created() {

      this.fetchUserData()
  }
}

Vue.createApp(Profile).mount('#Profile');