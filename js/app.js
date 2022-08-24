// const app = new Vue ({
//     el: '#root',
//     data: {
//         message: 'Ciao mamma',
//         titolo: 'Benvenuti su Vue!!',
//         classiParagrafo: 'bg-red testo-piccolo border-blue',
//         idTitolo: 'main-title',
//     },
//     methods: {
//         saluta: function () {
//             console.log('ciao')
//             console.log(this.message)
//         },
//         toUpper(text) {
//             return text.toUpperCase()
//         },
//         toggleClass() {
//             console.log('classi' + this.classiParagrafo)
//             if (this.classiParagrafo === 'bg-red') {
//                 this.classiParagrafo = 'bg-blue'
//             } else {
//                 this.classiParagrafo = 'bg-red'
//             }
//         }
//     }
// })

// console.log(app)

const app = new Vue ({
    el: '#root',
    data: {
        title: 'ciao mondo',
        show: false,
        imgSrc: 'https://picsum.photos/200/300',
        nomi: [
            'Gianluca',
            'Marco',
            'Mimmo',
            'Pasquale',
            'Geronimo',
        ],
        user: {
            name: 'Gianluca',
            lastName: 'Lomarco',
            weight: 85,
            height: 175,
            jobTitle: 'Developper',
        },
        todos: [
            {
                text: 'Fai questo',
                done: false,
            },
            {
                text: 'Fai questo',
                done: false,
            },
            {
                text: 'Ora questo',
                done: true,
            },
            {
                text: 'Poi quello',
                done: true,
            },
            {
                text: 'Infine questo',
                done: false,
            },
        ],
    },
    methods: {
        onToggle () {
            if(this.show) {
                this.show = false
            } else {
                this.show = true
            }
            }
            
    }
})


console.log(app)

