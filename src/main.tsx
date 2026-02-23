import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'leaflet/dist/leaflet.css'
import './index.css'
import App from './App.tsx'
import { VehicleProvider } from './context/VehicleContext'
import { UIProvider } from './context/UIContext'
import { AuthProvider } from './context/AuthContext'
import { NotificationProvider } from './context/NotificationContext'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AuthProvider>
            <VehicleProvider>
                <UIProvider>
                    <NotificationProvider>
                        <BrowserRouter>
                            <App />
                        </BrowserRouter>
                    </NotificationProvider>
                </UIProvider>
            </VehicleProvider>
        </AuthProvider>
    </StrictMode>,
)
