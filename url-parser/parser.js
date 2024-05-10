let inputField = document.getElementById('input');
let outputField = document.getElementById('output');

const emptyKeyValue = /"(\w+)":\s*""/g;
const replacementKeyValue = '<span class="highlighted">"$1": ""</span>';

updateInputField();

function updateOutputField() {
  let outputFieldValue = {};
  let parsedUrl;

  const inputFieldValue = inputField.value;
  try {
    parsedUrl = new URL(inputFieldValue);
  }
  catch {
    outputFieldValue = 'Error - Not a Valid URL'
    outputField.value = outputFieldValue;
    return;
  }
  const protocol = parsedUrl.protocol;
  const hostname = parsedUrl.hostname;
  const port = parsedUrl.port;
  const pathname = parsedUrl.pathname;
  let searchParams = {};

  parsedUrl.searchParams.forEach((value, key) => {
    try {
      searchParams[key] = decodeURIComponent(value);
      if (value.includes('=')) {
        const params = new URLSearchParams(value);

        const obj = {};
        for (const [key, value] of params) {
          obj[key] = value;
        }
        searchParams[key] = obj;
      }
    }
    catch {
      searchParams[key] = value;
    }
  });

  outputFieldValue['protocol'] = parsedUrl.protocol;
  outputFieldValue['hostname'] = parsedUrl.hostname;
  outputFieldValue['pathname'] = parsedUrl.pathname;
  outputFieldValue['query parameters'] = searchParams;
  // console.log(JSON.stringify(outputFieldValue));
  // const highlightedObj = highlightEmptyValues(outputFieldValue);

  // outputField.innerText = JSON.stringify(outputFieldValue, null, 2);
  outputField.innerHTML = JSON.stringify(outputFieldValue, null, 2).replace(emptyKeyValue, replacementKeyValue);

  // outputField.innerHTML = JSON.stringify(highlightedObj, null, 2);

  // console.log(`protocol: ${parsedUrl.protocol}`); // "https:"
  // console.log(`hostname: ${parsedUrl.hostname}`); // "www.example.com"
  // console.log(`pathname: ${parsedUrl.pathname}`); // "/path/to/resource"
  // console.log(JSON.stringify(searchParams)); // '{"foo":"bar","baz":"qux"}'
  
}

function updateInputField() {
  // Get the URLSearchParams object from the current document's URL search parameters
  const urlSearchParams = new URLSearchParams(window.location.search);

  const inputFieldValue = urlSearchParams.get('share');
  if (inputFieldValue == null) {
    return;
  }

  const inputFieldDecoded = atob(decodeURIComponent(inputFieldValue));

  // console.log(inputFieldDecoded);
  inputField.value = inputFieldDecoded;
}

function shareInputField() {
  const inputFieldValue = inputField.value;

  let inputFieldEncoded = btoa(inputFieldValue);
  inputFieldEncoded= encodeURIComponent(inputFieldEncoded)

  copyToClipboard(inputFieldEncoded);
  console.log(inputFieldValue);
  console.log(inputFieldEncoded);
}

function copyToClipboard(text) {
  // Get the Window Origin & Pathname
  const origin = window.location.origin;
  const pathname = window.location.pathname;
  const domain = origin + pathname;

  // Create a new textarea element
  var textarea = document.createElement('textarea');

  // Set the value of the textarea to the text you want to copy
  textarea.value = domain + '?share=' + text;

  // Make sure to make the textarea non-editable to avoid accidental user changes
  textarea.setAttribute('readonly', '');

  // Hide the textarea from view
  textarea.style.position = 'absolute';
  textarea.style.left = '-9999px';

  // Append the textarea to the DOM
  document.body.appendChild(textarea);

  // Select the text inside the textarea
  textarea.select();

  // Copy the selected text to the clipboard
  document.execCommand('copy');

  // Clean up - remove the textarea from the DOM
  document.body.removeChild(textarea);
}