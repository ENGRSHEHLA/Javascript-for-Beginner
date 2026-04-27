const showDateBtn = document.getElementById("showDateBtn");
const emo = document.getElementById("emo");
const changeTextBtn = document.getElementById("changeTextBtn");
const abc = document.getElementById("abc");
const colorPicker = document.getElementById("colorPicker");
const startWaterBtn = document.getElementById("startWaterBtn");
const stopWaterBtn = document.getElementById("stopWaterBtn");
const waterImage = document.getElementById("waterImage");
const waterStatus = document.getElementById("waterStatus");

const WATER_GIF_SRC = "water-flow.gif";
const WATER_STATIC_SRC = "sea.jpg";

let triedGifLoad = false;

if (showDateBtn && emo) {
    showDateBtn.addEventListener("click", () => {
        emo.textContent = new Date().toString();
    });
}

if (changeTextBtn && abc) {
    changeTextBtn.addEventListener("click", () => {
        abc.textContent = "Hello Beginner!";
    });
}

if (colorPicker) {
    colorPicker.addEventListener("input", () => {
        document.body.style.backgroundColor = colorPicker.value;
    });
}

if (startWaterBtn && stopWaterBtn && waterImage && waterStatus) {
    startWaterBtn.addEventListener("click", () => {
        triedGifLoad = true;
        waterImage.classList.remove("water-active");
        waterImage.src = WATER_GIF_SRC;
        waterStatus.textContent = "Status: Playing GIF...";
    });

    stopWaterBtn.addEventListener("click", () => {
        triedGifLoad = false;
        waterImage.src = WATER_STATIC_SRC;
        waterImage.classList.remove("water-active");
        waterStatus.textContent = "Status: Stopped";
    });

    waterImage.addEventListener("error", () => {
        if (triedGifLoad) {
            waterImage.src = WATER_STATIC_SRC;
            waterImage.classList.add("water-active");
            waterStatus.textContent = "Status: GIF missing. Using animated water effect.";
            triedGifLoad = false;
        }
    });
}