import React from 'react';

const Transformation = () => {
    const tables = [
        {
            name: "ASIAKAS",
            columns: ["AsiakasId (PK)", "Sähköposti (Unique)", "Jäsenyystaso", "Etunimi", "Sukunimi"],
            refs: []
        },
        {
            name: "ASIAKAS_PUHELINNUMERO",
            columns: ["AsiakasId (PFK)", "Puhelinnumero (PK)"],
            refs: ["AsiakasId -> ASIAKAS.AsiakasId"]
        },
        {
            name: "LATAUSASEMA",
            columns: ["AsemaId (PK)", "Nimi", "Osoite"],
            refs: []
        },
        {
            name: "LATAUSASEMA_KOORDINAATIT",
            columns: ["AsemaId (PFK)", "Latitudi", "Longitudi"],
            refs: ["AsemaId -> LATAUSASEMA.AsemaId"]
        },
        {
            name: "LATAUSPISTE",
            columns: ["PisteId (PK)", "Tila", "AsemaId (FK)"],
            refs: ["AsemaId -> LATAUSASEMA.AsemaId"]
        },
        {
            name: "TYYPPI2 (AC)",
            columns: ["PisteId (PFK)", "MaxAmpeerit", "Vaiheet"],
            refs: ["PisteId -> LATAUSPISTE.PisteId"]
        },
        {
            name: "DC (Pika)",
            columns: ["PisteId (PFK)", "Liitintyyppi", "Jäähdytys"],
            refs: ["PisteId -> LATAUSPISTE.PisteId"]
        },
        {
            name: "HINNOITTELUMALLI",
            columns: ["MalliId (PK)", "KwhHinta", "Aloitusmaksu"],
            refs: []
        },
        {
            name: "LATAUSTAPAHTUMA",
            columns: ["TapahtumaId (PK)", "Aloitusaika", "Lopetusaika", "Aloituslukema", "Lopetuslukema", "MalliId (FK)", "PisteId (FK)", "AsiakasId (FK)"],
            refs: [
                "MalliId -> HINNOITTELUMALLI.MalliId",
                "PisteId -> LATAUSPISTE.PisteId",
                "AsiakasId -> ASIAKAS.AsiakasId"
            ]
        }
    ];

    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', color: '#fff', padding: '0 20px' }}>

            <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                padding: '40px',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(15px)',
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
            }}>
                <h2 style={{ color: '#B19EEF', textAlign: 'center', marginBottom: '40px' }}>Relaatiotietokannan kaava</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                    gap: '20px'
                }}>
                    {tables.map((table, index) => (
                        <div key={index} style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            padding: '20px',
                            borderRadius: '15px',
                            border: '1px solid rgba(177, 158, 239, 0.2)',
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <h4 style={{ color: '#B19EEF', margin: '0 0 10px 0', borderBottom: '1px solid rgba(177, 158, 239, 0.3)', paddingBottom: '5px' }}>
                                {table.name}
                            </h4>

                            <div style={{ fontSize: '0.9rem', marginBottom: '15px' }}>
                                <strong>Attribuutit:</strong>
                                <p style={{ opacity: 0.8, margin: '5px 0' }}>
                                    {table.columns.join(', ')}
                                </p>
                            </div>

                            {table.refs.length > 0 && (
                                <div style={{ marginTop: 'auto', fontSize: '0.8rem', fontStyle: 'italic', color: '#B19EEF' }}>
                                    <div style={{ opacity: 0.6, marginBottom: '2px', color: '#fff' }}>Viitaukset:</div>
                                    {table.refs.map((ref, i) => (
                                        <div key={i}>↳ {ref}</div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Transformation;