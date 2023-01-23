import Image from "next/image";
import Icon from "../Icon/Icon";
import styles from "./ProductCard.module.css";

function ProductCard({ src }) {
	return (
		<div className={styles.item_card}>
			<h2>Nombre de producto</h2>
			<h3>50€</h3>
			<Image
				src={src}
				alt="Imagen de producto de un sofá"
				width={175}
				height={175}
				className={styles.item_card__product_image}
			></Image>
			<button>
				Comprar en Amazon<Icon src="/../public/compra.png"></Icon>
			</button>
		</div>
	);
}

export default ProductCard;
