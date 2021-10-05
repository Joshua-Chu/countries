import { createContext, useContext, useState } from "react";
import { getCountriesData, getCountryData } from "../api/apiServices";
// initial values for the context
const CountriesContext = createContext({
	countries: [],
	country: {},
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
	const [country, setCountry] = useState("");

	const setCountriesHandler = (countriesData) => {
		setCountries(() => countriesData);
	};

	const extractCountry = (countriesData, countryName) => {
		return countriesData?.find((country) => country.name.official === countryName);
	};

	const getCountryByName = async (countryName) => {
		// handle errors by fetching
		switch (countries.length) {
			case 0: {
				const data = await getCountryData(countryName);
				const target = extractCountry(data, countryName);
				setCountry(() => target);
				break;
			}

			default: {
				const targetCountry = countries.find((country) => country.name.official === countryName);
				setCountry(() => targetCountry);
				break;
			}
		}
	};

	const value = {
		countries,
		country,
		setCountriesHandler,
		getCountryByName,
	};

	return (
		<>
			<CountriesContext.Provider value={value}>{children}</CountriesContext.Provider>
		</>
	);
};

export default CountiesContextProvider;
