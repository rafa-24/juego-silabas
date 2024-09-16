document.addEventListener('DOMContentLoaded', () => {
  // Selecciona todos los botones de verificación
  const checkButtons = document.querySelectorAll('.check-btn');

  // Agrega un evento de clic a cada botón de verificación
  checkButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Llama a la función para verificar el conteo de sílabas
      checkSyllableCount(button);
    });
  });

  // Función para verificar el conteo de sílabas
  function checkSyllableCount(button) {
    const wordGroup = button.closest('.word-item');
    const word = wordGroup.querySelector('.word');
    const correctSyllables = parseInt(word.dataset.syllables, 10);
    const selectedCircles = wordGroup.querySelectorAll('.circle.selected');
    const syllableCount = selectedCircles.length;

    // Muestra una alerta si el número de sílabas seleccionadas es correcto
    if (syllableCount === correctSyllables) {
      alert('¡Respuesta correcta!');
    } else {
      alert('Respuesta incorrecta. Intenta de nuevo.');
    }
  }
});
