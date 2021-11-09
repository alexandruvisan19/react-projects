// function that calculates the winner
export function calculateWinner(squares) {
  // get out set of winning lines
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // loop through this set
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    // check to see if values in our squaress array fulfill the winning lines
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      // if so, return X or O
      return squares[a];
    }
  }
  // else, return nothing
  return null;
}
