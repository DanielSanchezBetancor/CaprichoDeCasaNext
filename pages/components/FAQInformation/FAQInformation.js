import styles from "./FAQInformation.module.css";
import FAQCard from "../FAQCard/FAQCard.js";
function FAQInformation() {
	return (
		<section className={styles.faq_information}>
			<h1>
				En esta sección encontrarás varias preguntas comunes realizadas
				entre usuarios
			</h1>
			<FAQCard
				question={"¿Como de seguras son las compras?"}
				answer={
					"Las compras se realizan finalmente en Amazon, por lo que podemos confiar plenamente en la seguridad de los productos que deseas."
				}
			/>
		</section>
	);
}

export default FAQInformation;
