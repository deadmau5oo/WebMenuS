const app = new Vue({
    el:"#app",
    data:{
        menuTitle:"Menú",
        types:[],
        typeSelected:"",
        productos:[]
    },
    methods:{

        showtype: function() {
            axios.post("/templates/crud.php", {
                request: 1
            })
            .then(function(response) {
                app.types = response.data;
            })
            .catch(function(error) {
                console.log(error);
            });
        },

        showProduct: function() {
            axios.post("/templates/crud.php", {
                request: 2
            })
            .then(function(response) {
                app.productos = response.data;
            })
            .catch(function(error) {
                console.log(error);
            });
        },

        choosedType: function(option) {
            if(option == 1){
                app.typeSelected = "Bebidas";
                app.menuTitle = "Bebidas";
            } else {
                app.typeSelected = "Platillos";
                app.menuTitle = "Platillos";
            }
        },

    },
    created: function() {
        this.showtype();
        this.showProduct();
    },
    updated(){

        

    }

})