import "../../Styles/Letter.css"
interface LetterProps {
  rowIndex: number;
  index: number;
  board: string[][];
  boardColor: string[][];
}

function Letter({ rowIndex, index, board, boardColor }: LetterProps) {
  const letter = board[rowIndex][index];
  const letterColor = boardColor[rowIndex][index];


  return (
    <div className="letter" id={letterColor}>
      {letter}
    </div>
  );
}

export default Letter;
