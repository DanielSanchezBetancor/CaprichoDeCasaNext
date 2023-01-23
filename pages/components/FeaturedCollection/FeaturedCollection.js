import Image from "next/image";
import { useState } from "react";
import styles from "./FeaturedCollection.module.css";

function FeaturedCollection() {
    const [slider, setSlider] = useState(0);
    const categories = [
        { categoryKey: "kitchen", categoryName: "Cocina" },
        { categoryKey: "living-room", categoryName: "Salón" },
        { categoryKey: "bedroom", categoryName: "Dormitorio" },
        { categoryKey: "bathroom", categoryName: "Baño" },
        { categoryKey: "fancy", categoryName: "Caprichos" },
        { categoryKey: "playroom", categoryName: "Jardín" },
        { categoryKey: "digital-house", categoryName: "Hogar digital" },
        { categoryKey: "customizable", categoryName: "Customizable" },
    ];
    return (
        <section>
            <div className={styles.collection_wrapper}>
                <div
                    className="arrow_wrapper"
                    onClick={() => (slider > 1 ? setSlider(slider - 2) : "")}
                >
                    <div className="arrow"></div>
                </div>
                <div className={`${styles.collection_1} ${styles.collection}`}>
                    <h1>
                        Artículos para tu{" "}
                        <span>{categories[slider].categoryName}</span>
                    </h1>
                    <h2>Visitar colección</h2>
                    <Image
                        src="/../public/sillon.png"
                        alt="Imagen de un sillón acompañando la categoría"
                        width={300}
                        height={300}
                    ></Image>
                </div>
                <div className={`${styles.collection_2} ${styles.collection}`}>
                    <h1>
                        Artículos para tu{" "}
                        <span>{categories[slider + 1].categoryName}</span>
                    </h1>
                    <h2>Visitar colección</h2>
                    <div className={styles.image_container}>
                        <Image
                            src="/../public/mesa.png"
                            alt="Imagen de un sillón acompañando la categoría"
                            width={300}
                            height={300}
                        ></Image>
                    </div>
                </div>
                <div
                    className="arrow_wrapper right"
                    onClick={() =>
                        slider < categories.length - 2
                            ? setSlider(slider + 2)
                            : ""
                    }
                >
                    <div className="arrow"></div>
                </div>
            </div>
        </section>
    );
}
export default FeaturedCollection;
