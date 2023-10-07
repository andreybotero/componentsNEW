import styles from './buttons.module.css';

const buttons = ({ onClick, buttonTexts }) => {
    return (
      <div>
        {buttonTexts.map((text, index) => (
          <button
            key={index}
            className={index === 0 ? styles.buttonAtualizar : (index === 1 ? styles.buttonreceita : styles.buttondespesa)}
            onClick={() => onClick(index)}
          >
            {text}
          </button>
        ))}
      </div>
    );
  };
  
  export default buttons;