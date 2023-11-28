const container = document.getElementById("container");
const player = document.getElementById("player");
const computer = document.getElementById("computer");
const letter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
console.log(player);
console.log(computer);

function createCellPlayer() {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const cell = document.createElement("div");

      cell.classList.add("cell");
      cell.classList.add(i, j);

      player.appendChild(cell);
      cell.innerHTML += `${i} :${j} `;
      if (i == 0) {
        cell.innerHTML += `<span class="cell-number-top">${j + 1}</span>`;
      }
      if (j == 0) {
        cell.innerHTML += `<span class="cell-number-right">${letter[i]}</span>`;
      }
      cell.addEventListener("click", () => {
        cell.classList.toggle("red");
        console.log(cell.classList);
      });
    }
  }
}

function createCellComputer() {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      computer.appendChild(cell);
      if (i == 0) {
        cell.innerHTML += `<span class="cell-number-top">${j + 1}</span>`;
      }
      if (j == 0) {
        cell.innerHTML += `<span class="cell-number-right">${letter[i]}</span>`;
      }
      cell.addEventListener("click", () => {
        cell.classList.toggle("red");
        console.log(cell.classList);
      });
    }
  }
}
createCellPlayer();

createCellComputer();
