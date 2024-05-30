import Letter from "./Letter";
import "../../Styles/Board.css";
interface BoardProps {
  board: string[][];
  boardColor: string[][];
  error:[string, number];
}

function Board({ board, boardColor, error }: BoardProps) {
  return (
    <div className="column">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="row" id={error[1]==rowIndex?error[0]:""} >
          {row.map((_, colIndex) => (
            <Letter
              key={colIndex}
              rowIndex={rowIndex}
              index={colIndex}
              board={board}
              boardColor={boardColor}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;