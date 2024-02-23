import styles from "./Button.module.css";
const Button = ({isOutline,icon,text,onClick}) => {
  
  

  return (
    <button 
    onClick={onClick}
    className={isOutline ? styles.outline_btn:styles.primary_btn}
    >
      {icon}
      {text}
      
    </button>
  );
};

export default Button;
