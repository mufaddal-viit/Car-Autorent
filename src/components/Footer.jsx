import styles from "./Footer.module.css";
import { FiPhoneCall } from "react-icons/fi";
import { MdAttachEmail } from "react-icons/md";
import { FaArrowCircleUp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>AUTORENT</span>

      <a href="#">
        <div className={styles.social_media}>
          Home <FaArrowCircleUp className="text-white text-xl" />
        </div>
      </a>

      <div className={styles.contact_info}>
        <div>
          <MdAttachEmail className="text-white text-3xl" />
          <a href="">autorent@gmail.com</a>{" "}
        </div>
        <div>
          <FiPhoneCall className="text-white text-2xl" />
          <span>+97155602453</span>
        </div>
      </div>
    </footer>
  );
}
