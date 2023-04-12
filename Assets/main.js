const button = document.getElementById('lightbtn');
const circles = document.querySelectorAll('.fa-circle');
const star = document.querySelectorAll('.stars');

function toggleLights() {
  circles.forEach(circle => {
    circle.classList.toggle('light');

    if (circle.classList.contains('light')) {
      circle.classList.remove('fa-beat');
      circle.classList.remove('clicked');
    } else {
      circle.classList.add('fa-beat');
      circle.classList.add('clicked');
    }
  });

  star.forEach(stars => {
    stars.classList.toggle('light');

    if (stars.classList.contains('light')) {
      stars.classList.remove('fa-beat-fade');
      stars.classList.remove('starClicked');
    } else {
      stars.classList.add('fa-beat-fade');
      stars.classList.add('starClicked');
    }
  });
}

let intervalID;

button.addEventListener('click', function() {
  if (intervalID) {
    clearInterval(intervalID);
    intervalID = null;
  } else {
    intervalID = setInterval(toggleLights, 1000);
  }
});