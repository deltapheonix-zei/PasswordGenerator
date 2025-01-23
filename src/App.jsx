import { useCallback, useState, useEffect, useRef } from "react";
import backgroundImage from "./assets/mesh-gradient.png";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [upperAllowed, setUpperAllowed] = useState(false);
  const [lowerAllowed, setLowerAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [toastVisible, setToastVisible] = useState(false);

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "";
    if (upperAllowed) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowerAllowed) str += "abcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%&-_/+=?";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, upperAllowed, lowerAllowed, charAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 32);
    window.navigator.clipboard.writeText(password);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2000);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, upperAllowed, lowerAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="w-full h-screen relative" 
  style={{ 
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}>
      
      <div className="w-full h-full flex items-center justify-center absolute top-0 left-0 p-4">
        <div className="w-full max-w-md mx-auto shadow-2xl rounded-2xl brightness-105 px-4 py-6 bg-opacity-100 backdrop-blur-3xl border border-white/20 text-gray-50 animate-fade-in">
          <h1 className="text-center text-3xl font-semibold mb-6">
            Password Generator
          </h1>
          <div className="flex shadow rounded-2xl overflow-hidden mb-4">
            <input
              type="text"
              value={password}
              className="outline-none font-mono w-full py-2 px-3 bg-white/20 placeholder-white/50 text-gray-50 pointer-events-none text-lg font-normal"
              placeholder="Password"
              readOnly
              ref={passwordRef}
            />
            <button
              onClick={copyPasswordToClipboard}
              className="outline-none bg-white/20 text-gray-50 px-3 py-2 shrink-0 hover:bg-white/30 transition-transform transform hover:scale-105"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col gap-y-4 text-sm">
            <div className="flex items-center justify-between">
              <label className="font-bold">Length: {length}</label>
              <input
                type="range"
                min={5}
                max={32}
                value={length}
                className="cursor-pointer accent-white"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setUpperAllowed((prev) => !prev)}
                className={`py-2 px-2 rounded-2xl transition duration-300 text-sm font-semibold ${
                  upperAllowed ? "bg-white/20 border-2 border-green-300" : "bg-white/20"
                } hover:bg-white/30 transform hover:scale-105`}
              >
                Uppercase Letters
              </button>
              <button
                onClick={() => setLowerAllowed((prev) => !prev)}
                className={`py-2 px-2 rounded-2xl transition duration-300 text-sm font-semibold ${
                  lowerAllowed ? "bg-white/20 border-2 border-green-300" : "bg-white/20"
                } hover:bg-white/30 transform hover:scale-105`}
              >
                Lowercase Letters
              </button>
              <button
                onClick={() => setNumAllowed((prev) => !prev)}
                className={`py-2 px-2 rounded-2xl transition duration-300 text-sm font-semibold ${
                  numAllowed ? "bg-white/20 border-2 border-green-300" : "bg-white/20"
                } hover:bg-white/30 transform hover:scale-105`}
              >
                Numbers
              </button>
              <button
                onClick={() => setCharAllowed((prev) => !prev)}
                className={`py-2 px-2 rounded-2xl transition duration-300 text-sm font-semibold ${
                  charAllowed ? "bg-white/20 border-2 border-green-300" : "bg-white/20"
                } hover:bg-white/30 transform hover:scale-105`}
              >
                Symbols
              </button>
            </div>
            <button
              onClick={passwordGenerator}
              className="mt-4 w-full bg-white/20 text-gray-50 py-2 rounded-2xl hover:bg-white/30 transition-transform transform hover:scale-105 duration-300 text-sm font-bold"
            >
              Regenerate Password
            </button>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {toastVisible && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-md text-gray-50 px-4 py-2 rounded-2xl shadow-lg animate-slide-up">
          ✅ Password copied to clipboard!
        </div>
      )}
    </div>
  );
}

export default App;