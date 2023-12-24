import React from "react";
import "./quoteBox.scss";
export default function QuoteBox({ info ,geranteQuote}) {
  return (
    <div id="quote-box" className="quote-box">
      <p id="text" className="text">{info.quote}</p>
      <p id="author" className="author">- {info.author}</p>
      <button id="new-quote" onClick={geranteQuote}>New quote</button>
      <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">
        icon place holder
      </a>
    </div>
  );
}
