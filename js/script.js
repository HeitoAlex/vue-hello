const { createApp } = Vue

createApp({
    data() {
        return {
        message: 'Supercalifragilisticexpialidocious',
        imageUrl: 'https://ongood.eu/wp-content/uploads/2020/01/supercalifragilistichespiralidoso_124328_display.jpg'
        }
    },
    methods:{
        stop: function(){
            alert('Stop touching ME! >:(')
        }
    }
}).mount('#app')


