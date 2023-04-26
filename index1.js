const airplane = document.querySelector(".airplane");
const tail = document.querySelector(".tail");
const accelerateButton = document.getElementById("accelerate");
let positionRight = 3;
let speed = 3; // Normal speed

function moveAirplane(timestamp) {
    positionRight += speed; // Adjust this value to change the airplane's speed

    airplane.style.right = `${positionRight}px`;

    if (positionRight >= window.innerWidth + airplane.clientWidth) {
        positionRight = -airplane.clientWidth;
    }

    requestAnimationFrame(moveAirplane);
}


function accelerateAndShowTail() {
    speed = 12;
    tail.style.display = "block";

    setTimeout(() => {
        speed = 3;
        tail.style.display = "none";
    }, 2000);
}



accelerateButton.addEventListener("click", accelerateAndShowTail);


requestAnimationFrame(moveAirplane);

