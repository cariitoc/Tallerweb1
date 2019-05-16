function paginaProductoCargada(){

    
    var productos = document.querySelectorAll(".product");

    //Carga de los productos al localstorage
    var listacarrito = localStorage.getItem("listaproductos");
    if(listacarrito == null){
        listacarrito = [];
    }else{
        listacarrito = JSON.parse(listacarrito);
    }

        productos.forEach(function (producto) {
            let boton = producto.querySelector(".button");
            boton.addEventListener("click", function () {
                let nombre = producto.querySelector(".dato_nombre").innerText;
                let imagen = producto.querySelector(".dato_imagen").src;
                let precio = producto.querySelector(".dato_precio").innerText;

                listacarrito.push({
                    nombre:nombre,
                    imagen:imagen,
                    precio:precio
                });
               
                localStorage.setItem("listaproductos", JSON.stringify(listacarrito));
                let da = JSON.parse(localStorage.getItem("listaproductos"));
                console.log(da);
                
            });

        });


}


window.addEventListener("load", paginaProductoCargada);