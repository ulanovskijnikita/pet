import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import container from './di/container.ts'
import InversifyProvider from './presentation/context/inversify/InversifyProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <InversifyProvider container={container}>

      <App />
    </InversifyProvider>
  </StrictMode>,
)