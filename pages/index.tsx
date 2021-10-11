import { Country } from "../types";
import { GetStaticProps } from "next";
import FilterSection from "../components/FilterSection/FilterSection";
import Countries from "../components/Countries/Countries";
import { useCountries } from "../store/CountriesContext";
import { useEffect } from "react";
type Props = {
	countriesData: Array<Country>;
};

const Home: React.FC<Props> = ({ countriesData }) => {
	const { filteredCountriesBySearch, setCountriesHandler, countries, query, region } = useCountries();

	useEffect(() => {
		{
			countriesData && setCountriesHandler(countriesData);
		}
	}, []);

	if (!countries)
		return (
			<>
				<h1>Fetching data...</h1>
			</>
		);

	if (countries.length <= 0)
		return (
			<>
				<h1>Currently No Data Available</h1>
			</>
		);

	const filteredData = filteredCountriesBySearch(query, region, countries);

	return (
		<>
			<FilterSection />
			<Countries countries={filteredData} />
		</>
	);
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
	const response = await fetch("https://restcountries.com/v3.1/all");
	const countriesData: Array<Country> = await response.json();
	return {
		props: {
			countriesData,
		},
	};
};
