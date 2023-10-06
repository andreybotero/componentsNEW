import styles from './header.module.css';

const Headernova = ({ nome, email }) => {
    return (
        <div className={styles.profile}>
            <p className={styles.welcome}>{nome}</p>
            <p className={styles.useremail}>{email}</p>
        </div>
    );
}

export default Headernova;