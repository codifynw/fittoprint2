import "./header.css";

let createHeader = function (props) {
  let headerElement = document.createElement("div");
  headerElement.classNames = "header";
  headerElement.innerHTML = "test";
  return headerElement;
};

export { createHeader };
