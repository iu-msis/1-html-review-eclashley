const Book = {
    data() {
      return {
        book: [],
        bookForm:{},
        selectedBook: null
      }
    },
    computed: {},
    methods: {
        prettyDollar(n) {
            const d = new Intl.NumberFormat("en-US").format(n);
            return "$ " + d;
        },
        fetchBookData() {
            fetch('/api/book/')
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
                this.book = responseJson;
            })
            .catch( (err) => {
                console.error(err);
            })
        },
        postNewBook(evt) {        
            // console.log("Posting!", this.bookForm);
        
            fetch('api/book/create.php', {
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
                this.book = json;
                
                // reset the form
                this.bookForm = {};
              });
            },
          postEditBook(evt) {
              this.bookForm.id = this.selectedBook.id;       
              
              console.log("Updating!", this.bookForm);
      
              fetch('api/book/update.php', {
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
                  this.book = json;
                  
                  this.resetBookForm();
                });
            },
            postDeleteBook(b) {
              if (!confirm("Are you sure you want to delete the book from "+b.author+"?")) {
                  return;
              }
              
              fetch('api/book/delete.php', {
                  method:'POST',
                  body: JSON.stringify(b),
                  headers: {
                    "Content-Type": "application/json; charset=utf-8"
                  }
                })
                .then( response => response.json() )
                .then( json => {
                  console.log("Returned from post:", json);
                  // TODO: test a result was returned!
                  this.book = json;
                  
                  this.resetBookForm();
                });
            },
          resetBookForm() {
            this.selectedBook = null;
            this.bookForm = {};
            }
    },
    created() {
        this.fetchBookData();
    }
  }
  Vue.createApp(Book).mount('#BookApp');