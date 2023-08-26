import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
    // setToDos(currentArray=>)
    // 두개 같은 의미 인데 위에 방식이 더 짧음
    // setToDos(function(currentArray){
    //   return
    // })sfsadfsaf
  };
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do. . ."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((myitem, index) => (
          <li key={index}>{myitem}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
