window.addEventListener('load', function(){
  var formulario = document.querySelector("form")
  

    formulario.addEventListener('submit', function(e) {
     

      let errors = [];
    
     let campoprecio = document.getElementById("price");

      if (campoprecio.value < 0 ) {

         Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El campo de precio debe ser mayor a 0.00',
            showConfirmButton: true,
            timer: 20000000
          });
         errors.push("error en precio");
      }
      
      if (campoprecio.value == "" ) {

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

      if (campodescuento.value < 0) {

         Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El campo de descuento debe ser positivo',
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