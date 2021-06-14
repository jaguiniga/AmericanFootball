import React from "react";
import "./Widgets.css";

function Widgets() {
    return (
        <div className="widgets">
          <iframe src="data:text/html;charset=utf-8,%3Ca%20class%3D%22twitter-timeline%22%20href%3D%22https%3A//twitter.com/dallascowboys%3Fref_src%3Dtwsrc%255Etfw%22%3ETweets%20by%20dallascowboys%3C/a%3E%0A%3Cscript%20async%20src%3D%22https%3A//platform.twitter.com/widgets.js%22%20charset%3D%22utf-8%22%3E%3C/script%3E%0A"></iframe>

        </div>
    );
}

export default Widgets;