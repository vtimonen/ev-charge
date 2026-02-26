import React, { useState } from 'react';
import ERImage from '../assets/erkaavio.png';

const ERDiagram = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => setIsOpen(!isOpen);

    return (
        <div style={{ textAlign: 'center', padding: '10px' }}>
            <img
                src={ERImage}
                alt="ER-kaavio"
                onClick={toggleModal}
                style={{
                    maxWidth: '100%',
                    height: 'auto',
                    borderRadius: '15px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
                    cursor: 'zoom-in',
                    transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.01)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />

            {isOpen && (
                <div
                    onClick={toggleModal}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'rgba(0, 0, 0, 0.95)',
                        zIndex: 2000,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'zoom-out',
                        padding: '10px',
                        boxSizing: 'border-box'
                    }}
                >
                    <button style={{
                        position: 'absolute',
                        top: '20px',
                        right: '20px',
                        background: 'transparent',
                        border: 'none',
                        color: 'white',
                        fontSize: '2rem',
                        cursor: 'pointer'
                    }}>&times;</button>

                    <img
                        src={ERImage}
                        alt="ER-kaavio suurennettuna"
                        style={{
                            maxWidth: '100%',
                            maxHeight: '90vh',
                            objectFit: 'contain',
                            borderRadius: '5px'
                        }}
                    />
                </div>
            )}
        </div>
    );
};

export default ERDiagram;