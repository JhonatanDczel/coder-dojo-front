import { useEffect, useState } from "react";
import '../../assets/DojoType.css'
import sentences from "../../utils/sentences";

function DisplayArea() {
  const [result, setResult] = useState(false);
  const [sentence, setSentence] = useState(
    sentences[Math.floor(Math.random() * sentences.length)].toLowerCase()
  );
  const [accuracy, setAccuracy] = useState(0);
  const [wordpermin, setWordPerMin] = useState(0);
  const [timeTaken, setTimeTaken] = useState(0);
  const [errors, setErrors] = useState(0);
  const [isExploding, setIsExploding] = useState(false);
  if (localStorage.getItem("wpm") === null) {
    localStorage.setItem("wpm", 0);
  }
  let index = 0;
  let countError = 0;
  let timer = 0;
  let start = new Date().getTime();

  const handleKeyPress = (event) => {
    setIsExploding(false);
    if (event.key === "Enter") return;
    setInterval(() => {
      timer++;
    }, 1000);
    setResult(false);
    const spanElement = document.createElement("span");
    spanElement.className = "absolute left-0 top-4";
    spanElement.innerText = "_";

    const currentElement = document.getElementById(`${index}`);

    if (index > 0) {
      const prevElement = document.getElementById(`${index - 1}`);
      const prevSpanElement = prevElement.querySelector(
        ".absolute.left-0.top-4"
      );
      if (prevSpanElement) {
        prevElement.removeChild(prevSpanElement);
      }
    }

    if (event.key === sentence.charAt(index)) {
      currentElement.classList.add("text-white");
      currentElement.appendChild(spanElement);

      index++;
    } else {
      console.log("else block");
      document.getElementById(`${index}`).classList.add("text-red-500");

      // index++
      countError++;
    }

    if (index === sentence.length) {
      clearInterval();
      console.log(countError);
      let current = new Date().getTime();
      let wpm =
        (sentence.length - countError) / 5 / ((current - start) / 60000);
      if (parseInt(localStorage.getItem("wpm")) <= wpm) {
        setIsExploding(true);
        localStorage.setItem("wpm", Math.floor(wpm));
      }
      setErrors(countError);
      setTimeTaken((current - start) / 1000);
      setWordPerMin(Math.floor(wpm));
      setAccuracy(((sentence.length - countError) / sentence.length) * 100);
      setSentence(
        sentences[Math.floor(Math.random() * sentences.length)].toLowerCase()
      );
      setResult(true);
      start = index = countError = 0;
    }
  };

  function WPA() {
    return (
      <div>
        <h1 className="text-[40px] text-yellow-400">{wordpermin} WPM</h1>
        <h1 className="text-[30px] text-white">
          Precisión {accuracy.toFixed(2)}%
        </h1>
        <h1 className="text-[30px] text-green-500">
          Tiempo {timeTaken.toFixed(2)}s
        </h1>
        <h1 className="text-[30px] text-red-500">Errores {errors}</h1>
      </div>
    );
  }

  function TextArea() {
    return (
      <div
        id="textarea"
        className="text-3xl text-center text-gray-500 w-screen p-10 relative bottom-20"
      >
        {sentence.split("").map((letter, index) => {
          return (
            <span className="relative" id={index} key={index}>
              {letter}
            </span>
          );
        })}
      </div>
    );
  }
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [result]);

  // console.log(handleKeyPress())
  return (
    <div className="flex flex-col justify-center items-center bg-gray-800 bg-opacity-0 h-full w-full">
      {isExploding && (
        <div className="text-[30px] text-orange-500 animate-bounce">
          🎉 Nuevo Record: {localStorage.getItem("wpm")}🎉
          <ConfettiExplosion />
        </div>
      )}
      {/* <h1 className='text-3xl text-gray-600'>sl {sentence.length}</h1> */}
      {result ? <WPA /> : <TextArea />}
    </div>
  );
}

export default DisplayArea;
