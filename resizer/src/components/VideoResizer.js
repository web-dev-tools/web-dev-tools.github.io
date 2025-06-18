import React, { useState, useRef, useEffect, useCallback } from "react";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile, toBlobURL } from '@ffmpeg/util';
import JSZip from 'jszip';

const resolutions = [320, 480, 640, 720, 1080, 1280, 1920]

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
    const [widthIndexValue, setWidthIndexValue] = useState(5);
    const bitrateRef = useRef(null);
    const widthRef = useRef(null);
  
    
    const ffmpegRef = useRef(new FFmpeg());
    const videoRef = useRef(null);
    // const messageRef = useRef(null);
    const progressRef = useRef(null);

    useEffect(() => {
      console.log(zipUrl);
      async function loadTranscodeService() {
        const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/esm';
        const ffmpeg = ffmpegRef.current;

        // Listen to progress event instead of log.
        // Need to move the Message Reference
        ffmpeg.on('progress', ({ progress, time }) => {
          progressRef.current.style.width = `${Math.trunc(progress * 10000) / 100}%`
          // messageRef.current.innerHTML = `${Math.trunc(progress *10000) / 100}% (transcoded time: ${Math.trunc(time /10000)/100}s)`;
        });

        ffmpeg.on('complete', ({ progress, time }) => {
          console.log('Completed Transcoding');
            // messageRef.current.innerHTML = `${progress * 100}% (transcoded time: ${time / 1000000}s)`;
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
      setVideoFiles([...event.target.files]);
      // messageRef.current.innerHTML = 'Files Loaded'
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

    const handleDownloadVideo = (file, name) => {
      const a = document.createElement('a');
      
      a.href = file;
      a.download = `resized-lowRes-${name}`;
      a.click();
    };

    const handleTogglePlay = (event) => {
      const video = event.currentTarget;
      // video.paused ? video.play() : video.pause();

      const wrapper = video.parentElement; // or video.parentElement if direct parent

      if (video.paused) {
        video.play();
        wrapper.classList.add('playing');
      } else {
        video.pause();
        wrapper.classList.remove('playing');
      }
    };

    return (
      <section id='video_resizer' className='tab_section'>
        <h2>Video Transcoder</h2>
        <section className='video_information_section'>
          <span className='video_control_section'>
            <button className='video_control_button' onClick={transcodeVideos} disabled={processingStatus || !videoFiles.length}>
              <i className='download_icon'>queue_play_next</i>
              <p>{processingStatus ? 'Processing...' : 'Transcode'}</p>
            </button>
            <button onClick={() => handleDownload(zipUrl)} disabled={!zipUrl} className='video_control_button'>
              <i className='download_icon'>download</i>
              <p>Download All</p>
            </button>
            <div className="bar" style={{width: '100%', margin: '16px 0', gridColumn: 'span 2'}}>
              <div ref={progressRef} className="bar-item tooltip" data-tooltip="50%" role="progressbar"></div>
            </div>
          </span>
          <span>

          </span>
          <span className='video_settings_section'>
            <span className='video_setting'>
              <h3>Bitrate: {bitrateValue}kbps</h3>
              <input className='form-range' type="range" min="250" max="4000" step="250" value={bitrateValue} onChange={handleBitrateValueChange} style={{ width: '50%' }} />
            </span>
            <span className='video_setting'>
              <h3>Width: {resolutions[widthIndexValue]}px</h3>
              <input className='form-range' type="range" min="0"  max={resolutions.length - 1} step="1" value={widthIndexValue} onChange={handleResolutionIndexChange} style={{ width: '50%' }} />
            </span>
          </span>
        </section>


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
        <button className='btn btn-primary' htmlFor="videoFileInput" style={{ cursor: 'pointer' }}>
          <label htmlFor="videoFileInput" style={{ cursor: 'pointer' }}>Browse Files</label>
        </button>
        {outputUrls.length > 0 && (
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem'}}>
            {outputUrls.map(({ name, url }) => (
              <figure className='video_preview' key={name}>
                <video src={url} width="480" onClick={handleTogglePlay}/>
                <span className='download_button_span'>
                  <button className='download_button' onClick={() => handleDownloadVideo(url, name)}><i className='download_icon'>download</i></button>                </span>
              </figure>
            ))}
          </div>
        )}
        </div>        
      </section>
    );      
}