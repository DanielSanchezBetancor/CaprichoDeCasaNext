import styles from "./Footer.module.css";
import Icon from "../Icon/Icon.js";

function Footer() {
    return (
        <footer className={styles.footer}>
            <a href="#">
                <p className={styles.navbar__logo}>CaprichoDeCasa</p>
            </a>
            <div className={styles.footer__social_icons}>
                    <Icon
                        src="/twitter.png"
                        alt="Icono de busqueda"
                    ></Icon>
                    <Icon
                        src="/instagram.png"
                        alt="Icono de busqueda"
                    ></Icon>
                </div>
        </footer>
    );
}

export default Footer;
