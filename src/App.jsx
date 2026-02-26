import React from 'react';
import PixelBlast from './components/PixelBlast/PixelBlast';
import Requirements from './components/Vaatimukset';
import ERkaavio from './components/ERkaavio';
import Transformaatio from './components/Transformointi';
import SqlData from './components/SqlData';
import Queries from './components/Queries';
import Normalisointi from './components/Normalisointi';

function App() {
  const navLinks = [
    { name: 'Vaatimusmäärittely', href: '#vaatimukset' },
    { name: 'ER-kaavio', href: '#er-malli' },
    { name: 'Transformointi', href: '#skeema' },
    { name: 'SQL & Data', href: '#sql-data' },
    { name: 'Kyselyt', href: '#kyselyt' },
    { name: 'Normalisointi', href: '#normalisointi' },
  ];

  return (
    <div className="app-container" style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', padding: '0', margin: '0' }}>

      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none'
      }}>
        <PixelBlast
          variant="triangle"
          pixelSize={4}
          color="#30225e"
          patternScale={2}
          patternDensity={1}
          pixelSizeJitter={0}
          enableRipples={false}
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid={false}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.5}
          edgeFade={0.25}
          transparent
        />
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>

        <nav style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          background: 'rgba(26, 26, 26, 0.8)',
          backdropFilter: 'blur(10px)',
          color: 'white',
          padding: '1rem',
          zIndex: 100
        }}>
          <ul style={{ display: 'flex', justifyContent: 'center', gap: '20px', listStyle: 'none', margin: 0 }}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <main style={{ marginTop: '80px', padding: '20px', fontFamily: 'sans-serif', lineHeight: '1.6' }}>

          <header style={{ textAlign: 'center', padding: '100px 0' }}>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '10px' }}>EV-Charge</h1>
            <p style={{ fontSize: '1.2rem', opacity: 0.8 }}>Sähköautojen latausverkoston hallintajärjestelmä</p>
          </header>

          <section id="vaatimukset" style={{ minHeight: '80vh', padding: '80px 20px' }}>
            <header style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h2 style={{ fontSize: '2.5rem' }}>Tietokannan vaatimusmäärittely</h2>
            </header>
            <Requirements />
          </section>

          <section id="er-malli" style={{ minHeight: '80vh', padding: '80px 20px' }}>
            <header style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h2 style={{ fontSize: '2.5rem' }}>Käsitteellinen mallintaminen</h2>
            </header>
            <ERkaavio />
          </section>

          <section>
            <section id="skeema" style={{ minHeight: '80vh', padding: '80px 20px' }}>
              <header style={{ textAlign: 'center', marginBottom: '50px' }}>
                <h2 style={{ fontSize: '2.5rem' }}>Transformointi relaatioksi</h2>
              </header>
              <Transformaatio />
            </section>
          </section>

          <section id="sql-data" style={{ minHeight: '80vh', padding: '80px 20px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            <header style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h2 style={{ fontSize: '2.5rem' }}>SQL-toteutus ja Testidata</h2>
            </header>
            <SqlData />
          </section>

          <section id="kyselyt" style={{ minHeight: '80vh', padding: '80px 20px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            <header style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h2 style={{ fontSize: '2.5rem' }}>Olennaiset SQL-kyselyt</h2>
            </header>
            <Queries />
          </section>

          <section id="normalisointi" style={{ minHeight: '100vh', padding: '80px 20px' }}>
            <header style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h2 style={{ fontSize: '2.5rem' }}>Normalisointi</h2>
            </header>
            <Normalisointi />
          </section>

        </main>

        <footer style={{ textAlign: 'center', padding: '60px', background: 'rgba(0,0,0,0.5)' }}>
          <p style={{ opacity: 0.5 }}>&copy; 2026 - EV Charge Portfolio Project</p>
        </footer>
      </div>
    </div>
  );
}

export default App;