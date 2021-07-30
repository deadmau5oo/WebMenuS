const app = new Vue({
    el:"#app",
    data:{
        menuTitle:"Menú",
        menuTitle2:"Menú",
        types:[],
        typeSelected:"",
        productos:[],
        productSelected:"",
        orderNums:[],
        order: {
            products:[],
            active:true,
        }
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

        typePCard: function(ProductName) {
            app.productSelected = ProductName;
            app.menuTitle = ProductName;
            $(".menu2").hide();
            $(".menu3").fadeIn(500);
            $(".backbtn").addClass("back2");
        },

        addProduct: function(product) {
            app.order.push(product);
        }

    },
    created: function() {
        this.showtype();
        this.showProduct();

        if(JSON.parse(localStorage.getItem("orderNums"))){
            this.orderNums = JSON.parse(localStorage.getItem("orderNums"));
        }
        

        if(this.orderNums[0]==null){
            this.orderNums.push(this.order);
        }
    },
    updated(){
        
    }

    //localStorage.removeItem('image');
    //this.usuario.carrito.push(producto);
    //this.usuario.total += parseInt(producto.costo);
    //localStorage.setItem("usuario",JSON.stringify(this.usuario));
    //this.user = JSON.parse(localStorage.getItem("usuarioL"));

})