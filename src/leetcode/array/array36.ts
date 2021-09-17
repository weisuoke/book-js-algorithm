const isValidSudoku = (board: string[][]): boolean => {
  const rows = new Array(9).fill(0).map(() => new Array(9).fill(0));
  const column = new Array(9).fill(0).map(() => new Array(9).fill(0));
  const subboxes = new Array(3)
    .fill(0)
    .map(() => new Array(3).fill(0).map(() => new Array(9).fill(0)));
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const c = board[i][j];
      if (c !== '.') {
        const index = c.charCodeAt(0) - '0'.charCodeAt(0) - 1;
        rows[i][index]++;
        column[j][index]++;
        subboxes[Math.floor(i / 3)][Math.floor(j / 3)][index]++;
        if (
          rows[i][index] > 1 ||
          column[j][index] > 1 ||
          subboxes[Math.floor(i / 3)][Math.floor(j / 3)][index] > 1
        ) {
          return false;
        }
      }
    }
  }

  return true;
};
