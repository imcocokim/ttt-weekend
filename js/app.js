/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]


/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner


/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.square')

const messageEl = document.querySelector('h2')



/*----------------------------- Event Listeners -----------------------------*/
squareEls.forEach(function(square) {
  square.addEventListener('click', handleClick)
  }
)


/*-------------------------------- Functions --------------------------------*/
init ()

function init() {
  board = [null, null, null, null, null, null, null, null, null]
  turn = 1
  winner = null
  render()
}

function render() {
  board.forEach((square, idx) => {

    if (square === 1) {
      squareEls[idx].textContent = "X"
    } 
    
    if (square === -1) {
      squareEls[idx].textContent = "O"
    }
  }) 
  renderMsg()
}

function renderMsg () {
  if (winner === null) {
    messageEl.textContent = `It's ${turn === 1 ? "X" : "O"}'s turn!`
  } else if (winner === 'T') {
    messageEl.textContent = `It's a TIE! Try again!`
  } else {
    messageEl.textContent = `${turn === 1 ? "O" : "X"} is the winner!`
  }
}

function handleClick(evt){
  const sqIdx = evt.target.id.substring(2)
  return
}
