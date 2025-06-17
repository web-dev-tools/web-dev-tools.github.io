import React, { useEffect, useRef, useState, useCallback } from 'react';

  // const worker = new Worker(new URL('../workers/squoosh.js', import.meta.url), { type: 'module' });

export default function ImageResizer() {
  const [previews, setPreviews] = useState([]);
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleImages = async (event) => {
    const files = Array.from(event.target.files);
    const imagePreviews = await Promise.all(
      files.map(async (file) => await resizeAndCompressImage(file))
    );
    setPreviews(imagePreviews);
    setFiles((prev) => [...prev, ...files]);
  }

  // Helper: Read file as Data URL
  const readFileAsDataURL = async (file) => {
    return await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  // Helper: Load image from Data URL
  const loadImageFromDataURL = async (dataUrl) => {
    return await new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = dataUrl;
    });
  };

  // Main: Resize & Compress
  const resizeAndCompressImage = async (file) => {
    const dataUrl = await readFileAsDataURL(file);
    const image = await loadImageFromDataURL(dataUrl);
    const { lowRes, highRes } = await resizeImage(image);

    return {
      name: file.name,
      lowRes,
      highRes,
    };
  };

  const resizeImage = async (img) => {
    const MAX_WIDTH = 800;
    const MAX_HEIGHT = 800;

    let [targetW, targetH] = getScaledDimensions(img.width, img.height, MAX_WIDTH, MAX_HEIGHT, false);
    let [targetHighW, targetHighH] = getScaledDimensions(img.width, img.height, MAX_WIDTH, MAX_HEIGHT, true);
    // const [lowW, lowH] = getScaledDimensions(img.width, img.height, LOW_MAX, LOW_MAX, 'low');
    // const [highW, highH] = getScaledDimensions(img.width, img.height, HIGH_MAX, HIGH_MAX, 'high');

    // Crop center square if needed
    const crop = false; // set to true to enable square crop
    let sx = 0, sy = 0, sw = img.width, sh = img.height;

    if (crop) {
      const minSide = Math.min(img.width, img.height);
      sx = (img.width - minSide) / 2;
      sy = (img.height - minSide) / 2;
      sw = sh = minSide;
      targetW = targetH = MAX_WIDTH;
    }

    const renderToBlob = (width, height, quality = 0.75) =>
      new Promise((resolve) => {
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, sx, sy, sw, sh, 0, 0, width, height);

        // Get the MIME type of the image
        const dataURL = canvas.toDataURL();
        const mime = dataURL.substring(dataURL.indexOf(':') + 1, dataURL.indexOf(';'));

        // Convert the image into blob format
        canvas.toBlob((blob) => {
          const url = URL.createObjectURL(blob);
          resolve({ url, blob });
        }, mime, quality);
      });

    // Render a Blog of the High Res & Low Res versions
    const lowRes = await renderToBlob(targetW, targetH, 1);
    const highRes = await renderToBlob(targetHighW, targetHighH, 1);

    return { lowRes, highRes };
  };

  const getScaledDimensions = (w, h, maxW, maxH, highRes) => {
    const ratio = Math.trunc((w / h) * 100) / 100;
    let size;
    switch (true) {
      case (ratio >= 1.1 && ratio <= 1.3):
        // Return the 300x250 Banner
        size = highRes ? [600, 500] : [300, 250];
        return size;
      case (ratio >= 3.8 && ratio <= 3.9):
        // Return the 300x250 Banner
        size = highRes ? [1940, 500] : [970, 250];
        return size;
      case (ratio >= 0.45 && ratio <= 0.55):
        // Return the 300x250 Banner
        size = highRes ? [600, 1200] : [300, 600];
        return size;
      case (ratio >= 6.3 && ratio <= 6.5):
        // Return the 320x50 Banner
        size = highRes ? [640, 100] : [320, 50];
        return size;
      case (ratio >= 8 && ratio <= 8.1):
        // Return the 728x90 Banner
        size = highRes ? [1456, 180] : [728, 90];
        return size;
      default:
        console.log('null');
        break;
    }

    if (w <= maxW && h <= maxH) return [w, h];
    const scale = Math.min(maxW / w, maxH / h);
    return [w * scale, h * scale];
  };

  const handleDownload = (file, name) => {
    const a = document.createElement('a');
    
    a.href = file;
    a.download = `resized-lowRes-${name}`;
    a.click();
  };

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFiles = Array.from(e.dataTransfer.files);
    const promises = droppedFiles.map(file => resizeAndCompressImage(file));
    Promise.all(promises).then(setPreviews);
    setFiles((prev) => [...prev, ...droppedFiles]);
  }, []);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  return (
    <section if='image_resizer' className='tab_section'>
      <h2>Image Resizer</h2>
      <div className={`drop_zone`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
      <p>Drag and drop files here, or click to select</p>
      <input
        type="file"
        multiple
        onChange={handleImages}
        style={{ display: 'none' }}
        id="fileInput"
      />
      <label htmlFor="fileInput" style={{ cursor: 'pointer', color: 'blue' }}>
        Browse Files
      </label>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
        {previews.map((file, i) => (
          <div key={i}>
            <figure className='image_preview'>
              <img src={file.lowRes.url} alt={`Preview ${i}`}/>
              <span className='download_button_span'>
                <button className='download_button' onClick={() => handleDownload(file.lowRes.url, file.name)}><i className='download_icon'>download</i></button>
                <button className='download_button' onClick={() => handleDownload(file.highRes.url, file.name)}><i className='download_icon'>high_quality</i></button>            
              </span>
            </figure>
          </div>
        ))}
      </div>
    </div>
      
    </section>
  )
}