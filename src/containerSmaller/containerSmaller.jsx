import React from 'react';
import PropTypes from 'prop-types';
import styles from './containerSmaller.module.css';

export default function ContainerSmaller({ path, description, number }) {
    return (
        <div className={styles.smallerDiv}>
            <img src={path} alt={description} />
        </div>
    );
}

ContainerSmaller.propTypes = {
    path: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
};