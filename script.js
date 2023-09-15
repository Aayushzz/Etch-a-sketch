let color = "Black";
let click = true;




function populateBoard(size) {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    board.innerHTML= '';
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        let square = document.createElement('div');
        square.classList.add("square");
        square.addEventListener('mouseover', colorSquare);
        square.style.backgroundColor = "white";
        board.insertAdjacentElement("beforeend", square);
    }
}
populateBoard(16);

function changeSize(input){
    if (click === true) {
        if (input >=2  && input <= 101) {
            populateBoard(input);
            console.log(click);
        } else {
        console.log("too many squares");
        }
    }
}

function colorSquare(){
    if (color === 'Rainbow'){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else{
        this.style.backgroundColor = color;
    }
}

function changeColor(choice){
    color = choice; 
}

function reset(){
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = "White");
}

document.querySelector('body').addEventListener('keydown', () => {
    click = !click;
})