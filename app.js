let card = document.getElementById('card');
let cardbtn = document.getElementById('card-btn');

card.addEventListener('mouseover', function handleMouseOver() {
    cardbtn.style.visibility = 'visible';
  });

  card.addEventListener('mouseout', function handleMouseOut() {
    cardbtn.style.visibility = 'hidden';
  });