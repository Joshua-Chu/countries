import React, { createContext, ReactNode, useContext, useState } from "react";
import { Country } from "../types";

export type countriesContextType = {
	countries: Array<Country>;
	setCountriesHandler: (countries: Array<Country>) => void;
};

const countriesContextDefaultValues: countriesContextType = {
	countries: null,
	setCountriesHandler: () => {},
};

const CountriesContext = createContext<countriesContextType>(countriesContextDefaultValues);

export function useCountries() {
	return useContext(CountriesContext);
}

export type Props = {
	children: ReactNode;
};

const CountriesProvider: React.FC<Props> = ({ children }) => {
	const [countries, SetCountries] = useState<Country[]>([]);

	const setCountriesHandler = (countries) => {
		console.log("received from store", countries);
		SetCountries(() => countries);
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

export default CountriesProvider;
