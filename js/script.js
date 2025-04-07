
const images = [
    "NSBE_51st_National_Convention_Chicago_IL.jpeg",
    "claudia_birthday.jpeg",
    "Yosans_23rd_Birthday_Celebration_Cheesecake_Factory.jpeg",
    "NSBE_2024_Fall_Regional_Conference_San_Diego_CA.jpeg",
    "2024_Eid_Celebration_Denver_CO.jpeg"
];


const altText = {
    "NSBE_51st_National_Convention_Chicago_IL.jpeg": "NSBE 51st National Convention, Chicago, IL",
    "Claudia_Surprise_Birthday_Denver_CO.jpeg": "Claudia's Surprise Birthday Dinner, Denver, CO",
    "Yosans_23rd_Birthday_Celebration_Cheesecake_Factory.jpeg": "Yosan's 23rd Birthday Celebration, Cheesecake Factory",
    "NSBE_2024_Fall_Regional_Conference_San_Diego_CA.jpeg": "NSBE 2024 Fall Regional Conference, San Diego, California",
    "2024_Eid_Celebration_Denver_CO.jpeg": "2024 Eid Celebration, Denver, CO"
};


const thumbBar = document.getElementById("thumb-bar");
const displayedImg = document.getElementById("current-image");
const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

thumbBar.innerHTML = '';


images.forEach(image => {
    const newImage = document.createElement("img");
    newImage.src = image;
    newImage.alt = altText[image];
    thumbBar.appendChild(newImage);

   
    newImage.addEventListener("click", function() {
        displayedImg.src = image;
        displayedImg.alt = altText[image];
    });
});


btn.addEventListener("click", function() {
    if (btn.classList.contains("dark")) {
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)"; 
    } else {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
    }
});
