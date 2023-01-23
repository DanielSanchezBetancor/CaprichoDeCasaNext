import Navbar from "./components/Navbar/Navbar.js";
import HeroPage from "./components/HeroPage/HeroPage.js";
import Partners from "./components/Partners/Partners.js";
import FeaturedCollection from "./components/FeaturedCollection/FeaturedCollection.js";
import Products from "./components/Products/Products.js";
import Footer from "./components/Footer/Footer.js";
export default function Home() {
	return (
		<>
			<Navbar activeLi={0} />
			<HeroPage />
			<FeaturedCollection />
			<Products />
			<Partners />
			<Footer />
		</>
	);
}
