function carritoCargado(){
     //Carga de los productos al localstorage
     var listacarrito = localStorage.getItem("listaproductos");
     if (listacarrito == null) {
         listacarrito = [];
     } else {
         listacarrito = JSON.parse(listacarrito);
     }

     console.log(listacarrito);

     var lista__productos = document.querySelector(".lista__productos");

     listacarrito.forEach(function (p) {
         let producto = document.createElement("li");
         producto.innerHTML = `
             <h2>${p.nombre}</h2>
             <img src="${p.imagen}" alt="">
             <h2>${p.precio}</h2>
         `;
         lista__productos.append(producto);
     });
}

window.addEventListener("load", carritoCargado);