import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { InversifyProvider } from './presentation/context/InversifyContext.tsx'
import container from './di/container.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <InversifyProvider container={container}>

      <App />
    </InversifyProvider>
  </StrictMode>,
)