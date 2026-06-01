// VAST SPECIFICATION INSPECTOR TOOL

// import { FFmpeg } from '@ffmpeg/ffmpeg';
// import { fetchFile, toBlobURL } from '@ffmpeg/util';

const { FFmpeg } = "./node_modules/@ffmpeg/ffmpeg/dist/umd/ffmpeg.js"

// const { fetchFile } = FFmpegUtil;
// const { FFmpeg } = FFmpegWASM;
// let ffmpeg = null;

console.log(FFmpeg)

const parser = new DOMParser();
const OUTPUT_ELEMENT = document.getElementById("output");

function xmlToJson(node) {
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

// function testVAST() {
//     const vastTextArea = document.getElementById("vast-xml-textarea");
//     const vastValue = vastTextArea.value

//     const xmlDoc = parser.parseFromString(vastValue, "text/xml")

//     const result = xmlToJson(xmlDoc.documentElement);
//     console.log(JSON.stringify(result, null, 2));
// }

async function requestVast() {
    OUTPUT_ELEMENT.value = "";
    const vastUrlField = document.getElementById("vast-url-field");
    let vastUrl;

    try {
        vastUrl = new URL(vastUrlField.value);
        const vastResponse = await fetch(vastUrl, {});
        console.log(vastResponse);

        const vastXml = await vastResponse.text()
        const xmlDoc = parser.parseFromString(vastXml, "text/xml")
        const vastJson = xmlToJson(xmlDoc.documentElement);
        
        console.log(vastJson);
        if (vastJson["@attributes"]["version"] == (4.0 || 4.1 || 4.2)) {
            OUTPUT_ELEMENT.value += "⚠️ | VAST VERSION: " + vastJson["@attributes"]["version"] + "\n";
        }
        else if (vastJson["@attributes"]["version"] !== null) {
            OUTPUT_ELEMENT.value += "✅ | VAST VERSION: " + vastJson["@attributes"]["version"] + "\n";
        }

        const mediaFiles = vastJson["Ad"]["InLine"]["Creatives"]["Creative"]["Linear"]["MediaFiles"];
        console.log('HEREE')

        if (Array.isArray(mediaFiles["MediaFile"])) {
            for (let rendition of mediaFiles["MediaFile"]) {
                console.log(rendition["@attributes"]);
                const bitrate = rendition["@attributes"]["bitrate"]
                const width = rendition["@attributes"]["width"]
                const mediaType = rendition["@attributes"]["type"]
                console.log(rendition["#text"]);

                let success = false;

                if (bitrate >= 10000 && width >= 1280 && mediaType == ("video/mp4" || "video/mov")) {
                    OUTPUT_ELEMENT.value += "✅ | MEDIA SPECIFICATIONS: " + "\n";
                    OUTPUT_ELEMENT.value += "     BITRATE: " + bitrate + "\n";
                    OUTPUT_ELEMENT.value += "     WIDTH: " + width + "\n";
                    OUTPUT_ELEMENT.value += "     FORMAT: " + mediaType + "\n";
                    
                    success = true
                    return
                }

                if (!success) {
                    OUTPUT_ELEMENT.value += "🛑 | FAILED MEDIA SPECIFICATIONS";
                    return
                }
            }
        }

    }
    catch {
        // outputFieldValue = 'Error - Not a Valid URL'
        // outputField.value = outputFieldValue;
        return;
    }

    console.log(vastUrl)
}

function checkMediaRenditions(media) {

}