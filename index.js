const points = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1, 0];

const firstInput = document.getElementById("first");
const secondInput = document.getElementById("second");
const racesInput = document.getElementById("races");
const resultsTableBody = document.getElementById("results");
const extraDiv = document.getElementById("extra");

let extra = true;

oninput = () => {
    const required = (racesInput.value - 1) * (25 + extra) - (firstInput.value - secondInput.value);
    const lines = [];
    for (let a = 0; a < points.length; a++) {
        for (let b = a + 1; b < points.length; b++) {
            let diff = points[a] - points[b];
            if (diff - 1 > required && extra) {
                lines.push(`<tr><td>${a + 1}</td><td class="speed">${b + 1}</td></tr>`);
                break;
            }
            if (diff > required) {
                lines.push(`<tr><td>${a + 1}</td><td>${b + 1}</td></tr>`);
                break;
            }
            if (diff + 1 > required && extra) {
                lines.push(`<tr><td class="speed">${a + 1}</td><td>${b + 1}</td></tr>`);
                break;
            }
        }
    }
    resultsTableBody.innerHTML = lines.join("");
};


extraDiv.onclick = () => {
    extra = !extra;
    extraDiv.textContent = extra ? "Yes" : "No";
    oninput();
}

document.getElementById("points").tBodies[0].innerHTML = points.map((value, index) => `<tr><td>${index + 1}</td><td>${value}</td></tr>`).join("");


oninput();