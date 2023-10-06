import styles from './dashcard.module.css';

const dashcard = ({ titulo, valor, cor }) => {
    return (
        <div className={styles.card} style={{backgroundColor: cor}}>
            <p className={styles.cardTitle}>{titulo}</p>
            <p className={styles.cardValue}>{valor}</p>
        </div>
    );
}

export default dashcard;