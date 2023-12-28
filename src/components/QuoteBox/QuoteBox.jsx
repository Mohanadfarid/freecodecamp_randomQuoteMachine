import React from "react";
import { FaTwitter, FaTumblr } from "react-icons/fa";
import "./quoteBox.scss";
export default function QuoteBox({ info, geranteQuote, randomColor }) {
  return (
    <div id="quote-box" className="quote-box">
      <p id="text" className="text" style={{ color: randomColor }}>
        {info.quote}
      </p>
      <p id="author" className="author" style={{ color: randomColor }}>
        - {info.author}
      </p>
      <button
        id="new-quote"
        className="new-quote"
        onClick={geranteQuote}
        style={{ backgroundColor: randomColor }}
      >
        New quote
      </button>
      <div className="icons-container">
        <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">
          <div
            className="icon-container"
            style={{ backgroundColor: randomColor }}
          >
            <FaTwitter className="icon" />
          </div>
        </a>
        <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">
          <div
            className="icon-container"
            style={{ backgroundColor: randomColor }}
          >
            <FaTumblr className="icon" />
          </div>
        </a>
      </div>
    </div>
  );
}
