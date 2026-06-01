import React, { useState, useRef, useEffect, useCallback } from "react";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile, toBlobURL } from '@ffmpeg/util';

import xmlToJson from "../lib/xml";

const parser = new DOMParser();

export default function VastSpec() {
    const [loaded, setLoaded] = useState(false);
    const [hulu, setHulu] = useState(true);
    const [vastTag, setVastTag] = useState("https://ad.doubleclick.net/ddm/pfadx/N297404.3398549MLB/B35336815.442570649;sz=0x0;ord=[timestamp];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;dc_tdv=1;dcmt=text/xml;dc_sdk_apis=[APIFRAMEWORKS];dc_omid_p=[OMIDPARTNER];dc_vast=3;dc_mpos=[BREAKPOSITION];ltd=");
    
    const ffmpegRef = useRef(new FFmpeg());
    const videoRef = useRef(null);
    const progressRef = useRef(null);

    useEffect(() => {
      async function loadTranscodeService() {
        const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/esm';
        const ffmpeg = ffmpegRef.current;

        // Listen to progress event instead of log.
        // Need to move the Message Reference
        // ffmpeg.on('progress', ({ progress, time }) => {
        //   progressRef.current.style.width = `${Math.trunc(progress * 10000) / 100}%`
        // });

        // ffmpeg.on('complete', ({ progress, time }) => {
        //   console.log('Completed Transcoding');
        // });

        // toBlobURL is used to bypass CORS issue, urls with the same
        // domain can be used directly.
        await ffmpeg.load({
            coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
            wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
        });
        setLoaded(true);
      }
      loadTranscodeService();
    }, []);

    const handleFileChange = (event) => {
      setVideoFiles([...event.target.files]);
    };

    // Change the Vast Tag
    const handleOnVastTagChange = (event) => {
      const newVastTag = event.target.value;
      setVastTag(newVastTag);
    }

    // Check the Vast Tag
    const handleCheckVastTag = async (event) => {

      try {
        const vastUrl = new URL(vastTag);
        const vastResponse = await fetch(vastUrl, {});

        const vastXml = await vastResponse.text()
        const xmlDoc = parser

        const vastJson = xmlToJson(xmlDoc.documentElement);
        if (vastJson["@attributes"]["version"] == (4.0 || 4.1 || 4.2)) {
            console.log("⚠️ | VAST VERSION: " + vastJson["@attributes"]["version"]);
        }
        else if (vastJson["@attributes"]["version"] !== null) {
            console.log("✅ | VAST VERSION: " + vastJson["@attributes"]["version"]);
        }

      }
      catch (error) {
        console.log(error)
      }
    }

    return (
      <section id='video_resizer'>
        <h2>Inspection Tool</h2>
        <input type='checkbox' checked={hulu} onClick={console.log('')}></input>
        <input type='text' value={vastTag} onInput={handleOnVastTagChange}></input>
        <button onClick={() => handleCheckVastTag()}>Check Vast Tag</button>
      </section>
    );      
}