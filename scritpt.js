const buttonElement = document.querySelector("button");
const textElement = document.getElementById("textarea");

buttonElement.addEventListener("click", () => handleClick());

function handleClick() {
  const text = textElement.value;
  normaliseText(text);
}

function normaliseText(string) {
  let normalText = string
    .replace(/[^\w\s\']|_/g, "")
    .replace(/\s+/g, " ")
    .toLowerCase()
    .split(" ")
    .join("");
  console.log(normalText);
  squareEncode(normalText, determineLength(normalText.length));
  return normalText;
}
function determineLength(n) {
  const sqrt = Math.sqrt(n);
  return [Math.floor(sqrt), Math.floor(sqrt) + 1];
}

function squareEncode(string, [rows, colums]) {
  const chunks = [];
  for (let i = 0; i <= string.length; i += colums) {
    const val = string.slice(i, colums + i);
    chunks.push(val);
  }
  const encodedStr = [];
  for (let i = 0; i < colums; i++) {
    let str = "";
    for (let j = 0; j < rows; j++) {
      str += chunks[j].charAt(i);
    }
    encodedStr.push(str + "<br>");
  }
  document.querySelector(".encode-text").innerHTML = encodedStr.join("");
}
