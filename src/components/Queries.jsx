import React from 'react';

const Queries = () => {
    const queryData = [
        {
            title: "1. Latauskuitin laskenta",
            description: "Lasketaan lataustapahtuman energiankulutus ja lopullinen hinta x asiakkaalle kuitin tekemistä varten.",
            sql: `SELECT 
    LATAUSTAPAHTUMA.TapahtumaId,
    ASIAKAS.Etunimi,
    ASIAKAS.Sukunimi,
    (LATAUSTAPAHTUMA.Lopetuslukema - LATAUSTAPAHTUMA.Aloituslukema) AS Kulutus_kWh,
    ROUND((LATAUSTAPAHTUMA.Lopetuslukema - LATAUSTAPAHTUMA.Aloituslukema) * HINNOITTELUMALLI.KwhHinta + HINNOITTELUMALLI.Aloitusmaksu, 2) AS Hinta_Euro
FROM LATAUSTAPAHTUMA
JOIN ASIAKAS ON LATAUSTAPAHTUMA.AsiakasId = ASIAKAS.AsiakasId
JOIN HINNOITTELUMALLI ON LATAUSTAPAHTUMA.MalliId = HINNOITTELUMALLI.MalliId
WHERE LATAUSTAPAHTUMA.TapahtumaId = 1;`
        },
        {
            title: "2. Vapaiden latauspisteiden haku",
            description: "Listataan kaikki asemat ja lasketaan kuinka monta vapaata pistettä kullakin asemalla on tällä hetkellä karttanäkymää varten.",
            sql: `SELECT 
    LATAUSASEMA.Nimi, 
    LATAUSASEMA.Osoite,
    COUNT(LATAUSPISTE.PisteId) AS Vapaiden_Pisteiden_Maara
FROM LATAUSASEMA
JOIN LATAUSPISTE ON LATAUSASEMA.AsemaId = LATAUSPISTE.AsemaId
WHERE LATAUSPISTE.Tila = 'Vapaa'
GROUP BY LATAUSASEMA.Nimi;`
        },
        {
            title: "3. Massahuoltopäivitys",
            description: "Päivitetään kaikki x aseman latauspisteet huoltotilaan, jos koko latausasema menee huoltoon.",
            sql: `UPDATE LATAUSPISTE 
SET Tila = 'Huollossa' 
WHERE AsemaId = (
    SELECT AsemaId 
    FROM LATAUSASEMA 
    WHERE Nimi = 'ABC Tiiriö'
);`
        },
        {
            title: "4. Vanhojen tietojen poisto",
            description: "Poistetaan kaikki lataustapahtumat, jotka ovat päättyneet ennen vuotta 2020 tietokannan optimoimiseksi.",
            sql: `DELETE FROM LATAUSTAPAHTUMA
WHERE Lopetusaika < '2020-01-01 00:00:00';`
        }
    ];

    return (
        <div style={{ maxWidth: '1100px', margin: '0 auto', color: '#fff', padding: '0 10px' }}>
            <div style={{ display: 'grid', gap: '25px' }}>
                {queryData.map((query, index) => (
                    <div key={index} style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        padding: '25px',
                        borderRadius: '20px',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(12px)',
                        textAlign: 'left',
                        maxWidth: '100%', // Estää konttia venymästä
                        boxSizing: 'border-box'
                    }}>
                        <h3 style={{ color: '#B19EEF', marginBottom: '10px', fontSize: '1.2rem' }}>{query.title}</h3>
                        <p style={{ opacity: 0.8, marginBottom: '20px', fontSize: '0.9rem', lineHeight: '1.5' }}>{query.description}</p>

                        {/* KOODIBLOKKI RESPONSIIVISILLA SÄÄDÖILLÄ */}
                        <div style={{
                            background: '#000',
                            padding: '15px',
                            borderRadius: '12px',
                            borderLeft: '4px solid #B19EEF',
                            overflowX: 'auto', // Mahdollistaa vaakaskrollauksen mobiilissa
                            WebkitOverflowScrolling: 'touch' // Sulava skrollaus iOS-laitteilla
                        }}>
                            <pre style={{
                                margin: 0,
                                fontSize: '0.8rem',
                                color: '#ccc',
                                fontFamily: 'monospace',
                                whiteSpace: 'pre-wrap', // Pakottaa rivityksen, jos rivi on liian pitkä
                                wordBreak: 'break-word'  // Katkaisee pitkät sanat/merkkijonot
                            }}>
                                <code>{query.sql}</code>
                            </pre>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Queries;