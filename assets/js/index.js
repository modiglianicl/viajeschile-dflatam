// Habilitando Tooltips siguiendo doc BootStrap
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// Smooth Scroll

$(document).ready(function(){
  // Smooth scrolling en todos los links
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      // Previene el efecto ancla por defecto
      event.preventDefault();

      // Guardamos el hash
      var hash = this.hash;

      // Usamos el animate de jQuery (metodo) para agregar el smooth page scrolling
      // 800 Especifica los milisegundos que le tomara scrolear al area especifica (dentro del html y body)
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        window.location.hash = hash;
      });
    } 
  });
});


// Desaparecer contenidos cards

$(document).ready(function(){
  
  // Usamos la clase creada para identificar quienes pueden desaparecer
    $(".toggler-js").click(function(){
        $(this).toggle()
    })
})

