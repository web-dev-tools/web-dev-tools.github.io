let inputField = document.getElementById('input');
let outputField = document.getElementById('output');

const emptyKeyValue = /"(\w+)":\s*""/g;
const replacementKeyValue = '<span class="highlighted">"$1": ""</span>';

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
