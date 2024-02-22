import Button from "../../Button/Button";
import styles from "./Contact.module.css";

const ContactForm = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <Button />
        <Button />
      </div>
      <div className={styles.contact_image}></div>
    </section>
  );
};

export default ContactForm;
