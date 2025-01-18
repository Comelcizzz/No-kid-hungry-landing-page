import React from 'react';
import styles from './containerMain.module.css';
import PropTypes from 'prop-types';
import Button from '../button/button';

export default function ContainerMain({ path, description }) {
    return (
        <div className={styles.mainDiv} style={{ backgroundImage: `url(${path})` }}>
            <div className={styles.gradient} />
            <div className={styles.content}>
                <h1>No kid hungry</h1>
                <p>{description}</p>
                <Button text="Donate" />
            </div>
        </div>
    )
}

ContainerMain.propTypes = {

    path: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired

};