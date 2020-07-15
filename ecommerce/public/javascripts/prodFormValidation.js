window.addEventListener('load', function(){
  var formulario = document.querySelector("form")
  console.log(formulario);



    formulario.addEventListener('submit', function(e) {
     

      let errors = [];


      let camponombre = document.getElementById("name");
      console.log(camponombre);

      if (camponombre.value == "") {

         Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El campo de nombre debe estar completo',
            showConfirmButton: true,
            timer: 20000000
          });
         errors.push("error en nombre");
      }
    
     let campoprecio = document.getElementById("price");

      if (campoprecio.value == "") {

         Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El campo de precio debe estar completo',
            showConfirmButton: true,
            timer: 20000000
          });
         errors.push("error en precio");
      }

     let campodescuento = document.getElementById("discount");

      if (campodescuento.value == "") {

         Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El campo de descuento debe estar completo',
            showConfirmButton: true,
            timer: 20000000
          });
         errors.push("error en descuento");
      }

     let campocategoria = document.getElementById("category");

      if (campocategoria.value == "") {

         Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El campo de categoria debe estar completo',
            showConfirmButton: true,
            timer: 20000000
          });
         errors.push("error en categoria");
      }

     let campoimagen = document.getElementById("productoImagen");

      if (campoimagen.value == "") {

         Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor subir una imagen de producto',
            showConfirmButton: true,
            timer: 20000000
          });
         errors.push("error en imagen");
      }


     let campodescripcion = document.getElementById("description");

      if (campodescripcion.value == "") {

         Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor agregar una descripción',
            showConfirmButton: true,
            timer: 20000000
          });
         errors.push("error en descripción");
      }

      if (errors.length > 0) {
         e.preventDefault();
      }

    })

})