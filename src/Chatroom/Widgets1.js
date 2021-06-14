import React from "react";
import { Tweet } from "react-twitter-widgets";

function Widgets1() {
  return (
    <div
      style={{
        marginBottom: "10px",
        border: "1px solid black",
        borderRadius: "5px",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      }}>
      {/* <Tweet tweetId="8824902" /> */}
      <a
        class="twitter-timeline"
        href="https://twitter.com/dallascowboys"
        data-tweet-limit="1">
        Tweets by @dallascowboys
      </a>
    </div>
  );
}
export default Widgets1;
