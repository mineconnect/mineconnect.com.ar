import React from 'react';
import { Satellite, ShieldCheck, Zap, BarChart3, Smartphone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Presentation.css';

export default function Presentation() {
    const navigate = useNavigate();

    return (
        <div className="presentation-root">
            <div className="planet-container">
                <div className="planet"></div>
                <div className="planet-overlay"></div>
            </div>

            <div className="presentation-content">
                <section className="hero">
                    <div className="hero-content">
                        <span className="section-tag">Seguimiento Satelital de Alta Precisión</span>
                        <h1>MineConnect<span>SAT</span></h1>
                        <p>La plataforma definitiva de gestión de flotas y operaciones críticas en entornos remotos. Control total donde otros pierden el rastro.</p>
                        <div className="cta-group">
                            <button onClick={() => navigate('/sat')} className="btn btn-primary">INGRESAR A SAT</button>
                            <a href="#contacto" className="btn btn-secondary">SOLICITAR DEMO</a>
                        </div>
                    </div>
                </section>

                <section className="section" id="experiencia">
                    <div className="section-tag-center">
                        <span className="section-tag">Infraestructura Global</span>
                    </div>
                    <h2 className="section-title">Control de Operaciones Críticas</h2>

                    <div className="grid">
                        <div className="card">
                            <div className="card-icon"><Satellite size={32} /></div>
                            <h3>Uplink Ininterrumpido</h3>
                            <p>Conectividad satelital garantizada en los entornos más aislados. Cobertura del 100% en desiertos, alta montaña y selva.</p>
                        </div>
                        <div className="card">
                            <div className="card-icon"><ShieldCheck size={32} /></div>
                            <h3>Seguridad Jurídica</h3>
                            <p>Registros inalterables de actividad para cumplimiento legal riguroso y auditorías de estándares internacionales.</p>
                        </div>
                        <div className="card">
                            <div className="card-icon"><Zap size={32} /></div>
                            <h3>Respuesta Inmediata</h3>
                            <p>Sistema SOS con telemetría avanzada y envío automático de coordenadas críticas ante cualquier eventualidad.</p>
                        </div>
                    </div>
                </section>

                <section className="section" style={{ background: 'rgba(0,0,0,0.3)' }}>
                    <div className="section-tag-center">
                        <span className="section-tag">Gestión Corporativa</span>
                    </div>
                    <h2 className="section-title">Ecosistema Integrado</h2>

                    <div className="bento-grid">
                        <div className="bento-item bento-1">
                            <h3 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Control de Flotas Externas</h3>
                            <p>Estandarice la seguridad de toda su red logística. Supervise subcontratistas y proveedores con el mismo rigor y precisión que su flota propia.</p>
                        </div>
                        <div className="bento-item bento-2">
                            <BarChart3 style={{ color: 'var(--accent)', marginBottom: '20px', width: '48px', height: '48px' }} />
                            <h3>Telemetría Avanzada</h3>
                            <p>Reportes automáticos de eficiencia y alertas de conducción temeraria.</p>
                        </div>
                        <div className="bento-item bento-3">
                            <Smartphone style={{ color: 'var(--accent)', marginBottom: '20px', width: '48px', height: '48px' }} />
                            <h3>App para Choferes</h3>
                            <p>Interfaz premium diseñada para condiciones extremas de baja visibilidad.</p>
                        </div>
                        <div className="bento-item bento-4">
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                                <h3 style={{ fontSize: '2.2rem', marginBottom: '20px' }}>Soporte Elite 24/7</h3>
                                <p style={{ maxWidth: '800px' }}>Nivel de servicio diseñado para operaciones de alta disponibilidad donde el monitoreo constante es el estándar.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section" id="contacto">
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', padding: '100px 0' }}>
                        <h2 className="section-title">Eleve el estándar de su seguridad hoy</h2>
                        <p style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', marginBottom: '64px', fontWeight: 300 }}>
                            Solicite una demostración personalizada para su equipo técnico y de operaciones.
                        </p>
                        <a href="mailto:ventas@mineconnect.com.ar" className="btn btn-primary">CONTACTAR CON UN EXPERTO</a>
                    </div>
                </section>

                <footer>
                    <div className="footer-logo">MineConnect<span>SAT</span></div>
                    <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', opacity: 0.6, fontWeight: 300 }}>
                        &copy; 2026 MineConnect SAT. Ingeniería Argentina de Clase Mundial.
                    </p>
                </footer>
            </div>
        </div>
    );
}
