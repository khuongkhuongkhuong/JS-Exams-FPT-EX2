const tabBtns = document.querySelectorAll(".tab-btn");
const tabPanels = document.querySelectorAll(".tab-panel");

tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        tabBtns.forEach((b) => b.classList.remove("active"));
        tabPanels.forEach((p) => p.classList.remove("active"));

        btn.classList.add("active");
        document.getElementById(btn.dataset.tab).classList.add("active");
        if (btn.dataset.tab === "task1") {
            chooseName();
        } else if (btn.dataset.tab === "task2") {
            drawRectangle(x, y, width, height, color);
        } else if (btn.dataset.tab === "task3") {
            para3.textContent = chooseName2(names);
        }
    });
});

/* ============================================================
   Task 1
   ============================================================ */
const names = ["Chris", "Anne", "Colin", "Terri", "Phil", "Lola"];
const para1 = document.querySelector("#para1");

function chooseName() {
    const randomIndex = Math.floor(Math.random() * names.length);
    para1.textContent = names[randomIndex];
}

chooseName();

/* ============================================================
   Task 2
   ============================================================ */
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const x = 50;
const y = 50;
const width = 200;
const height = 120;
const color = "blue";

function drawRectangle(x, y, width, height, color) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

drawRectangle(x, y, width, height, color);

/* ============================================================
   Task 3
   ============================================================ */
const para3 = document.querySelector("#para3");

function random(lower, upper) {
    return Math.floor(Math.random() * (upper - lower)) + lower;
}

function chooseName2(arr) {
    const randomIndex = random(0, arr.length);
    return arr[randomIndex];
}

para3.textContent = chooseName2(names);
