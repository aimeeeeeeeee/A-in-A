const airplane = document.getElementById('airplane');
let positionRight = 100;

function moveAirplane(timestamp) {
    positionRight += 5; 
    airplane.style.right = `${positionRight}px`;

    // Calculate the vertical position using a sine function
    const amplitude = 500; // Adjust this value to change the swiveling height
    const frequency = 0.0015; // Adjust this value to change the swiveling frequency
    const verticalPosition = amplitude * Math.sin(frequency * positionRight);

    airplane.style.top = `${verticalPosition}px`;

    if (positionRight >= window.innerWidth) {
        positionRight = -airplane.clientWidth;
    }

    requestAnimationFrame(moveAirplane);
}


document.addEventListener('DOMContentLoaded', function() {
  const glowButton = document.getElementById('glowButton');
  const airplane = document.getElementById('airplane');

  glowButton.addEventListener('click', function() {
    airplane.classList.toggle('glow');
  });
});



requestAnimationFrame(moveAirplane);

