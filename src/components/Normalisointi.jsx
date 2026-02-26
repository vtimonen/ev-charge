import React from 'react';

const Normalization = () => {
    return (
        <div style={{ maxWidth: '1100px', margin: '0 auto', color: '#fff', padding: '0 20px', textAlign: 'left' }}>

            <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                padding: '40px',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(15px)',
                marginBottom: '50px',
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
            }}>
                <h2 style={{ color: '#B19EEF', marginBottom: '30px', textAlign: 'center' }}>Funktionaalisten riippuvuuksien etsiminen</h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                    <section>
                        <h4 style={{ color: '#B19EEF', marginBottom: '10px' }}>ASIAKAS</h4>
                        <p style={{ opacity: 0.9, fontSize: '0.95rem', marginBottom: '10px' }}>
                            Pääavain määrittää yksikäsitteisesti muut attribuutit. Myös sähköposti on määritelty uniikiksi, joten se toimii ehdokasavaimena ja määrittää muut tiedot:
                        </p>
                        <code style={{ display: 'block', background: 'rgba(0,0,0,0.3)', padding: '10px', borderRadius: '8px', color: '#ccc' }}>
                            {"{AsiakasId} -> {Sahkoposti, Jasenyystaso, Etunimi, Sukunimi}"}<br />
                            {"{Sahkoposti} -> {AsiakasId, Jasenyystaso, Etunimi, Sukunimi}"}
                        </code>
                        <p style={{ opacity: 0.7, fontSize: '0.9rem', marginTop: '10px' }}>Muita funktionaalisia riippuvuuksia ei ole, sillä muut attribuutit eivät määritä mitään.</p>
                    </section>

                    <section>
                        <h4 style={{ color: '#B19EEF', marginBottom: '10px' }}>ASIAKAS_PUHELINNUMERO</h4>
                        <p style={{ opacity: 0.9, fontSize: '0.95rem', marginBottom: '10px' }}>
                            Pääavaimen lisäksi ei ole muita attribuutteja, joten se on ainoa funktionaalinen riippuvuus:
                        </p>
                        <code style={{ display: 'block', background: 'rgba(0,0,0,0.3)', padding: '10px', borderRadius: '8px', color: '#ccc' }}>
                            {"{AsiakasId, Puhelinnumero} -> {AsiakasId, Puhelinnumero}"}
                        </code>
                        <p style={{ opacity: 0.7, fontSize: '0.9rem', marginTop: '10px' }}>Tämä on triviaali riippuvuus, koska molemmilla puolilla on samat attribuutit.</p>
                    </section>

                    <section>
                        <h4 style={{ color: '#B19EEF', marginBottom: '10px' }}>LATAUSASEMA</h4>
                        <p style={{ opacity: 0.9, fontSize: '0.95rem', marginBottom: '10px' }}>Pääavain määrittää yksikäsitteisesti muut attribuutit:</p>
                        <code style={{ display: 'block', background: 'rgba(0,0,0,0.3)', padding: '10px', borderRadius: '8px', color: '#ccc' }}>
                            {"{AsemaId} -> {Nimi, Osoite}"}
                        </code>
                        <p style={{ opacity: 0.7, fontSize: '0.9rem', marginTop: '10px' }}>Muita funktionaalisia riippuvuuksia ei ole, sillä muut attribuutit eivät määritä mitään.</p>
                    </section>

                    <section>
                        <h4 style={{ color: '#B19EEF', marginBottom: '10px' }}>LATAUSASEMA_KOORDINAATIT</h4>
                        <p style={{ opacity: 0.9, fontSize: '0.95rem', marginBottom: '10px' }}>Pääavain määrittää yksikäsitteisesti muut attribuutit:</p>
                        <code style={{ display: 'block', background: 'rgba(0,0,0,0.3)', padding: '10px', borderRadius: '8px', color: '#ccc' }}>
                            {"{AsemaId} -> {Latitudi, Longitudi}"}
                        </code>
                        <p style={{ opacity: 0.7, fontSize: '0.9rem', marginTop: '10px' }}>Muita funktionaalisia riippuvuuksia ei ole, sillä muut attribuutit eivät määritä mitään.</p>
                    </section>

                    <section>
                        <h4 style={{ color: '#B19EEF', marginBottom: '10px' }}>LATAUSPISTE</h4>
                        <p style={{ opacity: 0.9, fontSize: '0.95rem', marginBottom: '10px' }}>Pääavain määrittää yksikäsitteisesti muut attribuutit:</p>
                        <code style={{ display: 'block', background: 'rgba(0,0,0,0.3)', padding: '10px', borderRadius: '8px', color: '#ccc' }}>
                            {"{PisteId} -> {Tila, AsemaId}"}
                        </code>
                        <p style={{ opacity: 0.7, fontSize: '0.9rem', marginTop: '10px' }}>Muita funktionaalisia riippuvuuksia ei ole, sillä muut attribuutit eivät määritä mitään.</p>
                    </section>

                    <section>
                        <h4 style={{ color: '#B19EEF', marginBottom: '10px' }}>TYYPPI2</h4>
                        <p style={{ opacity: 0.9, fontSize: '0.95rem', marginBottom: '10px' }}>Pääavain määrittää yksikäsitteisesti muut attribuutit:</p>
                        <code style={{ display: 'block', background: 'rgba(0,0,0,0.3)', padding: '10px', borderRadius: '8px', color: '#ccc' }}>
                            {"{PisteId} -> {MaxAmpeerit, Vaiheet}"}
                        </code>
                        <p style={{ opacity: 0.7, fontSize: '0.9rem', marginTop: '10px' }}>Muita funktionaalisia riippuvuuksia ei ole, sillä muut attribuutit eivät määritä mitään.</p>
                    </section>

                    <section>
                        <h4 style={{ color: '#B19EEF', marginBottom: '10px' }}>DC</h4>
                        <p style={{ opacity: 0.9, fontSize: '0.95rem', marginBottom: '10px' }}>Pääavain määrittää yksikäsitteisesti muut attribuutit:</p>
                        <code style={{ display: 'block', background: 'rgba(0,0,0,0.3)', padding: '10px', borderRadius: '8px', color: '#ccc' }}>
                            {"{PisteId} -> {Liitintyyppi, Jaahdytys}"}
                        </code>
                        <p style={{ opacity: 0.7, fontSize: '0.9rem', marginTop: '10px' }}>Muita funktionaalisia riippuvuuksia ei ole, sillä muut attribuutit eivät määritä mitään.</p>
                    </section>

                    <section>
                        <h4 style={{ color: '#B19EEF', marginBottom: '10px' }}>LATAUSTAPAHTUMA</h4>
                        <p style={{ opacity: 0.9, fontSize: '0.95rem', marginBottom: '10px' }}>Pääavain määrittää yksikäsitteisesti muut attribuutit:</p>
                        <code style={{ display: 'block', background: 'rgba(0,0,0,0.3)', padding: '10px', borderRadius: '8px', color: '#ccc' }}>
                            {"{TapahtumaId} -> {Aloitusaika, Lopetusaika, Aloituslukema, Lopetuslukema, MalliId, PisteId, AsiakasId}"}
                        </code>
                        <p style={{ opacity: 0.7, fontSize: '0.9rem', marginTop: '10px' }}>Muita funktionaalisia riippuvuuksia ei ole, sillä muut attribuutit eivät määritä mitään.</p>
                    </section>
                </div>
            </div>

            <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                padding: '40px',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(15px)',
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
            }}>
                <h2 style={{ color: '#B19EEF', marginBottom: '20px', textAlign: 'center' }}>Relaatioiden normalisointi</h2>

                <p style={{ opacity: 0.9, lineHeight: '1.6', marginBottom: '30px' }}>
                    Kaikki relaatiot ovat 1NF-muodossa, koska jokaisella relaatiolla on pääavain, rivien järjestyksellä ei ole merkitystä ja jokainen attribuutti on atominen. Relaatioihin ei tallenneta listoja tai useita arvoja yhden attribuutin sisään, vaan ne on erotettu omiksi riveiksi tai relaatioiksi.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                    <section>
                        <h4 style={{ color: '#B19EEF', marginBottom: '10px', borderBottom: '1px solid rgba(177, 158, 239, 0.3)', paddingBottom: '5px' }}>ASIAKAS-relaatio</h4>
                        <ul style={{ paddingLeft: '20px', opacity: 0.9, lineHeight: '1.6' }}>
                            <li>2NF täyttyy, koska 1NF on täytetty ja mikään avaimeton attribuutti ei ole riippuvainen vain osasta pääavainta.</li>
                            <li>3NF täyttyy, koska 2NF on täytetty ja kaikki avaimettomat attribuutit riippuvat suoraan vain pääavaimesta.</li>
                            <li>BCNF täyttyy, koska 3NF on täytetty ja kaikki attribuutit riippuvat vain ehdokasavaimista.</li>
                            <li>4NF täyttyy, koska BCNF on täytetty eikä relaatiossa ole moniarvoisia riippuvuuksia.</li>
                        </ul>
                    </section>

                    <section>
                        <h4 style={{ color: '#B19EEF', marginBottom: '10px', borderBottom: '1px solid rgba(177, 158, 239, 0.3)', paddingBottom: '5px' }}>ASIAKAS_PUHELINNUMERO-relaatio</h4>
                        <ul style={{ paddingLeft: '20px', opacity: 0.9, lineHeight: '1.6' }}>
                            <li>4NF täyttyy, koska kaikki aiemmat normaalimuodot on täytetty eikä relaatiossa ole muita attribuutteja kuin pääavain.</li>
                            <li>Riippuvuus on triviaali, sillä molempien puolien attribuutit ovat samat. Sen ansiosta se ei riko mitään normaalimuotojen sääntöjä. Taulu luotiin poistamaan moniarvoinen attribuutti ASIAKAS-relaatiosta.</li>
                        </ul>
                    </section>

                    <section>
                        <h4 style={{ color: '#B19EEF', marginBottom: '10px', borderBottom: '1px solid rgba(177, 158, 239, 0.3)', paddingBottom: '5px' }}>LATAUSASEMA-relaatio</h4>
                        <ul style={{ paddingLeft: '20px', opacity: 0.9, lineHeight: '1.6' }}>
                            <li>2NF täyttyy, koska pääavain koostuu vain yhdestä sarakkeesta.</li>
                            <li>3NF täyttyy, koska kaikki tiedot riippuvat vain asemasta itsestään.</li>
                            <li>BCNF täyttyy, koska kaikki attribuutit riippuvat ehdokasavaimista.</li>
                            <li>4NF täyttyy, koska moniarvoisia riippuvuuksia ei ole.</li>
                        </ul>
                    </section>

                    <section>
                        <h4 style={{ color: '#B19EEF', marginBottom: '10px', borderBottom: '1px solid rgba(177, 158, 239, 0.3)', paddingBottom: '5px' }}>LATAUSASEMA_KOORDINAATIT-relaatio</h4>
                        <ul style={{ paddingLeft: '20px', opacity: 0.9, lineHeight: '1.6' }}>
                            <li>4NF täyttyy. Pääavain määrittää yksikäsitteisesti sijainnin, koska jokaisella asemalla on vain yhdet koordinaatit. Tämän vuoksi moniarvoisia riippuvuuksia ei synny.</li>
                        </ul>
                    </section>

                    <section>
                        <h4 style={{ color: '#B19EEF', marginBottom: '10px', borderBottom: '1px solid rgba(177, 158, 239, 0.3)', paddingBottom: '5px' }}>HINNOITTELUMALLI-relaatio</h4>
                        <ul style={{ paddingLeft: '20px', opacity: 0.9, lineHeight: '1.6' }}>
                            <li>2NF, 3NF BCNF ja 4NF täyttyy. Pääavain määrittää hinnat. Avaimettomat attribuutit ovat riippuvaisia vain pääavaimesta.</li>
                        </ul>
                    </section>

                    <section>
                        <h4 style={{ color: '#B19EEF', marginBottom: '10px', borderBottom: '1px solid rgba(177, 158, 239, 0.3)', paddingBottom: '5px' }}>LATAUSPISTE-relaatio</h4>
                        <ul style={{ paddingLeft: '20px', opacity: 0.9, lineHeight: '1.6' }}>
                            <li>2NF täyttyy, koska pääavain on yksinkertainen.</li>
                            <li>3NF täyttyy, koska attribuutit (Tila, Asema) riippuvat suoraan latauspisteestä.</li>
                            <li>4NF täyttyy, koska moniarvoisia riippuvuuksia ei ole.</li>
                        </ul>
                    </section>

                    <section>
                        <h4 style={{ color: '#B19EEF', marginBottom: '10px', borderBottom: '1px solid rgba(177, 158, 239, 0.3)', paddingBottom: '5px' }}>TYYPPI2- ja DC-relaatiot</h4>
                        <ul style={{ paddingLeft: '20px', opacity: 0.9, lineHeight: '1.6' }}>
                            <li>4NF täyttyy molemmissa. Molemmissa tauluissa (PisteId) toimii pääavaimena, joka määrittää kyseisen tyypin erityisominaisuudet ja kaikki attribuutit riippuvat vain pääavaimesta.</li>
                        </ul>
                    </section>

                    <section>
                        <h4 style={{ color: '#B19EEF', marginBottom: '10px', borderBottom: '1px solid rgba(177, 158, 239, 0.3)', paddingBottom: '5px' }}>LATAUSTAPAHTUMA-relaatio</h4>
                        <ul style={{ paddingLeft: '20px', opacity: 0.9, lineHeight: '1.6' }}>
                            <li>2NF täyttyy, koska kaikki tiedot riippuvat pääavaimesta.</li>
                            <li>3NF täyttyy, koska kaikki attribuutit riippuvat suoraan tapahtumasta.</li>
                            <li>BCNF täyttyy, koska kaikki determinaatit ovat ehdokasavaimia.</li>
                            <li>4NF täyttyy, koska moniarvoisia riippuvuuksia ei ole.</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Normalization;