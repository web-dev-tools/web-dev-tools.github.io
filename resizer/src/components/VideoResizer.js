import React, { useState, useRef, useEffect } from "react";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile, toBlobURL } from '@ffmpeg/util';
import JSZip from 'jszip';

export default function VideoResizer() {
    const [loaded, setLoaded] = useState(false);
    const [videoFiles, setVideoFiles] = useState([]);
    const [outputUrls, setOutputUrls] = useState([]);
    const [zipUrl, setZipUrl] = useState('');
    const [processingStatus, setProcessingStatus] = useState(false);
    const [loading, setLoading] = useState(false);
    
    const ffmpegRef = useRef(new FFmpeg());
    const videoRef = useRef(null);
    const messageRef = useRef(null);

    useEffect(() => {
      async function loadTranscodeService() {
        const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/esm'
        const ffmpeg = ffmpegRef.current;
        // Listen to progress event instead of log.
        ffmpeg.on('progress', ({ progress, time }) => {
            messageRef.current.innerHTML = `${progress * 100} % (transcoded time: ${time / 1000000}s)`;
        });

        ffmpeg.on('complete', ({ progress, time }) => {
            messageRef.current.innerHTML = `${progress * 100} % (transcoded time: ${time / 1000000}s)`;
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
    };

    const transcodeVideos = async () => {

      setProcessingStatus(true);
      setOutputUrls([]);
      setZipUrl('');

      const zip = new JSZip();

      const results = [];

      for (const videoFile of videoFiles) {
        const inputName = videoFile.name;
        const outputName = 'output.' + videoFile.name;

        const ffmpeg = ffmpegRef.current;
        await ffmpeg.writeFile(inputName, await fetchFile(videoFile));
        await ffmpeg.exec(['-i', inputName, '-vf', 'scale=640:-1', '-r', '60', outputName]);
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

    return (
      <section id='video_resizer' className='tab_section'>
        <h2>Batch Video Transcoder</h2>
        <input type="file" accept="video/*" multiple onChange={handleFileChange} />
        <button onClick={transcodeVideos} disabled={processingStatus || !videoFiles.length}>
          {processingStatus ? 'Processing...' : 'Transcode All'}
        </button>
        <p ref={messageRef}>Nothing Loaded</p>
        {outputUrls.length > 0 && (
          <div>
            <h3>Results</h3>
            {outputUrls.map(({ name, url }) => (
              <div key={name}>
                <p>{name}</p>
                <video src={url} width="480" />
                <a href={url} download={name}>Download</a>
              </div>
            ))}
          </div>
        )}
        {zipUrl && (
          <div style={{ marginTop: '1em' }}>
            <a href={zipUrl} download="videos.zip">📦 Download Transcoded ZIP</a>
          </div>
        )}
      </section>
    );      
}