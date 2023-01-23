import Image from "next/image";
import Icon from "../Icon/Icon";
import styles from "./HeroPage.module.css";

function HeroPage() {
	return (
		<section className={styles.hero_page}>
			<div className={styles.information}>
				<p className={styles.information__layout}>
					<span className={styles.information_left}>Caprichos con calidad,</span>
					<span className={styles.information_right}>Caprichos que duran</span>
				</p>
				<div className={styles.hero_page__subinformation}>
					<h2>
						Con tantas opciones en el mercado, conseguir aquello que
						nos interesa y necesitamos puede convertirse en una
						expedición en lo desconocido.
					</h2>
					<h2>
						Con nuestra herramienta de busqueda, facilitamos el
						descubrimiento de eso que ansías, sin tener que
						preocuparte de nada más. La calidad está de nuestra
						mano.
					</h2>
				</div>
				<div className={styles.search_container}>
					<input type="text" placeholder="Comienza tu búsqueda" />
					<button>
						<Icon src="/search.png" alt=""></Icon>
					</button>
				</div>
			</div>
		</section>
	);
}

export default HeroPage;
