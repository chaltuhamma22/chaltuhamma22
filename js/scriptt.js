const balloonArea = document.getElementById("balloonArea");
const phoneDisplay = document.getElementById("phoneDisplay");

let digitsEntered = [];
let digitCount = {};
let balloonInterval = null;

function createBalloon(num) {
  const balloon = document.createElement("div");
  const isTrapped = Math.random() < 0.3;

  balloon.className = "balloon";
  balloon.textContent = num;
  balloon.dataset.trapped = isTrapped;

  if (isTrapped) {
    balloon.style.transform = "scale(0.75)";
    balloon.style.opacity = "0.95";
  }

  positionBalloon(balloon);
  balloonArea.appendChild(balloon);

  balloon.onclick = () => {
    if (balloon.dataset.trapped === "true") {
      balloon.classList.add("pop");
      setTimeout(() => balloon.remove(), 300);
      return;
    }

    digitsEntered.push(num);
    phoneDisplay.textContent = digitsEntered.join("");

    balloon.style.transition = "opacity 0.4s ease";
    balloon.style.opacity = "0";
    setTimeout(() => balloon.remove(), 400);

    if (digitsEntered.length === 10) {
      finishInput();
    }
  };
}

function positionBalloon(balloon) {
  const x = Math.random() * (window.innerWidth - 420) + 300;
  const y = Math.random() * (window.innerHeight - 250) + 160;
  balloon.style.left = x + "px";
  balloon.style.top = y + "px";
}

function eraseRandomDigit() {
  if (digitsEntered.length === 0) return;
  const i = Math.floor(Math.random() * digitsEntered.length);
  const removed = digitsEntered.splice(i, 1)[0];
  digitCount[removed]--;
  phoneDisplay.textContent = digitsEntered.join("");
  showEraseMessage();
}

function showEraseMessage() {
  const notice = document.createElement("div");
  notice.textContent = "Number erased! Try again.";
  Object.assign(notice.style, {
    position: "fixed",
    top: "20%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "#fff",
    color: "#d10000",
    padding: "20px 30px",
    borderRadius: "12px",
    fontSize: "20px",
    fontFamily: "'Patrick Hand', cursive",
    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
    zIndex: "9999"
  });

  document.body.appendChild(notice);
  setTimeout(() => notice.remove(), 2000);
}

function startBalloons() {
  balloonInterval = setInterval(() => {
    const value = Math.floor(Math.random() * 10);
    createBalloon(value);
  }, 600);

  setTimeout(() => {
    if (digitsEntered.length > 0 && digitsEntered.length < 10) {
      eraseRandomDigit();
    }
  }, Math.random() * 2000 + 4000);

  setTimeout(() => {
    if (digitsEntered.length > 0 && digitsEntered.length < 10) {
      eraseRandomDigit();
    }
  }, Math.random() * 2000 + 7000);
}

function resetGame() {
  digitsEntered = [];
  digitCount = {};
  phoneDisplay.textContent = "";
  document.querySelectorAll(".balloon").forEach(b => b.remove());
  clearInterval(balloonInterval);
  startBalloons();
}

function finishInput() {
  clearInterval(balloonInterval);
  removeBalloons();

  const messageBox = document.createElement("div");
  messageBox.textContent = "Gotcha! Phone number saved :)";

  Object.assign(messageBox.style, {
    position: "fixed",
    top: "45%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "#ffe4f0",
    color: "#222",
    padding: "30px 40px",
    borderRadius: "12px",
    fontSize: "24px",
    fontWeight: "bold",
    fontFamily: "'Patrick Hand', cursive",
    boxShadow: "0 0 20px rgba(255, 182, 193, 0.6)",
    border: "2px solid #cce6ff",
    zIndex: "9999",
    textAlign: "center"
  });

  const restart = document.createElement("button");
  restart.textContent = "Try Again";

  Object.assign(restart.style, {
    marginTop: "20px",
    fontSize: "18px",
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    background: "#cce6ff",
    cursor: "pointer",
    fontFamily: "'Patrick Hand', cursive"
  });

  restart.onclick = () => {
    messageBox.remove();
    resetGame();
  };

  messageBox.appendChild(document.createElement("br"));
  messageBox.appendChild(restart);
  document.body.appendChild(messageBox);
}

function removeBalloons() {
  document.querySelectorAll(".balloon").forEach(el => el.remove());
}

startBalloons();
