import React, { createContext, ReactNode, useContext, useState } from "react";
import debounce from "lodash.debounce";
import { Country } from "../types";

export type countriesContextType = {
	countries: Array<Country>;
	query: string;
	region: string;
	borderMapper: (countries: Array<Country>, borders: string[]) => { common: string; official: string }[];
	generateCommaSeparated: (obj: Object) => string;
	numberConverter: (num: number) => string;
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
	borderMapper: () => [],
	generateCommaSeparated: () => "",
	numberConverter: () => "",
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

	const numberConverter = (num: Number): string => {
		return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	};
	const generateCommaSeparated = (obj: Object): string => {
		if (obj) return Object.values(obj).join(", ");
	};
	const borderMapper = (countries: Array<Country>, borders: string[]): { common: string; official: string }[] => {
		if (!borders) return [];
		if (borders.length === 0) return [];

		const result = borders.reduce((acc, b) => {
			const target = countries.find((c) => {
				return c.cca3 === b;
			});

			return [...acc, { common: target.name.common, official: target.name.official }];
		}, []);

		return result;
	};
	const value = {
		countries,
		query,
		region,
		borderMapper,
		numberConverter,
		generateCommaSeparated,
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
