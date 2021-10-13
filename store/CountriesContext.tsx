import React, { createContext, ReactNode, useContext, useState } from "react";
import debounce from "lodash.debounce";
import { Country } from "../types";

export type countriesContextType = {
	countries: Array<Country>;
	query: string;
	region: string;
	setRegionHandler: (reg: string) => void;
	setQuery: (str: string) => void;
	filteredCountriesBySearch: (query: string, region: string, countries: Array<Country>) => Array<Country>;
	debouncedOnChange: () => void;
	setCountriesHandler: (countries: Array<Country>) => void;
};

const countriesContextDefaultValues: countriesContextType = {
	countries: null,
	query: "",
	region: "",
	setRegionHandler: () => {},
	setQuery: () => {},
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
	const [region, setRegion] = useState("");

	const setQueryHandler = (e) => {
		setQuery(() => e?.target?.value);
	};

	const setRegionHandler = (e) => {
		setRegion(() => e?.target?.value);
	};

	const debouncedOnChange = debounce(setQueryHandler, 300);

	const setCountriesHandler = (countries) => {
		SetCountries(() => countries);
	};

	const filteredCountriesBySearch = (query: string, region: string, countries: Array<Country>): Array<Country> => {
		if (query.trim() === "" && region === "") return countries;
		const result = countries.filter((c) => c.name.official.toLowerCase().includes(query.toLowerCase()));
		if (query.trim() !== "" && region === "") return result;
		return result.filter((c) => c.region === region);
	};
	const value = {
		countries,
		query,
		region,
		setRegionHandler,
		setQuery,
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
