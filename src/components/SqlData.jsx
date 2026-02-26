import React, { useState } from 'react';

const SqlData = () => {
    const [activeTab, setActiveTab] = useState('schema');

    const schemaSql = `PRAGMA foreign_keys = ON;

CREATE TABLE ASIAKAS (
    AsiakasId INTEGER PRIMARY KEY AUTOINCREMENT,
    Sahkoposti VARCHAR(255) NOT NULL UNIQUE,
    Jasenyystaso VARCHAR(20) DEFAULT 'Perus',
    Etunimi VARCHAR(20) NOT NULL,
    Sukunimi VARCHAR(20) NOT NULL
);

CREATE TABLE LATAUSASEMA (
    AsemaId INTEGER PRIMARY KEY AUTOINCREMENT,
    Nimi VARCHAR(50) NOT NULL UNIQUE,
    Osoite VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE HINNOITTELUMALLI (
    MalliId INTEGER PRIMARY KEY AUTOINCREMENT,
    KwhHinta NUMERIC(7,2) NOT NULL,
    Aloitusmaksu NUMERIC(7,2) NOT NULL
);

CREATE TABLE ASIAKAS_PUHELINNUMERO (
    AsiakasId INTEGER,
    Puhelinnumero VARCHAR(20),
    PRIMARY KEY (AsiakasId, Puhelinnumero),
    FOREIGN KEY (AsiakasId) REFERENCES ASIAKAS (AsiakasId)
);

CREATE TABLE LATAUSASEMA_KOORDINAATIT (
    AsemaId INTEGER PRIMARY KEY,
    Latitudi REAL NOT NULL,
    Longitudi REAL NOT NULL,
    FOREIGN KEY (AsemaId) REFERENCES LATAUSASEMA (AsemaId)
);

CREATE TABLE LATAUSPISTE (
    PisteId INTEGER PRIMARY KEY AUTOINCREMENT,
    Tila VARCHAR(30) NOT NULL,
    AsemaId INTEGER NOT NULL,
    FOREIGN KEY (AsemaId) REFERENCES LATAUSASEMA (AsemaId)
);

CREATE TABLE TYYPPI2 (
    PisteId INTEGER PRIMARY KEY,
    MaxAmpeerit INTEGER NOT NULL,
    Vaiheet INTEGER NOT NULL CHECK (Vaiheet IN (1, 3)),
    FOREIGN KEY (PisteId) REFERENCES LATAUSPISTE (PisteId)
);

CREATE TABLE DC (
    PisteId INTEGER PRIMARY KEY,
    Liitintyyppi VARCHAR(30) NOT NULL,
    Jaahdytys VARCHAR(30) NOT NULL,
    FOREIGN KEY (PisteId) REFERENCES LATAUSPISTE (PisteId)
);

CREATE TABLE LATAUSTAPAHTUMA (
    TapahtumaId INTEGER PRIMARY KEY AUTOINCREMENT,
    Aloitusaika DATETIME NOT NULL,
    Lopetusaika DATETIME,
    Aloituslukema REAL NOT NULL,
    Lopetuslukema REAL,
    MalliId INTEGER NOT NULL,
    PisteId INTEGER NOT NULL,
    AsiakasId INTEGER NOT NULL,
    FOREIGN KEY (MalliId) REFERENCES HINNOITTELUMALLI (MalliId),
    FOREIGN KEY (PisteId) REFERENCES LATAUSPISTE (PisteId),
    FOREIGN KEY (AsiakasId) REFERENCES ASIAKAS (AsiakasId)
);`;

    const dataSql = `INSERT INTO ASIAKAS (Sahkoposti, Jasenyystaso, Etunimi, Sukunimi) VALUES
('lauri.lataaja@email.com', 'Premium', 'Lauri', 'Lataaja'),
('matti.meikalainen@email.com', 'Perus', 'Matti', 'Meikäläinen');

INSERT INTO LATAUSASEMA (Nimi, Osoite) VALUES
('ABC Tiiriö', 'Paroistentie 1, Hämeenlinna'),
('St1 Raasepori Karjaa', 'Lepinpellonkatu 1, 10320 Karjaa');

INSERT INTO HINNOITTELUMALLI (KwhHinta, Aloitusmaksu) VALUES
(0.35, 1.00),   -- Normaali AC lataus
(0.55, 2.50);   -- Pika DC lataus

INSERT INTO ASIAKAS_PUHELINNUMERO (AsiakasId, Puhelinnumero) VALUES
(1, '050-4949335'),
(1, '050-9393553'),
(2, '044-1234556');

INSERT INTO LATAUSASEMA_KOORDINAATIT (AsemaId, Latitudi, Longitudi) VALUES
(1, 61.01400, 24.41670),
(2, 60.05380, 23.64776);

INSERT INTO LATAUSPISTE (Tila, AsemaId) VALUES
('Vapaa', 1),   -- Piste 1 (Tiiriössä)
('Varattu', 1), -- Piste 2 (Tiiriössä)
('Vapaa', 2);   -- Piste 3 (Karjaalla)

INSERT INTO TYYPPI2 (PisteId, MaxAmpeerit, Vaiheet) VALUES
(1, 16, 3);     -- Piste 1 = AC-Laturi

INSERT INTO DC (PisteId, Liitintyyppi, Jaahdytys) VALUES
(2, 'CCS', 'Neste'),    -- Piste 2 = DC-Laturi
(3, 'CHAdeMO', 'Ilma'); -- Piste 3 = DC-Laturi

INSERT INTO LATAUSTAPAHTUMA (Aloitusaika, Lopetusaika, Aloituslukema, Lopetuslukema, MalliId, PisteId, AsiakasId) VALUES
('2026-02-25 08:00:00', '2026-02-25 10:00:00', 1200.0, 1230.5, 1, 1, 1),
('2026-02-25 12:30:00', '2026-02-25 13:45:00', 5500.0, 5535.3, 2, 2, 2),
('2026-02-25 18:30:00', NULL, 1230.5, NULL, 1, 1, 2);`;

    return (
        <div style={{ maxWidth: '1100px', margin: '0 auto', color: '#fff' }}>
            <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                padding: '30px',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                overflowX: 'auto',
                WebkitOverflowScrolling: 'touch',
                backdropFilter: 'blur(15px)',
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
            }}>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                    <button
                        onClick={() => setActiveTab('schema')}
                        style={{
                            padding: '10px 20px', borderRadius: '10px', border: 'none',
                            background: activeTab === 'schema' ? '#B19EEF' : 'rgba(255,255,255,0.1)',
                            color: activeTab === 'schema' ? '#000' : '#fff', cursor: 'pointer', fontWeight: 'bold'
                        }}>schema.sqlite</button>
                    <button
                        onClick={() => setActiveTab('data')}
                        style={{
                            padding: '10px 20px', borderRadius: '10px', border: 'none',
                            background: activeTab === 'data' ? '#B19EEF' : 'rgba(255,255,255,0.1)',
                            color: activeTab === 'data' ? '#000' : '#fff', cursor: 'pointer', fontWeight: 'bold'
                        }}>data.sqlite</button>
                </div>

                <div style={{
                    background: 'rgba(0, 0, 0, 0.5)', padding: '20px', borderRadius: '15px',
                    border: '1px solid rgba(177, 158, 239, 0.3)', overflowX: 'auto', textAlign: 'left'
                }}>
                    <pre style={{ margin: 0, fontSize: '0.9rem', color: '#B19EEF', fontFamily: 'monospace' }}>
                        <code>{activeTab === 'schema' ? schemaSql : dataSql}</code>
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default SqlData;