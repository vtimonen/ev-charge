import React from 'react';

const Requirements = () => {
  const dataAreas = [
    {
      title: "Infrastruktuuri",
      items: [
        "Latausasemien sijainnit ja yksittäiset pisteet.",
        "Erottelu AC-lataukseen ja DC-pikalataukseen teknisten ominaisuuksien mukaan."
      ]
    },
    {
      title: "Asiakkaat",
      items: [
        "Perustiedot ja jäsenyystasot.",
        "Yksikäsitteinen tunnistaminen sähköpostiosoitteella."
      ]
    },
    {
      title: "Hinnoittelu",
      items: [
        "Eri hinnoittelumallit kWh-perusteella.",
        "Teholuokkakohtainen hinnoittelu (Pika vs. Normaali)."
      ]
    },
    {
      title: "Lataustapahtumat",
      items: [
        "Käyttäjä-, sijainti- ja aikatiedot.",
        "Laskennallinen loppuhinta kulutuksen ja mallin mukaan."
      ]
    }
  ];

  return (
    <div style={{ maxWidth: '1300px', margin: '0 auto', color: '#fff', padding: '0 20px' }}>

      <div style={{
        background: 'rgba(255, 255, 255, 0.03)',
        padding: '40px',
        borderRadius: '24px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        marginBottom: '60px',
        backdropFilter: 'blur(15px)',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
      }}>
        <h2 style={{ color: '#B19EEF', marginTop: 0, textAlign: 'center', fontSize: '2rem' }}>Kohdealueen kuvaus</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.9', opacity: 0.9, textAlign: 'center', maxWidth: '800px', margin: '20px auto 0' }}>
          Sähköautojen latausverkon hallintajärjestelmän tarkoituksena on hallinnoida latausverkostoa,
          joka koostuu latausasemista, pisteistä ja asiakastapahtumista. Järjestelmä palvelee sekä
          <strong> operaattoria</strong> hallinnan osalta että <strong>asiakkaita</strong> lataamisen ja laskutuksen osalta.
        </p>
      </div>

      <h3 style={{ textAlign: 'center', marginBottom: '40px', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '1.2rem', opacity: 0.7 }}>
        Tietokannan käyttötarve
      </h3>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px'
      }}>
        {dataAreas.map((area, index) => (
          <div key={index} style={{
            background: 'rgba(255, 255, 255, 0.06)',
            padding: '30px',
            borderRadius: '20px',
            border: '1px solid rgba(177, 158, 239, 0.3)',
            backdropFilter: 'blur(12px)',
            transition: 'all 0.3s ease',
            cursor: 'default',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
          }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
            }}
          >
            <h4 style={{
              color: '#B19EEF',
              marginBottom: '20px',
              fontSize: '1.3rem',
              textAlign: 'center',
              fontWeight: '700'
            }}>
              {area.title}
            </h4>

            <ul style={{
              padding: 0,
              margin: 0,
              opacity: 0.85,
              fontSize: '0.95rem',
              listStyle: 'none',
              textAlign: 'center'
            }}>
              {area.items.map((item, i) => (
                <li key={i} style={{ marginBottom: '15px', lineHeight: '1.5' }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Requirements;