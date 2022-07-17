import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";

/**
 * I'm looking fo developers to help me in the journey
 * A lot of cool things to develop.
 * Stack: React / Typecript / .NET / Azure / Neo4j
 * Email me at niouseoner@protonmail.com with object : "The developping turtoise"
 * Thanks
 */
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
