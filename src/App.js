import { useEffect, useState } from "react";
import "./styles/main.scss";
import { fetchQuote } from "./api";
import QuoteBox from "./components/QuoteBox"

function App() {

  useEffect(() => {
    const handleQuoteData = async () => {
      setquoteInfo(await fetchQuote());
    };
    handleQuoteData();
  }, []);

  const [quoteInfo, setquoteInfo] = useState({
    qoute: "",
    author: "",
    category: "",
  });
  return <QuoteBox info={quoteInfo}/>;
}

export default App;
