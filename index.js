document.addEventListener("DOMContentLoaded", function() {
  const wordItems = document.querySelectorAll('.word-item');

  wordItems.forEach(item => {
    const circles = item.querySelectorAll('.circle');
    let selectedCircles = 0;

    circles.forEach(circle => {
      circle.addEventListener('click', function() {
        if (!circle.classList.contains('selected')) {
          selectedCircles++;
          circle.classList.add('selected');
        } else {
          selectedCircles--;
          circle.classList.remove('selected');
        }
      });
    });

    const checkButton = item.querySelector('.check-btn');
    checkButton.addEventListener('click', function() {
      const wordElement = item.querySelector('.word');
      const correctSyllables = parseInt(wordElement.dataset.syllables);

      if (selectedCircles === correctSyllables) {
        Swal.fire({
          icon: 'success',
          title: '¡Correcto!',
          text: `La palabra "${wordElement.textContent}" tiene ${correctSyllables} sílabas.`
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Incorrecto',
          text: `La palabra "${wordElement.textContent}" tiene ${correctSyllables} sílabas, pero seleccionaste ${selectedCircles}.`
        });
      }

      selectedCircles = 0;
      circles.forEach(circle => circle.classList.remove('selected'));
    });
  });
});
