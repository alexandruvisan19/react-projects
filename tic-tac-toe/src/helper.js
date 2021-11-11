// function that calculates the winner
export const calculateWinner = (square) => {
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
    if (square[a] && square[a] === square[b] && square[b] === square[c]) {
      // if so, return X or O
      return square[a];
    }
  }
  // else, return nothing
  return null;
};
