import { Country } from "../types";

type Props = {
	countries: Array<Country>;
};

const Home: React.FC<Props> = ({ countries }) => {
	console.log(countries);
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
			<h1>Home Page</h1>
			<h2>Countries Length : {countries.length}</h2>
			<ul>
				{countries.map((country) => (
					<li key={country.name.official}>{country.name.official}</li>
				))}
			</ul>
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
