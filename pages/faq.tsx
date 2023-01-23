import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import FAQInformation from "./components/FAQInformation/FAQInformation.js";

function FAQ() {
	return (
		<>
			<Navbar activeLi={2} />
            <FAQInformation />
			<Footer />
		</>
	);
}
export default FAQ;
