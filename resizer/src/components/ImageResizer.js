import React, { useEffect, useRef, useState, useCallback } from 'react';

  // const worker = new Worker(new URL('../workers/squoosh.js', import.meta.url), { type: 'module' });

export default function ImageResizer() {
    const [previews, setPreviews] = useState([]);
      const [files, setFiles] = useState([]);

    const [isDragging, setIsDragging] = useState(false);

  const handleImages = (e) => {
    const files = Array.from(e.target.files);
    const promises = files.map(file => resizeAndCompressImage(file));
    Promise.all(promises).then(setPreviews);
  };

  
  const resizeAndCompressImage = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const MAX_WIDTH = 800;
          const MAX_HEIGHT = 800;

          let [targetW, targetH] = getScaledDimensions(img.width, img.height, MAX_WIDTH, MAX_HEIGHT);

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

          const canvas = document.createElement('canvas');
          canvas.width = targetW;
          canvas.height = targetH;

          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, sx, sy, sw, sh, 0, 0, targetW, targetH);

          canvas.toBlob((blob) => {
            const url = URL.createObjectURL(blob);
            resolve({ url, blob, name: file.name });
          }, 'image/jpeg', 0.75); // Compress to 75% quality
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    });
  };

  const getScaledDimensions = (w, h, maxW, maxH) => {
    if (w <= maxW && h <= maxH) return [w, h];
    const scale = Math.min(maxW / w, maxH / h);
    return [w * scale, h * scale];
  };

  const handleDownload = (file) => {
    const a = document.createElement('a');
    a.href = file.url;
    a.download = `resized-${file.name}`;
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
      <input type="file" accept="image/*" multiple onChange={handleImages} />
      {/* <div className='drop' onDrop={() => {handleDrop}} onDragOver={(event) => event.preventDefault()}></div> */}
      <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      style={{
        border: '2px dashed #aaa',
        padding: '2rem',
        textAlign: 'center',
        backgroundColor: isDragging ? '#f0f0f0' : '#fff',
        transition: 'background-color 0.2s ease-in-out',
      }}
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

      <ul style={{ marginTop: '1rem' }}>
        {files.map((file, i) => (
          <li key={i}>{file.name}</li>
        ))}
      </ul>
    </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
        {previews.map((file, i) => (
          <div key={i}>
            <img src={file.url} alt={`Preview ${i}`} style={{ maxWidth: 200, height: 'auto' }} />
            <button onClick={() => handleDownload(file)}>Download</button>
          </div>
        ))}
      </div>
    </section>
  )
}