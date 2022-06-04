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
const resetBtn = document.querySelector('button')


/*----------------------------- Event Listeners -----------------------------*/
squareEls.forEach(function(square) {
  square.addEventListener('click', handleClick)
  }
)
resetBtn.addEventListener('click', init) 

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
    if (square !== null) {
      squareEls[idx].textContent = square === 1 ? 'X' : 'O'
    }
    if (!square) {
      squareEls[idx].textContent = " "
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
  if (board[sqIdx] !== null || winner !== null){
  return
  }
  board[sqIdx] = turn
  turn *= -1
  getWinner()
  render()
}

function getWinner() {
  for(let i = 0; i < winningCombos.length; i++) {
    if (Math.abs(board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]]) === 3) {
      winner = turn
      return
    } else if (!board.includes(null)) {
      winner = 'T'
    }
  }
}


//render()
//wanted to simplify code below. Ben suggestedn lines 41-42
//if (square === 1) {
//   squareEls[idx].textContent = "X"
// } 
// if (square === -1) {
//   squareEls[idx].textContent = "O"
// }
// this worked but suggested that we should not use it because a ternary is meant to have two options:
//square === 1 ? (squareEls[idx].textContent = "X") : square === -1 ? (squareEls[idx].textContent = "O") : null 

//getWinner() notes what these represent. Used console.log a thousand times to truly understanding what parts they were calling.
//winningCombos[0] = first array within winningCombos array
//winningCombos[0][0] = [index of array][index of element]

//getWinner()
//changed board.includes(null) === false to !board.includes(null) line 77
//not sure if it is best practice but it works.

//handleClick()
//evt.target.id.substring(2) = pulling the integer which is index of 2 from the id name sq0
//played around with also parseInt(evt.target.id.substring(2)) if it was neccessary
//it works without parseInt. Thought that we would have to change it into and integer because it was intially coming out of a string.

//renderMsg()
//THIS BLEW/MESSED UP MY MIND with the help of emily
//messageEl.textContent = `${turn === 1 ? "O" : "X"} is the winner!`
//the next TURN would be stated as the winner so it has to be this 1 = "O" and -1 = "X"