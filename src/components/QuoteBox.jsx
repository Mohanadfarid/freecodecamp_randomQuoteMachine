import React from "react";

export default function QuoteBox({info}) {
  return (
    <div id="quote-box">
      <p id="text">{info.quote}</p>
      <p id="author">{info.author}</p>
      <button id="new-quote">New quote</button>
      <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">
        icon place holder
      </a>
    </div>
  );
}
