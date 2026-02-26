import React from 'react';

const Transformation = () => {
    const tables = [
        {
            name: "HINNOITTELUMALLI",
            columns: ["MalliId (PK)", "KwhHinta", "Aloitusmaksu"],
            refs: []
        },
        {
            name: "LATAUSTAPAHTUMA",
            columns: ["TapahtumaId (PK)", "Aloitusaika", "Lopetusaika", "Aloituslukema", "Lopetuslukema", "MalliId (FK)", "PisteId (FK)", "AsiakasId (FK)"],
            refs: [
                "LATAUSTAPAHTUMA.MalliId -> HINNOITTELUMALLI.MalliId",
                "LATAUSTAPAHTUMA.PisteId -> LATAUSPISTE.PisteId",
                "LATAUSTAPAHTUMA.AsiakasId -> ASIAKAS.AsiakasId"
            ]
        },
        {
            name: "ASIAKAS",
            columns: ["AsiakasId (PK)", "Sähköposti (Unique)", "Jäsenyystaso", "Etunimi", "Sukunimi"],
            refs: []
        },
        {
            name: "ASIAKAS_PUHELINNUMERO",
            columns: ["AsiakasId (PFK)", "Puhelinnumero (PK)"],
            refs: ["ASIAKAS_PUHELINNUMERO.AsiakasId -> Asiakas.AsiakasId"]
        },
        {
            name: "LATAUSASEMA",
            columns: ["AsemaId (PK)", "Nimi", "Osoite"],
            refs: []
        },
        {
            name: "LATAUSASEMA_KOORDINAATIT",
            columns: ["AsemaId (PFK)", "Latitudi", "Longitudi"],
            refs: ["LATAUSASEMA_KOORDINAATIT.AsemaId -> LATAUSASEMA.AsemaId"]
        },
        {
            name: "LATAUSPISTE",
            columns: ["PisteId (PK)", "Tila", "AsemaId (FK)"],
            refs: ["LATAUSPISTE.AsemaId -> LATAUSASEMA.AsemaId"]
        },
        {
            name: "TYYPPI2",
            columns: ["PisteId (PFK)", "MaxAmpeerit", "Vaiheet"],
            refs: ["TYYPPI2.PisteId -> LATAUSPISTE.PisteId"]
        },
        {
            name: "DC",
            columns: ["PisteId (PFK)", "Liitintyyppi", "Jäähdytys"],
            refs: ["DC.PisteId -> LATAUSPISTE.PisteId"]
        }
    ];

    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', color: '#fff', padding: '0 10px', boxSizing: 'border-box' }}>

            <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                padding: '30px 15px',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(15px)',
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                width: '100%',
                boxSizing: 'border-box'
            }}>
                <h2 style={{ color: '#B19EEF', textAlign: 'center', marginBottom: '40px', fontSize: 'clamp(1.5rem, 5vw, 2rem)' }}>
                    Relaatiotietokannan kaava
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                    gap: '20px',
                    width: '100%'
                }}>
                    {tables.map((table, index) => (
                        <div key={index} style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            padding: '20px',
                            borderRadius: '15px',
                            border: '1px solid rgba(177, 158, 239, 0.2)',
                            display: 'flex',
                            flexDirection: 'column',
                            boxSizing: 'border-box',
                            width: '100%',
                            overflowWrap: 'anywhere',
                            wordBreak: 'break-word'
                        }}>
                            <h4 style={{
                                color: '#B19EEF',
                                margin: '0 0 10px 0',
                                borderBottom: '1px solid rgba(177, 158, 239, 0.3)',
                                paddingBottom: '5px',
                                fontSize: '1.1rem',
                                overflowWrap: 'anywhere',
                                hyphens: 'auto'
                            }}>
                                {table.name}
                            </h4>

                            <div style={{ fontSize: '0.9rem', marginBottom: '15px' }}>
                                <strong style={{ display: 'block', marginBottom: '5px' }}>Attribuutit:</strong>
                                <p style={{
                                    opacity: 0.8,
                                    margin: 0,
                                    lineHeight: '1.4',
                                    overflowWrap: 'anywhere'
                                }}>
                                    {table.columns.join(', ')}
                                </p>
                            </div>

                            {table.refs.length > 0 && (
                                <div style={{
                                    marginTop: 'auto',
                                    fontSize: '0.8rem',
                                    fontStyle: 'italic',
                                    color: '#B19EEF',
                                    overflowWrap: 'anywhere'
                                }}>
                                    <div style={{ opacity: 0.6, marginBottom: '5px', color: '#fff', fontStyle: 'normal' }}>Viitaukset:</div>
                                    {table.refs.map((ref, i) => (
                                        <div key={i} style={{ marginBottom: '6px', lineHeight: '1.3' }}>↳ {ref}</div>
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