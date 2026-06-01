export default function xmlToJson(node) {
  // Handle text OR CDATA
  if (node.nodeType === 3 || node.nodeType === 4) {
    const text = node.nodeValue.trim();
    return text.length ? text : null;
  }

  let obj = {};

  // Attributes
  if (node.attributes && node.attributes.length > 0) {
    obj["@attributes"] = {};
    for (let attr of node.attributes) {
      obj["@attributes"][attr.name] = attr.value;
    }
  }

  let textContent = "";

  for (let child of node.childNodes) {
    if (child.nodeType === 3 || child.nodeType === 4) {
      const val = child.nodeValue.trim();
      if (val) textContent += val;
    } else if (child.nodeType === 1) {
      const childName = child.nodeName;
      const childValue = xmlToJson(child);

      if (childValue === null) continue;

      if (obj[childName]) {
        if (!Array.isArray(obj[childName])) {
          obj[childName] = [obj[childName]];
        }
        obj[childName].push(childValue);
      } else {
        obj[childName] = childValue;
      }
    }
  }

  // If there's text (including CDATA), store it
  if (textContent) {
    if (Object.keys(obj).length > 0) {
      obj["#text"] = textContent;
    } else {
      return textContent;
    }
  }

  return obj;
}