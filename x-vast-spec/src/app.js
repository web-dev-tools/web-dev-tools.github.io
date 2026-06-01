import React, { useState, useRef, useEffect } from "react";
import VideoResizer from "./components/VastSpec";

import '../src/styles/styles.css'
import VastSpec from "./components/VastSpec";

export default function App() {  
  return (
    <>
    <h1>VAST Inspection Tool</h1>
      <VastSpec></VastSpec>
    </>
  )
}