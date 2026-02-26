import React from 'react';
import ERImage from '../assets/erkaavio.png';

const ERDiagram = () => {
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <img
                src={ERImage}
                alt="ER-kaavio"
                style={{
                    maxWidth: '75%',
                    height: 'auto',
                    borderRadius: '20px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
                }}
            />
        </div>
    );
};

export default ERDiagram;