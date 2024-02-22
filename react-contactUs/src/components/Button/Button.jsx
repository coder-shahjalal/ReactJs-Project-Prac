import { MdMessage } from "react-icons/md";
import styles from "./Button.module.css";

const Button = () => {
  console.log(styles);
  return (
    <button className={styles.primary_btn}>
      <MdMessage />
      Button
    </button>
  );
};

export default Button;
