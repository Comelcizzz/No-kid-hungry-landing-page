import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './donationForm.module.css';

export default function DonationForm({ onSubmit, onClose }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        amount: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({ name: '', email: '', amount: '', message: '' });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <button 
                    className={styles.closeButton}
                    onClick={onClose}
                >
                    Close
                </button>
                <h2>Make a Donation</h2>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className={styles.input}
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className={styles.input}
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="number"
                        name="amount"
                        placeholder="Donation Amount ($)"
                        className={styles.input}
                        value={formData.amount}
                        onChange={handleChange}
                        required
                        min="1"
                    />
                    <textarea
                        name="message"
                        placeholder="Message (Optional)"
                        className={styles.input}
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                    />
                    <button type="submit" className={styles.submitButton}>
                        Submit Donation
                    </button>
                </form>
            </div>
        </div>
    );
}

DonationForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
};
