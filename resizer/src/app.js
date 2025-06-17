import React, { useState, useRef, useEffect } from "react";
import VideoResizer from "./components/VideoResizer";
import ImageResizer from "./components/ImageResizer";

import '../src/styles/styles.css'


export default function App() {
  const [tabSelected, setTabSelected] = useState('video');

  const isSelected = (value) => tabSelected === value;
  const handleTabChange = (newTab) => {
    setTabSelected(newTab);
  };
  
  return (
    <>
    <h1>Advertising Resizer, Optimizer, and Downloader Tool</h1>
    <section id='tabs'>
      <input type='radio' key='image_tab' name='tabs' id='image_resizer_select' className='tab_select_input' checked={isSelected('image')} onChange={() => handleTabChange('image')}></input>
      <label htmlFor='image_resizer_select' className='tab_select_label'>
        <i className="tab_icon">photo_library</i>
        <p>Images</p>
      </label>
      <ImageResizer></ImageResizer>

      <input type='radio' key='video_tab' name='tabs' id='video_resizer_select' className='tab_select_input' checked={isSelected('video')} onChange={() => handleTabChange('video')}></input>
      <label htmlFor='video_resizer_select' className='tab_select_label'>
        <i className="tab_icon">video_library</i>
        <p>Video</p>
      </label>
      <VideoResizer></VideoResizer>
    </section>
    </>
  )
}