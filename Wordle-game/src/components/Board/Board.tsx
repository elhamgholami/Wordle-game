import Letter from "./Letter"
import '../../Styles/Board.css'
interface BoardProps
{
  board: string[][];
  boardColor: string[][];
}

function Board({board, boardColor}:BoardProps) {
  return (
    <div className="column">
      <div className="row">
        <Letter rowIndex={0} index={0} board={board} boardColor = {boardColor}></Letter>
        <Letter  rowIndex={0} index={1} board={board} boardColor = {boardColor}></Letter>
        <Letter  rowIndex={0} index={2} board={board} boardColor = {boardColor}></Letter>
        <Letter  rowIndex={0} index={3} board={board} boardColor = {boardColor}></Letter>
        <Letter  rowIndex={0} index={4} board={board} boardColor = {boardColor}></Letter>
      </div>
      <div className="row">
        <Letter rowIndex={1} index={0} board={board} boardColor = {boardColor}></Letter>
        <Letter  rowIndex={1} index={1} board={board} boardColor = {boardColor}></Letter>
        <Letter  rowIndex={1} index={2} board={board} boardColor = {boardColor}></Letter>
        <Letter  rowIndex={1} index={3} board={board} boardColor = {boardColor}></Letter>
        <Letter  rowIndex={1} index={4} board={board} boardColor = {boardColor}></Letter>
      </div>
      <div className="row">
        <Letter rowIndex={2} index={0} board={board} boardColor = {boardColor}></Letter>
        <Letter  rowIndex={2} index={1} board={board} boardColor = {boardColor}></Letter>
        <Letter  rowIndex={2} index={2} board={board} boardColor = {boardColor}></Letter>
        <Letter  rowIndex={2} index={3} board={board} boardColor = {boardColor}></Letter>
        <Letter  rowIndex={2} index={4} board={board} boardColor = {boardColor}></Letter>
      </div>
    </div>
  )
}

export default Board