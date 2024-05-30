import { useEffect } from "react";
import "../../Styles/KeyBoard.css";

interface Props {
  onClick: (char: string) => void;
}

const KeyBoard = ({ onClick }: Props) => {
  const rows1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const rows2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const rows3 = ["Z", "X", "C", "V", "B", "N", "M"];

  useEffect(() => {
    const handleKeyUp = (event: KeyboardEvent) => {
      const key = event.key.toUpperCase();
      if (
        rows1.includes(key) ||
        rows2.includes(key) ||
        rows3.includes(key) ||
        key === "ENTER" ||
        key === "BACKSPACE"
      ) {
        onClick(
          key === "BACKSPACE" ? "Delete" : key === "ENTER" ? "Enter" : key
        );
      }
    };

    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [onClick]);

  return (
    <div className="keyboard">
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
      </div>
      <div
        className="keyboard__row"
        style={{
          paddingLeft: 30,
        }}
      >
        {rows2.map((key) => (
          <button
            key={key}
            className="key--letter"
            onClick={() => onClick(key)}
          >
            {key}
          </button>
        ))}
      </div>
      <div className="keyboard__row">
        <button
          className="key--bottom-right key--word key--w5"
          onClick={() => onClick("Delete")}
        >
          <span>Delete</span>
        </button>
        {rows3.map((key) => (
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
          onClick={() => onClick("Enter")}
        >
          <span>Enter</span>
        </button>
      </div>
    </div>
  );
};

export default KeyBoard;
