import { useState } from "react";
import styles from "./SearchPanel.module.css";

function SearchPanel() {
	const [categoriesActive, setCategoriesActive] = useState("false");
	const [subcategoriesActive, setSubcategoriesActive] = useState("false");
	const categories = [
		"Salón",
		"Cocina",
		"Dormitorio",
		"Caprichos",
		"Jardín",
		"Hogar digital",
		"Customizables",
	];
	function activeDropdown(className, realState, setRealState) {
        // debugger;
		const flag = realState === false;
		document.querySelector(`.${className}`).nextSibling.dataset.active =
			flag;
		setRealState(flag);
	}
	return (
		<section className={styles.search_panel}>
			<div className={styles.lateral_menu}>
				<button
					className={styles.categories}
					onClick={(event) =>
						activeDropdown(
							event.target.className,
							categoriesActive,
							setCategoriesActive
						)
					}
				>
					Categorias
				</button>
				<ul className={styles.list} data-active="false">
					{categories.map((category) => (
						<li key={category}>{category}</li>
					))}
				</ul>
				<button
					className={styles.subcategories}
					onClick={(event) =>
						activeDropdown(
							event.target.className,
							subcategoriesActive,
							setSubcategoriesActive
						)
					}
				>
					Subcategorias
				</button>
				<ul className={styles.list} data-active="false">
					{categories.map((category) => (
						<li key={category}>{category}</li>
					))}
				</ul>
				<span>Etiquetas</span>
			</div>
			<div className={styles.product_panel}>
				<span>Productos</span>
			</div>
			<div className={styles.product_preview}>
				<span>Información de producto</span>
			</div>
		</section>
	);
}

export default SearchPanel;
