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
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-slate-400 ">
        <h1 className="text-white text-4xl text-center pb-5 ">
          Password Generator
        </h1>
        <div className="flex flex-col rounded-lg overflow-hidden mb-4">
          <div className="flex justify-center items-center mb-4 ">
            <input
              className="outline-none w-full  py-2 px-3 "
              type="text"
              value={Password}
              readOnly
            />

            <button className="bg-blue-600  py-2 px-3 text-white">Copy</button>
          </div>
          <div className="flex flex-col gap-4 pl-12 py-10 items-start rounded-lg bg-gray-500">
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
          </div>
        </div>

        <button
          className="w-full bg-blue-600  text-2xl text-center text-white py-2 rounded-lg"
          onClick={generatePassword}
        >
          Generate
        </button>
      </div>
    </>
  );
}

export default App;
