import Image from "next/image";
import styles from "./Partners.module.css";

function Partners() {
    return (
        <section className={styles.partners}>
            <h3>Trabajamos con</h3>
            <div className={styles.partners__image}>
                <Image
                    src="/../public/amazon.png"
                    alt="Logo de Amazon"
                    width={112}
                    height={104}
                ></Image>
            </div>
        </section>
    );
}

export default Partners;
