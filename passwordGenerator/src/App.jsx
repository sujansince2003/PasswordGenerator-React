import { useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  return (
    <>
      <h1 className="text-4xl text-center">Password Generator</h1>
    </>
  );
}

export default App;
