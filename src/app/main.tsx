import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import container from './di/container.ts'
import InversifyProvider from './context/inversify/InversifyProvider.tsx'
import { HashRouter } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter basename={import.meta.env.BASE_URL}>
      <InversifyProvider container={container}>

        <App />
      </InversifyProvider>
    </HashRouter>
  </StrictMode>,
)