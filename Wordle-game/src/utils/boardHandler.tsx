export const UpdateBoard = (board: string[][], row: number, col: number, value: string) => {
    const updatedBoard = [...board];
    updatedBoard[row][col] = value;
    return updatedBoard;
  };
  
  export const UpdateBoardColor = (boardColor: string[][], row: number, col: number, color: string) => {
    const updatedBoardColor = [...boardColor];
    updatedBoardColor[row][col] = color;
    return updatedBoardColor;
  };
  
  export const GetState = (letter: string, correctString: string, index: number) => {
    return letter === correctString[index]
      ? "Green"
      : correctString.includes(letter)
      ? "Yellow"
      : "Gray";
  };
  