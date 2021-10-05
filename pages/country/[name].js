import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useEffect } from "react";
import { useCountries } from "../../store/CountriesContext";
export default function Country() {
	const router = useRouter();
	const { getCountryByName, country } = useCountries();
	const { name } = router.query;

	useEffect(() => {
		name && getCountryByName(name);
	}, [name]);

	if (country === "") return <h1>Fetching</h1>;

	return (
		<>
			{country && (
				<>
					<Link href="/">
						<a>Back</a>
					</Link>
					<h1>{country.name.official}</h1>
					<ul>{country && country.borders && country.borders.map((border) => <li key={border}>{border}</li>)}</ul>
				</>
			)}
		</>
	);
}
