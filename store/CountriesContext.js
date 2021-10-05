import { createContext, useContext, useState } from "react";

// initial values for the context
const CountriesContext = createContext({
	countries: [],
	setCountriesHandler: () => {},
	getCountryByName: () => {},
	getCountryByBorder: () => {},
});

// exporting it like a hook
export function useCountries() {
	return useContext(CountriesContext);
}

const CountiesContextProvider = ({ children }) => {
	const [countries, setCountries] = useState([]);

	const setCountriesHandler = (countriesData) => {
		setCountries(() => countriesData);
	};

	const value = {
		countries,
		setCountriesHandler,
	};

	return (
		<>
			<CountriesContext.Provider value={value}>{children}</CountriesContext.Provider>
		</>
	);
};

export default CountiesContextProvider;
