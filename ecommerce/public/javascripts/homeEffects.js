
      var barras = document.querySelectorAll(".nav-menu");
      console.log(barras);
      for (var barra of barras) {
        console.log(barra);
      barra.addEventListener('scroll', function() {
         barra.classList.toggle("nav-menu.scrolled");
      });
} 

