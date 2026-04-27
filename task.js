const showDateBtn = document.getElementById("showDateBtn");
const emo = document.getElementById("emo");
const changeTextBtn = document.getElementById("changeTextBtn");
const abc = document.getElementById("abc");
const colorPicker = document.getElementById("colorPicker");

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