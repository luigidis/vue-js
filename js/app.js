const app = new Vue ({
    el: '#root',
    data: {
        message: 'Ciao mamma',
        titolo: 'Benvenuti su Vue!!',
        classiParagrafo: 'bg-red testo-piccolo border-blue',
        idTitolo: 'main-title',
    },
    methods: {
        saluta: function () {
            console.log('ciao')
            console.log(this.message)
        },
        toUpper(text) {
            return text.toUpperCase()
        },
        toggleClass() {
            console.log('classi' + this.classiParagrafo)
            if (this.classiParagrafo === 'bg-red') {
                this.classiParagrafo = 'bg-blue'
            } else {
                this.classiParagrafo = 'bg-red'
            }
        }
    }
})

console.log(app)