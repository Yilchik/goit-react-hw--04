import css from "./Contact.module.css";
import { RiUser3Fill } from "react-icons/ri";
import { BsTelephoneFill } from "react-icons/bs";

function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={css.container}>
      <div className={css.card}>
        <p>
          <RiUser3Fill className={css.myIcon} size={20} />
          {name}
        </p>
        <p>
          <BsTelephoneFill className={css.myIcon} size={20} />
          {number}
        </p>
      </div>
      <button className={css.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}

export default Contact;
