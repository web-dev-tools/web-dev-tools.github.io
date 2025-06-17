import React, { useState, useRef, useEffect, useCallback } from "react";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile, toBlobURL } from '@ffmpeg/util';
import JSZip from 'jszip';

const resolutions = [1920, 1280, 1080, 720, 640, 480, 320];

export default function VideoResizer() {
    const [loaded, setLoaded] = useState(false);
    const [videoFiles, setVideoFiles] = useState([]);
    const [outputUrls, setOutputUrls] = useState([]);
    const [zipUrl, setZipUrl] = useState(undefined);
    const [processingStatus, setProcessingStatus] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    // FFMPEG Input Flag Variables
    const [bitrateValue, setBitrateValue] = useState(2000);
    const [widthIndexValue, setWidthIndexValue] = useState(1);
    const bitrateRef = useRef(null);
    const widthRef = useRef(null);
  
    
    const ffmpegRef = useRef(new FFmpeg());
    const videoRef = useRef(null);
    const messageRef = useRef(null);

    useEffect(() => {
      console.log(zipUrl);
      async function loadTranscodeService() {
        const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/esm';
        const ffmpeg = ffmpegRef.current;

        // Listen to progress event instead of log.
        // Need to move the Message Reference
        ffmpeg.on('progress', ({ progress, time }) => {
            messageRef.current.innerHTML = `${Math.trunc(progress *10000) / 100}% (transcoded time: ${Math.trunc(time /10000)/100}s)`;
        });

        ffmpeg.on('complete', ({ progress, time }) => {
            messageRef.current.innerHTML = `${progress * 100}% (transcoded time: ${time / 1000000}s)`;
        });

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
      console.log('Handle File', event.target.files);
      setVideoFiles([...event.target.files]);
      messageRef.current.innerHTML = 'Files Loaded'
    };

    const handleDrop = useCallback((event) => {
      event.preventDefault();
      setIsDragging(false);

      setVideoFiles([...event.dataTransfer.files]);
        messageRef.current.innerHTML = 'Files Loaded'
    }, []);
  
    const handleDragOver = (e) => {
      e.preventDefault();
      setIsDragging(true);
    };
  
    const handleDragLeave = () => {
      setIsDragging(false);
    };

    const handleBitrateValueChange = (event) => {
      setBitrateValue(event.target.value);
    }

    const handleResolutionIndexChange = (event) => {
        console.log(event.target.value);
        console.log(resolutions[event.target.value]);
      setWidthIndexValue(event.target.value);
    };

    const transcodeVideos = async () => {

      setProcessingStatus(true);
      setOutputUrls([]);
      setZipUrl('');

      const zip = new JSZip();
      const results = [];

      for (const videoFile of videoFiles) {
        const inputName = videoFile.name;
        const fileResolution = resolutions[widthIndexValue];

        const outputName = 'output.'+ fileResolution + 'px.' + bitrateValue + 'kbps.' + videoFile.name;

        const ffmpegFlags = [
          '-i', inputName,
          '-vf', `scale=${fileResolution}:-1`,
          '-b', `${bitrateValue * 1000}`,
          outputName
        ];

        console.log(ffmpegFlags);

        const ffmpeg = ffmpegRef.current;
        await ffmpeg.writeFile(inputName, await fetchFile(videoFile));
        // await ffmpeg.exec(['-i', inputName, '-vf', 'scale=640:-1', '-r', '60', outputName]);
        // await ffmpeg.exec(['-i', inputName, '-vf', 'scale=640:-1', '-b', '2000', outputName]);
        await ffmpeg.exec(ffmpegFlags);
        const data = await ffmpeg.readFile(outputName);

        zip.file(outputName, data.buffer);
        const url = URL.createObjectURL(new Blob([data.buffer], { type: 'video/mp4' }));
        results.push({ name: outputName, url });
      }

      const content = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(content);
      
      setZipUrl(url);
      setOutputUrls(results);
      setProcessingStatus(false);
    }

    const handleDownload = (file) => {
      const a = document.createElement('a');
      const date = new Date();

      a.href = file;
      a.download = `${date}.videos.zip`;
      a.click();
    };

    return (
      <section id='video_resizer' className='tab_section'>
        <h2>Batch Video Transcoder</h2>
        <span className='video_control_section'>
          <button className='video_control_button' onClick={transcodeVideos} disabled={processingStatus || !videoFiles.length}>
            <i className='download_icon'>queue_play_next</i>
            <p>{processingStatus ? 'Processing...' : 'Transcode'}</p>
          </button>
          <button onClick={() => handleDownload(zipUrl)} disabled={!zipUrl} className='video_control_button download_button'>
            <i className='download_icon'>download</i>
            <p>Download All</p>
          </button>
        </span>
        <p ref={messageRef}>Nothing Loaded</p>
        <div className={`drop_zone`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
        <p>Drag and drop files here, or click to select</p>
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          style={{ display: 'none' }}
          id="videoFileInput"
        />
        <label htmlFor="videoFileInput" style={{ cursor: 'pointer', color: 'blue' }}>
          Browse Files
        </label>
        {outputUrls.length > 0 && (
          <div>
            <h3>Results</h3>
            {outputUrls.map(({ name, url }) => (
              <figure className='video_preview' key={name}>
                <video src={url} width="480" />
                <span className='download_button_span'>
                  <a href={url} download={name} className='download_button'><i className='download_icon'>download</i></a>
                </span>
              </figure>
            ))}
          </div>
        )}
        </div>
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h3>Choose a Bitrate: {bitrateValue}kbps</h3>
          <input className='form-range' type="range" min="250" max="10000" step="250" value={bitrateValue} onChange={handleBitrateValueChange} style={{ width: '50%' }} />
          <h3>Choose a Width Resolution: {resolutions[widthIndexValue]}px</h3>
          <input className='form-range' type="range" min="0"  max={resolutions.length - 1} step="1" value={widthIndexValue} onChange={handleResolutionIndexChange} style={{ width: '50%' }} />
        </div>
        
      </section>
    );      
}