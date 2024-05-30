import Board from "./components/Board/Board";
import { useState } from "react";
import "./App.css";
import KeyBoard from "./components/KeyBoard/KeyBoard";
import { boardColorDefault, boardDefault } from "./words";
import { HandleKeyClick } from "./utils/KeyBoardHandler";

const correctString = "QUERY";
const maxWordLength = 5;

const App = () => {
  const [board, setBoard] = useState(boardDefault);
  const [boardColor, setBoardColor] = useState(boardColorDefault);
  const [word, setWord] = useState({ rowIndex: 0, index: 0 });
  const [emptyError, setEmptyError] = useState<[string, number]>(["", -1]);

  return (
    <div className="App">
      <nav>wordle</nav>
      <div className="game">
        <Board board={board} boardColor={boardColor} error={emptyError} />
        <KeyBoard onClick={(char) => HandleKeyClick(
          char,
          word,
          board,
          boardColor,
          correctString,
          setWord,
          setBoard,
          setBoardColor,
          setEmptyError,
          maxWordLength
        )} />
      </div>
    </div>
  );
};

export default App;
