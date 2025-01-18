import React from 'react';
import PropTypes from 'prop-types';
import styles from './closeButton.module.css';

export default function CloseButton({ onClick }) {
    return (
        <button 
            className={styles.closeButton}
            onClick={onClick}
            aria-label="Close"
        >
            <svg 
                className={styles.icon} 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
            >
                <path 
                    d="M18 6L6 18M6 6l12 12" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                />
            </svg>
        </button>
    );
}

CloseButton.propTypes = {
    onClick: PropTypes.func.isRequired
};
