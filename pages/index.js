import { useEffect } from "react";
import { useCountries } from "../store/CountriesContext";
import Link from "next/link";

export default function Home({ countriesData }) {
	const { countries, setCountriesHandler } = useCountries();
	useEffect(() => {
		setCountriesHandler(countriesData);
	}, []);

	return (
		<>
			<h1>Hello World</h1>

			<ul>
				{countries.length > 0 &&
					countries.map((country) => (
						<li key={country.name.official}>
							<Link href={`/country/${country.name.official}`}>
								<a>
									{country.name.official} - {country.cca3}
								</a>
							</Link>
						</li>
					))}
			</ul>
		</>
	);
}

export async function getStaticProps() {
	const response = await fetch("https://restcountries.com/v3.1/all");
	const data = await response.json();
	return {
		props: {
			countriesData: data,
		},
	};
}
