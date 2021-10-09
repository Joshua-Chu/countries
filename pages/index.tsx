import { Country } from "../types";
import { Container } from "../styles/util.styles";
import FilterSection from "../components/FilterSection";

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
			<Container>
				<ul>
					{countries.map((country) => (
						<li key={country.name.official}>{country.name.official}</li>
					))}
				</ul>
			</Container>
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
