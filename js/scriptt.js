const balloonArea = document.getElementById("balloonArea");
const phoneDisplay = document.getElementById("phoneDisplay");

let digitsEntered = [];

function createBalloon(num) {
  const balloon = document.createElement("div");
  balloon.classList.add("balloon");
  balloon.textContent = num;

  positionBalloon(balloon);
  balloonArea.appendChild(balloon);

  balloon.addEventListener("click", () => {
    balloon.classList.add("pop");
    setTimeout(() => balloon.remove(), 300);

    digitsEntered.push(num);
    phoneDisplay.textContent = digitsEntered.join("");

    if (digitsEntered.length >= 10) {
      setTimeout(() => {
        const messageBox = document.createElement("div");
        messageBox.textContent = "Gotcha! Phone number saved :)";

        Object.assign(messageBox.style, {
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "#ffe4f0",
          color: "#333",
          padding: "30px 40px",
          borderRadius: "12px",
          fontSize: "22px",
          fontFamily: "'Patrick Hand', cursive",
          boxShadow: "0 0 15px rgba(255, 182, 193, 0.7)",
          border: "2px solid #cce6ff",
          zIndex: "9999"
        });

        document.body.appendChild(messageBox);

        setTimeout(() => {
          messageBox.remove();
          digitsEntered = [];
          phoneDisplay.textContent = "";
        }, 2500);
      }, 300);
    }
  });
}

function positionBalloon(balloon) {
  const x = Math.random() * (window.innerWidth - 60);
  const y = Math.random() * (window.innerHeight - 60);
  balloon.style.left = x + "px";
  balloon.style.top = y + "px";
}

function releaseBalloons() {
  setInterval(() => {
    const num = Math.floor(Math.random() * 10);
    createBalloon(num);
  }, 600);
}

releaseBalloons();
