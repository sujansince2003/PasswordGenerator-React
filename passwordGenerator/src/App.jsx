import { useState, useCallback, useEffect, useRef } from "react";
import { toast, Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [isnumallowed, setIsnumallowed] = useState(false);
  const [ischarallowed, setIscharallowed] = useState(false);

  const [Password, setPassword] = useState("");

  const passwordRef = useRef(null);

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

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(Password);
    toast.success("Copied to Clipboard", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
      theme: "light",
      transition: Bounce,
    });
  }, [Password]);

  useEffect(() => {
    generatePassword();
  }, [length, ischarallowed, isnumallowed]);
  return (
    <>
      <div className="w-full md:w-[500px] mx-auto shadow-md rounded-lg px-12 py-3 my-8 bg-slate-400 ">
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
              ref={passwordRef}
            />

            <button
              className="bg-blue-600  py-2 px-3 text-white"
              onClick={() => copyPassword()}
            >
              Copy
            </button>
          </div>
          <div className="flex flex-col gap-2 pl-12 py-10 items-start rounded-lg bg-white">
            <div className="flex flex-col items-center">
              <label>Length: {length}</label>
              <input
                type="range"
                min={8}
                max={20}
                value={length}
                onChange={(e) => {
                  setLength((len) => e.target.value);
                }}
              />
            </div>
            <div>
              <input
                type="checkbox"
                id="numallowed"
                defaultChecked={isnumallowed}
                onChange={() => setIsnumallowed((numallowed) => !numallowed)}
              />
              <label htmlFor="numallowed"> Includes Number</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="charallowed"
                defaultChecked={ischarallowed}
                onChange={() => setIscharallowed((charallowed) => !charallowed)}
              />
              <label htmlFor="charallowed"> Includes Special Characters</label>
            </div>
          </div>
        </div>

        <button
          className="w-full bg-blue-600  text-2xl text-center text-white py-2 rounded-lg"
          onClick={generatePassword}
        >
          Generate
        </button>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
