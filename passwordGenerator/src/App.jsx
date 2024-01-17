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
  // generatePassword();
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 ">
        <h1 className="text-white text-center ">Password generator</h1>
        <div className="flex flex-col rounded-lg overflow-hidden mb-4">
          <input
            className="outline-none w-full py-1 px-3 rounded-lg mb-4"
            type="text"
            value={Password}
            readOnly
          />
          <div className="flex flex-col gap-4 pl-12 py-10 items-start bg-gray-500">
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
          </div>
        </div>

        <button onClick={generatePassword}>generate</button>
      </div>
    </>
  );
}

export default App;
