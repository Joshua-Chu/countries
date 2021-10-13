import React, { createContext, ReactNode, useContext, useState } from "react";
import debounce from "lodash.debounce";
import { Country } from "../types";

export type countriesContextType = {
	countries: Array<Country>;
	query: string;
	filteredCountriesBySearch: (query: string, countries: Array<Country>) => Array<Country>;
	debouncedOnChange: () => void;
	setCountriesHandler: (countries: Array<Country>) => void;
};

const countriesContextDefaultValues: countriesContextType = {
	countries: null,
	query: "",
	filteredCountriesBySearch: () => [],
	debouncedOnChange: () => {},
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
	const [query, setQuery] = useState<string>("");

	const setQueryHandler = (e) => {
		setQuery(() => e?.target?.value);
	};

	const debouncedOnChange = debounce(setQueryHandler, 300);

	const setCountriesHandler = (countries) => {
		SetCountries(() => countries);
	};

	const filteredCountriesBySearch = (query: string, countries: Array<Country>): Array<Country> => {
		if (query === "") return countries;
		const result = countries.filter((c) => c.name.official.toLowerCase().includes(query.toLowerCase()));
		return result;
	};
	const value = {
		countries,
		query,
		filteredCountriesBySearch,
		debouncedOnChange,
		setCountriesHandler,
	};
	return (
		<>
			<CountriesContext.Provider value={value}>{children}</CountriesContext.Provider>
		</>
	);
};

export default CountriesProvider;
