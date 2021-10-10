import "../styles/globals.js";
import { GlobalStyles } from "../styles/globals";
import CountriesProvider from "../store/CountriesContext";
import NavBar from "../components/layout/Navbar";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<CountriesProvider>
				<NavBar />
				<GlobalStyles />
				<Component {...pageProps} />
			</CountriesProvider>
		</>
	);
}

export default MyApp;
