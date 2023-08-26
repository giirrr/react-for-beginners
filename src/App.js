import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("hi :)");
    return () => console.log("bye :(");
  }, []);
  return <h1>Hello</h1>;
}
// 아래 위 코드 둘 다 동일 기능

//   useEffect(function () {
//     console.log("hi :)");
//     return function () {
//       console.log("bye :(");
//     };
//   }, []);
//   return <h1>Hello</h1>;
// }

//   function byFn() {
//     console.log("bye :(");
//   }
//   function hiFn() {
//     console.log("created :)");
//     return byFn;
//   }
//   useEffect(hiFn, []);
//   return <h1>Hello</h1>;
// }

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
