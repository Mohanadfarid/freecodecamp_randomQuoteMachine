import { useEffect, useState } from "react";
import { fetchQuote } from "./api";
import QuoteBox from "./components/QuoteBox/QuoteBox.jsx";

function App() {
  const handleNewQuote = async () => {
    setquoteInfo(await fetchQuote());
  };

  useEffect(() => {
    handleNewQuote();
  }, []);

  const [quoteInfo, setquoteInfo] = useState({
    qoute: "",
    author: "",
    category: "",
  });
  return <QuoteBox info={quoteInfo} geranteQuote={handleNewQuote}/>;
}

export default App;
