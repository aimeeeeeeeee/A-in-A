const airplane = document.getElementById('airplane');
let positionRight = 0;

function moveAirplane(timestamp) {
    positionRight += 5; // Adjust this value to change the airplane's speed
    airplane.style.right = `${positionRight}px`;

    // Calculate the vertical position using a sine function
    const amplitude = 70; // Adjust this value to change the swiveling height
    const frequency = 0.01; // Adjust this value to change the swiveling frequency
    const verticalPosition = amplitude * Math.sin(frequency * positionRight);

    airplane.style.top = `${verticalPosition}px`;

    if (positionRight >= window.innerWidth) {
        positionRight = -airplane.clientWidth;
    }

    requestAnimationFrame(moveAirplane);
}

requestAnimationFrame(moveAirplane);

document.addEventListener('DOMContentLoaded', function() {
  const rotateButton = document.getElementById('rotateButton');
  const airplane = document.getElementById('airplane');

  rotateButton.addEventListener('click', function() {
    airplane.style.animation = 'rotation 1s linear';
    airplane.style.animationIterationCount = '1';
    airplane.style.transform = 'rotate(360deg)';
    airplane.addEventListener('animationend', () => {
      airplane.style.animation = '';
    });
  });
});
