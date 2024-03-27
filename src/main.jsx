import React from "react";
import ReactDOM from "react-dom/client"; // Correction ici
import App from "./App.jsx";
import "./index.css";
import { AppProviders } from "./context";
import { Profiler } from "./utils/Profiler.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Profiler id="App Root" phases={["mount"]}>
      <AppProviders>
        <App />
      </AppProviders>
    </Profiler>
  </React.StrictMode>
);

// import {loadDevTools} from './dev-tools/load'
// import './bootstrap'
// import * as React from 'react'
// import {createRoot} from 'react-dom/client'
// import {Profiler} from 'components/profiler'
// import {App} from './app'
// import {AppProviders} from './context'

// loadDevTools(() => {
//   createRoot(document.getElementById('root')).render(
//     <Profiler id="App Root" phases={['mount']}>
//       <AppProviders>
//         <App />
//       </AppProviders>
//     </Profiler>,
//   )
// })
