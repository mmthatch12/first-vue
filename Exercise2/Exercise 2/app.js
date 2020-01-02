new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            clickbut: function(){
                alert("Button was clicked")
            },
            valuestore: function(event){
                this.value = event.target.value;
            }
        }
    });