import { SetStateAction } from "react";
import { UpdateBoard, GetState } from "./boardHandler";

export const HandleKeyClick = (
    char: string,
    word: { rowIndex: number; index: number },
    board: string[][],
    boardColor: string[][],
    correctString: string,
    setWord: (value: SetStateAction<{ rowIndex: number; index: number }>) => void,
    setBoard: (value: SetStateAction<string[][]>) => void,
    setBoardColor: (value: SetStateAction<string[][]>) => void,
    setEmptyError: (value: SetStateAction<[string, number]>) => void,
    maxWordLength: number
  ) => {
    setEmptyError(["", -1]);
    if (char === "Delete") {
      if (word.index > 0) {
        const updatedBoard = UpdateBoard(board, word.rowIndex, word.index - 1, "");
        setBoard(updatedBoard);
        setWord((prevWord) => ({ ...prevWord, index: prevWord.index - 1 }));
      }
    } else if (char === "Enter") {
      if (board[word.rowIndex].join("") === correctString) alert("You Won!");
      if (word.index === maxWordLength) {
        const updatedBoardColor = boardColor.map((row, rowIndex) => 
          row.map((color, colIndex) => 
            rowIndex === word.rowIndex ? GetState(board[word.rowIndex][colIndex], correctString, colIndex) : color
          )
        );
        setBoardColor(updatedBoardColor);
        setWord((prevWord) => ({
          ...prevWord,
          rowIndex: prevWord.rowIndex + 1,
          index: 0,
        }));
      } else {
        setEmptyError(["error", word.rowIndex]);
        alert("Word is not complete");
      }
    } else if (word.index < maxWordLength) {
      const updatedBoard = UpdateBoard(board, word.rowIndex, word.index, char);
      setBoard(updatedBoard);
      setWord((prevWord) => ({ ...prevWord, index: prevWord.index + 1 }));
    }
  };
  