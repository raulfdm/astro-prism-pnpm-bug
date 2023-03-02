import "./style.css";
import PrismJs from "prismjs";

const code = `const foo = 'bar';`;

const html = PrismJs.highlight(
  code,
  PrismJs.languages.javascript,
  "javascript"
);

document.querySelector("#app").innerHTML = `
  <div>
    <h1>PrismJS</h1>
    ${html}
  </div>
`;
