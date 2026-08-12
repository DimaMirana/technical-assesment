import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/manrope";


import './styles/globals.scss';
import HomeProvider from "./context/HomeProvider";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomeProvider>
      <App />
    </HomeProvider>
  </StrictMode>,
)
