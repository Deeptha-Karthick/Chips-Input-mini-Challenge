import "./styles.css";
import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [tags, setTags] = useState([]);

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setTags((prev) => [...prev, { input, id: prev.length + 1 }]);
      setInput("");
    }
  };

  const onCloseHandle = (el) => {
    setTags((prev) => {
      const newArr = [...prev];
      return newArr.filter((item) => item.id !== el.id);
    });
  };

  console.log("tags", tags);
  return (
    <div className="App">
      <h1>Chips Input</h1>
      <div className="input-container">
        <input
          placeholder="Type & hit Enter"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => handleEnter(e)}
        />
      </div>
      <div className="tags-container">
        {tags.map((el, index) => {
          return (
            <div className="tag" key={el.id}>
              <div className="tag-text">{el.input}</div>
              <div
                className="close"
                onClick={() => {
                  onCloseHandle(el);
                }}
              >
                x
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
