import "../styles/globals.js";
import { GlobalStyles } from "../styles/globals";
import NavBar from "../components/layout/Navbar";
function MyApp({ Component, pageProps }) {
	return (
		<>
			<NavBar />
			<GlobalStyles />
			<Component {...pageProps} />;
		</>
	);
}

export default MyApp;
