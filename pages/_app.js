import "../styles/globals.js";
import { GlobalStyles } from "../styles/globals";
import { ThemeProvider } from "styled-components";
import { lightMode, darkMode } from "../styles/ThemeConfig.js";
import CountriesProvider from "../store/CountriesContext";
import NavBar from "../components/layout/Navbar";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
	const [isDark, setIsDark] = useState(true);
	const setIsDarkHandler = () => {
		setIsDark(() => !isDark);
	};

	return (
		<>
			<CountriesProvider>
				<ThemeProvider theme={isDark ? darkMode : lightMode}>
					<NavBar isDark={isDark} onThemeToggle={setIsDarkHandler} setIsDark={setIsDark} />
					<GlobalStyles />
					<Component {...pageProps} />
				</ThemeProvider>
			</CountriesProvider>
		</>
	);
}

export default MyApp;
