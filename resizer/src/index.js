const base = document.createElement('base');
base.href = './'
document.head.appendChild(base);

import React from "react";
import App from './app.js';
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById('root'));
root.render(
  <App />
);