import { GetStaticProps } from "next";
import { useEffect } from "react";
import FilterSection from "../components/FilterSection/FilterSection";
import Countries from "../components/Countries/Countries";
import { Country } from "../types";
import { useCountries } from "../store/CountriesContext";
import Announcement from "../components/Announcement";

type Props = {
	countriesData: Array<Country>;
};

const Home: React.FC<Props> = ({ countriesData }) => {
	const { filteredCountriesBySearch, setCountriesHandler, countries, query, region } = useCountries();

	const filteredData = filteredCountriesBySearch(query, region, countries).sort((a, b) => {
		return a.name.official > b.name.official ? 1 : -1;
	});

	useEffect(() => {
		{
			countriesData && setCountriesHandler(countriesData);
		}
	}, []);

	if (!countries)
		return (
			<Announcement>
				<h3>Fetching Data...</h3>
			</Announcement>
		);

	if (countries.length <= 0)
		return (
			<Announcement>
				<h3>No data available</h3>
			</Announcement>
		);

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
