import "../../Styles/KeyBoard.css";
interface Props {
  onClick: (char: string) => void;
}
const KeyBoard = ({ onClick }: Props) => {
  const rows1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const rows2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const rows3 = ["Z", "X", "C", "V", "B", "N", "M"];
  
  // useEffect(()=>
  //   {
  //     document.addEventListener("keyup", (event) => onClick(event.key));
  //     return () =>
  //       {
  //         document.removeEventListener("keyup", (event) => onClick(event.key));
  //       }
  //   }
  // ,[onclick])
  return (
    <div className="keyboard" >
      <div className="keyboard__row">
        {rows1.map((key) => (
          <button
            key={key}
            className="key--letter"
            onClick={() => onClick(key)}
          >
            {key}
          </button>
        ))}
         <button
          className="key--bottom-right key--word key--w5"
          data-key="13"
          onClick={() => onClick("Delete")}
        >
          <span>Delete</span>
        </button>
      </div>
      <div className="keyboard__row">
        {rows2.map((key) => (
          <button
            key={key}
            className="key--letter"
            onClick={() => onClick(key)}
          >
            {key}
          </button>
        ))}

        <button
          className="key--bottom-right key--word key--w5"
          data-key="13"
          onClick={() => onClick("Enter")}
        >
          <span>Enter</span>
        </button>
      </div>
      <div className="keyboard__row">
        {rows3.map((key) => (
          <button
            key={key}
            className="key--letter"
            onClick={() => onClick(key)}
          >
            {key}
          </button>
        ))}
      </div>
    </div>
  );
};
export default KeyBoard;
