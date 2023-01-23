import Image from "next/image";

import styles from "./AboutUs.module.css";

function AboutUs() {
	return (
		<section className={styles.about_us}>
			<div className={styles.about_us__info}>
				<h1>Conoce al equipo que garantiza tus caprichos</h1>
				<p>
					Viniendo de familias que acostumbran a moverse, nos hemos
					visto en la necesidad de ir renovandonos cada poco tiempo.
				</p>
				<p>
					Con la introducción de comercios eléctronicos como Amazon,
					nos da una oportunidad de facilitar estas mudanzas, pudiendo
					ir consiguiendo lo que necesitamos a cada momento
				</p>
				<p>
					Esto también plantea la necesidad de extraer y filtrar cada
					producto expuesto de cada vendedor, ¿quién no se ha comprado
					una mesa que le dura 3 semanas?
				</p>
				<p>
					Desde CaprichoDecasa intentamos subsanar esta necesidad,
					analizando vendedores y productos y trayéndote solo lo mejor
				</p>
				<p className={styles.last_child}>
					¡Conseguimos que la calidad no se deje al azar!
				</p>
				<div className={styles.about_us__img_wrapper}>
					<Image
						src="/about_us_bg.jpg"
						width={200}
						height={0}
					></Image>
				</div>
			</div>
			<div className={styles.cards}>
				<div className={styles.card}>
					<h2>Daniel</h2>
					<Image src="/baifo.png" width={100} height={100}></Image>
					<p>
						Web developer, nacido en Gran Canaria, con oportunidad
						de poder vivir en Málaga, Barcelona y Madrid. Con la
						confianza de que los buscadores no te dan lo que
						necesitas para estos viajes, te propongo una solución
						mejor: Nuestra herramienta CaprichoDeCasa
					</p>
				</div>
				<div className={`${styles.card} ${styles.reversed_card}`}>
					<h2>Nuria</h2>
					<Image src="/baifa.png" width={100} height={100}></Image>
					<p>
						Con un inicio perúano-español, he dedicado mi vida a mi
						pasión de viajar, sobre todo entre mis dos tierras,
						probando en un sitio a cada momento. Con estudios en
						Marketing Digital y Comercio Eléctronico, puedo
						descubrir lo que Google no puede.
					</p>
				</div>
			</div>
		</section>
	);
}

export default AboutUs;
