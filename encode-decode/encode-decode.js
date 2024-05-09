const InputBox = document.getElementById('input-box');
const OutputBox = document.getElementById('output-box');

function encodeText() {
  let OriginalText = InputBox.value;
  let EncodedText = encodeURIComponent(OriginalText);
  OutputBox.innerText = EncodedText;
}

function decodeText() {
  let OriginalText = InputBox.value;
  let DecodedText = decodeURIComponent(OriginalText);
  OutputBox.innerText = DecodedText;
}