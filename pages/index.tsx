import { Country } from "../types";
import FilterSection from "../components/FilterSection/FilterSection";
import Countries from "../components/Countries/Countries";
type Props = {
	countries: Array<Country>;
};

const Home: React.FC<Props> = ({ countries }) => {
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

	return (
		<>
			<FilterSection />
			<Countries countries={countries} />
		</>
	);
};

export default Home;

export async function getStaticProps() {
	const response = await fetch("https://restcountries.com/v3.1/all");
	const countries: Array<Country> = await response.json();
	return {
		props: {
			countries,
		},
	};
}
