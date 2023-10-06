import styles from './inputs.module.css';

const Headernova = ({ varName, tipo, descricao, setVarName, name }) => {
    return (
        <div className={styles.description}>
            <input className={styles.inputdescription}
                value={varName}
                type={tipo}
                name={name}
                placeholder={descricao}
                onChange={(event) => setVarName(event.target.value)}
            />

        </div>
    );

}
export default Headernova;