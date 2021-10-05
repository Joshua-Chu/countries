import CountiesContextProvider from "../store/CountriesContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<CountiesContextProvider>
			<Component {...pageProps} />;
		</CountiesContextProvider>
	);
}

export default MyApp;
