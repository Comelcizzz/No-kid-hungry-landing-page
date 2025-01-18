import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.css';
import DonationForm from '../donationForm/donationForm';

export default function Button({ text }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = (formData) => {
        console.log('Donation submitted:', formData);
        setIsModalOpen(false);
    };

    return (
        <>
            <button className={styles.button} onClick={() => setIsModalOpen(true)}>
                {text}
            </button>

            {isModalOpen && (
                <DonationForm 
                    onSubmit={handleSubmit}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired
};