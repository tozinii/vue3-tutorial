const app = Vue.createApp({
    // data, functions

    data(){
        return {
            showBooks: true,
            title: 'The last wish',
            author: 'Andrzej Sapkowski',
            age: 62,
            x: 0,
            y: 0,
            books: [
                {title: 'title1', author: 'author1', isFav: true},
                {title: 'title2', author: 'author2', isFav: false},
                {title: 'title3', author: 'author3', isFav: false}
            ],
            url: 'https://www.youtube.com'
        }
    },
    methods: {
        changeTitle(title){
            console.log(this.title)
            this.title = title
        },

        toggleShowBooks(){
            console.log(this.showBooks)
            this.showBooks = !this.showBooks
        },
        handleMouseover(){
            console.log('mouseover event')
        },
        handleMouseleave(){
            console.log('mouseleave event')
        },
        handleDoubleClick(){
            console.log('double click event')
        },
        handleMouseMove(e){
            console.log('mousemove event')
            this.x = e.offsetX
            this.y = e.offsetY
        },
        handleEvent(e){
            console.log(e, e.type)
        },
        toggleFav(book){
            book.isFav = !book.isFav
        }
    },
    computed: {
        favouriteBooks(){
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')