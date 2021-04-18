import "./styles/main";
import { createHeader } from "./components/header/header";

let header = createHeader();

console.log(header);

document.addEventListener("DOMContentLoaded", function () {
  document.body.appendChild(header);
});
