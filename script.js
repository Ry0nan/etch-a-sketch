let color = "black";
let click = true;

function populateBoard(size) {
    let board = document.querySelector('.drawing-board');
    board.innerHTML = ''; // Clear old squares
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.addEventListener("mouseover", colorSquare);
        square.style.backgroundColor = 'white';
        board.insertAdjacentElement('beforeend', square);
    }
}

populateBoard(16);

function changeSize(input){
    if (input >= 2 && input <= 100){
        document.querySelector('.error').style.display = 'none';
        populateBoard(input);
    } else {
        document.querySelector('.error').style.display = 'flex';
    }

}

function colorSquare(){
   if (click) { 
    if (color === 'random') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
       this.style.backgroundColor = color;
    }
   }
}

function changeColor(choice) {
    color = choice;
}

function resetBoard() {
    let squares = document.querySelectorAll('.drawing-board div');
    squares.forEach((div) => div.style.backgroundColor = 'white');
}

document.querySelector('body').addEventListener('click', (e) => {
    // Prevent toggling if the user clicked a button, input, or the mode display itself
    if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'INPUT' && !e.target.classList.contains('mode')) {
        click = !click;
        document.querySelector('.mode').textContent = click ? "Mode: Coloring" : "Mode: Not Coloring";
    }
});



