// Root
import { useState } from "react";
import Link from "next/link";
// Components
import Icon from "../Icon/Icon";
// Styles
import styles from "./Navbar.module.css";

function Navbar({ activeLi }) {
	return (
		<header className={styles.header}>
			<Link href="/">
				<p className={styles.header__logo}>CaprichoDeCasa</p>
			</Link>
			<div className={styles.lateral_menu}>
				<button className={styles.btn__hamburguer}>
					<Icon
						src="/hamburger.png"
						alt="Icono para abrir y cerrar el menú de navegación"
						className={styles.icon_hamburguer}
					></Icon>
				</button>
				<nav className={styles.navbar}>
					<Icon
						src="/close.svg"
						alt=""
						className={styles.icon_close_menu}
					></Icon>
					<ul
						className={styles.navbar__elements}
						id="navbar__elements"
					>
						<Link href="/">
							<li className={activeLi === 0 ? "active_li" : ""}>
								Inicio
							</li>
						</Link>
						<Link className={activeLi === 1 ? "active_li" : ""}href="/search">
							<li>Productos</li>
						</Link>
						<Link href="/faq">
							<li className={activeLi === 2 ? "active_li" : ""}>
								FAQs
							</li>
						</Link>
						<Link href="/about-us">
							<li className={activeLi === 3 ? "active_li" : ""}>
								Sobre nosotros
							</li>
						</Link>

						<Link href="/">
							<li>Contacto</li>
						</Link>
					</ul>
				</nav>
			</div>
			<div className={styles.social_icons}>
				<button><Icon src="/twitter.png" alt="Icono de busqueda" className={styles.icon}></Icon></button>
				<button><Icon src="/instagram.png" alt="Icono de busqueda" className={styles.icon}></Icon></button>
			</div>
		</header>
	);
}

export default Navbar;
