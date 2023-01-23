import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import SearchPanel from "./components/SearchPanel/SearchPanel.js";

export default function Search() {
    return (
        <>
            <Navbar activeLi={1} />
            <SearchPanel />
            <Footer />
        </>
    )
}