// src/components/Tracker.tsx
import { useState, useRef } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function Tracker() {
    const [vehicleId, setVehicleId] = useState('TRUCK-01'); // Valor por defecto
    const [isTracking, setIsTracking] = useState(false);
    const [status, setStatus] = useState('Listo para iniciar');
    const [error, setError] = useState('');

    const watchIdRef = useRef<number | null>(null);
    const lastSendRef = useRef<number>(0);

    const startTracking = () => {
        setError('');
        setStatus('Solicitando GPS...');

        const options = { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 };

        const watchId = navigator.geolocation.watchPosition(
            async (position) => {
                const { latitude, longitude, speed } = position.coords;
                const now = Date.now();

                // Enviamos cada 10 segundos para cuidar tu base de datos
                if (now - lastSendRef.current >= 10000) {
                    try {
                        const { error: insertError } = await supabase
                            .from('vehicle_locations')
                            .insert({
                                vehicle_id: vehicleId.trim().toUpperCase(), // Cambiado: vehicle_plate -> vehicle_id
                                lat: latitude,                              // Cambiado: latitude -> lat
                                lng: longitude,                             // Cambiado: longitude -> lng
                                speed: speed || 0                           // Agregamos la velocidad
                                // created_at se genera solo en Supabase, no hace falta mandarlo
                            });

                        if (insertError) throw insertError;

                        lastSendRef.current = now;
                        setStatus(`Enviado ✓ ${new Date().toLocaleTimeString()}`);
                    } catch (err: any) {
                        // DEBUG: Mostrar alerta en el iPhone para saber qué está fallando
                        alert(`ERROR SUPABASE: ${err.code || 'Desconocido'} - ${err.message}`);
                        setError(`Error de conexión: ${err.message}`);
                    }
                }
            },
            (err) => {
                setIsTracking(false);
                setError(`Error GPS: ${err.message}`);
            },
            options
        );

        watchIdRef.current = watchId;
        setIsTracking(true);
        setStatus('Rastreando...');
    };

    const stopTracking = () => {
        if (watchIdRef.current !== null) {
            navigator.geolocation.clearWatch(watchIdRef.current);
            watchIdRef.current = null;
        }
        setIsTracking(false);
        setStatus('Rastreo detenido');
    };

    return (
        <div style={{ padding: '2rem', background: '#1a1a1a', color: 'white', borderRadius: '15px' }}>
            <h2>MineConnect SAT - iPhone Tracker</h2>
            <p>ID Vehículo: <strong>{vehicleId}</strong></p>

            <button
                onClick={isTracking ? stopTracking : startTracking}
                style={{
                    padding: '1rem 2rem',
                    fontSize: '1.2rem',
                    background: isTracking ? '#ff4c29' : '#00ffab',
                    border: 'none',
                    borderRadius: '12px',
                    fontWeight: 'bold'
                }}
            >
                {isTracking ? 'Detener Viaje' : 'Iniciar Viaje'}
            </button>

            <div style={{ marginTop: '1rem' }}>
                <p>Estado: {status}</p>
                {error && <p style={{ color: '#ff4c29' }}>{error}</p>}
            </div>
        </div>
    );
}