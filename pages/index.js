import { useEffect } from "react";
import { useCountries } from "../store/CountriesContext";
import Link from "next/link";

export default function Home({ countriesData }) {
	const { countries, setCountriesHandler } = useCountries();
	useEffect(() => {
		setCountriesHandler(countriesData);
	}, [countriesData, setCountriesHandler]);

	return (
		<>
			<h1>Hello World</h1>

			<ul>
				{countries.length > 0 &&
					countries.map((country) => (
						<li key={country.name}>
							<Link href={`/country/${country.name}`}>
								<a>
									{country.name} - {country.alpha3Code}
								</a>
							</Link>
						</li>
					))}
			</ul>
		</>
	);
}

export async function getStaticProps() {
	const response = await fetch("https://restcountries.com/v2/all");
	const data = await response.json();
	return {
		props: {
			countriesData: data,
		},
	};
}
