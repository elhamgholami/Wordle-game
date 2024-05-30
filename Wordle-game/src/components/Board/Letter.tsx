import "../../Styles/Letter.css";
interface LetterProps {
  rowIndex: number;
  index: number;
  board: string[][];
  boardColor: string[][];
}

function Letter({ rowIndex, index, board, boardColor }: LetterProps) {
  const letter = board[rowIndex][index];
  const letterColor = boardColor[rowIndex][index];
  const animationDelay = `${index * 0.1}s`;
  return (
    <div
      className="letter"
      id={letterColor}
      style={{ animationDelay: animationDelay }}
    >
      {letter}
    </div>
  );
}

export default Letter;
