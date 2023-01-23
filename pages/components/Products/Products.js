import Icon from "../Icon/Icon";
import styles from "./Products.module.css";
import ProductCard from "../ProductCard/ProductCard.js";

function Products() {
    return (
        <section className={styles.products}>
            <div className={styles.products__filters}>
                <h1>Productos</h1>
                <div className={styles.menu__filters}>
                    <h2>Más vendidos</h2>
                    <h2>Más populares</h2>
                </div>
                <div className={styles.see_all_wrapper}>
                    <h3>Ver todos</h3>
                    <div className={styles.icon_wrapper}>
                        <Icon
                            src="/../public/flecha.png"
                            alt="Flecha para indicar acceso a la página de búsqueda"
                            className={styles.icon}
                        ></Icon>
                    </div>
                </div>
            </div>
            <ul className={styles.products__categories}>
                <li>Todos</li>
                <li>Salón</li>
                <li>Cocina</li>
                <li>Dormitorio</li>
                <li>Caprichos</li>
                <li>Jardín</li>
                <li>Hogar digital</li>
                <li>Customizables</li>
            </ul>
            <div className={styles.products__items}>
                <ProductCard src={"/../public/sofa.png"} />
                <ProductCard src={"/../public/mesa.png"} />
                <ProductCard src={"/../public/sillon.png"} />

                <ProductCard src={"/../public/sofa.png"} />
                <ProductCard src={"/../public/mesa.png"} />
                <ProductCard src={"/../public/sillon.png"} />
            </div>
        </section>
    );
}

export default Products;
