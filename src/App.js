import { useCallback, useEffect, useState } from "react";
import { fetchQuote } from "./api";
import QuoteBox from "./components/QuoteBox/QuoteBox.jsx";

function generateRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function App() {
  const handleNewQuote = useCallback(
    async () => {
      setquoteInfo(await fetchQuote());
      handleChangingRandomCorlor();
    },
    [],
  )


  const handleChangingRandomCorlor = () => {
    const newColor = generateRandomColor();
    setRandomColor(newColor);
    document.body.style.backgroundColor = newColor; // Set body background color
  };

  useEffect(() => {
    handleNewQuote();
  }, [handleNewQuote]);

  const [randomColor, setRandomColor] = useState(generateRandomColor());
  const [quoteInfo, setquoteInfo] = useState({
    qoute: "",
    author: "",
    category: "",
  });

  return (
    <QuoteBox
      randomColor={randomColor}
      info={quoteInfo}
      geranteQuote={handleNewQuote}
    />
  );
}

export default App;
