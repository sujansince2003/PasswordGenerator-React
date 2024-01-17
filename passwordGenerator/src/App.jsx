import { useState, useCallback } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [isnumallowed, setIsnumallowed] = useState(false);
  const [ischarallowed, setIscharallowed] = useState(false);

  const [Password, setPassword] = useState("");

  const generatePassword = useCallback(() => {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (isnumallowed) {
      string += "0123456789";
    }
    if (ischarallowed) {
      string += "!@#$%^&*()-_=+[]{}|;:,.<>?/";
    }

    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * string.length + 1);
      pass += string.charAt(char);
    }
    setPassword(pass);
  }, [length, ischarallowed, isnumallowed, setPassword]);
  generatePassword();
  return (
    <>
      <h1 className="text-4xl text-center">Password Generator + {Password}</h1>
      <button onClick={generatePassword}>xdddd</button>
      <h2></h2>
    </>
  );
}

export default App;
