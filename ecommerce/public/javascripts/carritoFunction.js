
function micarrito(producto) {
   let id = producto.getAttribute('product_id');
   let precio = producto.getAttribute('precio');
   let nombre = producto.getAttribute('nombre');
   let image = producto.getAttribute('image');
   let cantidad = producto.getAttribute('quantity');
   
   var data = { 
    precio, nombre, id, image, cantidad}
SaveDataToSessionStorage(data);
console.log(data);
} 



function SaveDataToSessionStorage(data)
{
    var a;
    //is anything in localstorage?
    if (sessionStorage.getItem('session') === null) {
        a = [];
    } else {
         // Parse the serialized data back into an array of objects
         a = JSON.parse(sessionStorage.getItem('session'));
     }
     // Push the new data (whether it be an object or anything else) onto the array
     a.push(data);
     // Alert the array value
     // alert(a);  // Should be something like [Object array]
     // Re-serialize the array back into a string and store it in localStorage
     sessionStorage.setItem('session', JSON.stringify(a));
}

var botonescarrito = document.querySelectorAll("#bprimary");
    for (const boton of botonescarrito) {
        boton.addEventListener('click', function() {
        boton.style.backgroundColor = 'red';  
    })
}
