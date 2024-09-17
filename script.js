//calcular la edad
function calcularEdad(fechaNacimiento) {
  const hoy = new Date();
  const nacimiento = new Date(fechaNacimiento);
  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  const mes = hoy.getMonth() - nacimiento.getMonth();
  if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
    edad--;
  }
  document.getElementById('edad').textContent = edad;
}

// calcular edad
calcularEdad('2001-07-01');

// descarga de CV
document.getElementById('descargar-cv').addEventListener('click', function() {
  window.open('docs/cv2024.pdf', '_blank');
});

// Animación para las barras de habilidades
window.addEventListener('scroll', function() {
  var habilidadesSection = document.querySelector('.habilidades');
  
  // Verificamos si el elemento .habilidades existe
  if (habilidadesSection) {
    var habilidadesPos = habilidadesSection.getBoundingClientRect().top;
    var screenPos = window.innerHeight / 1.3;

    if (habilidadesPos < screenPos) {
      var barras = document.querySelectorAll('.relleno');
      
      // Verificamos si hay barras
      if (barras.length > 0) {
        barras.forEach(function(barra) {
          var skillValue = barra.getAttribute('data-skill');
          barra.style.width = skillValue;
        });
      }
    }
  }
});

