import BorderCountries from "../BorderCountry";
import { Country } from "../../types";
import styled from "styled-components";
import { StyledCountryTextDetails } from "../../styles/util.styles";
import { useCountries } from "../../store/CountriesContext";
import { useEffect } from "react";
type Props = {
	country: Country;
};

const fetchAllCountries = async () => {
	const response = await fetch("https://restcountries.com/v3.1/all");
	const countriesData: Array<Country> = await response.json();

	return countriesData;
};

type ObjectFlatterReturn = { name: string; official?: string };
const SingleCountryDetailsPage: React.FC<Props> = ({ country }) => {
	const { countries, setCountriesHandler } = useCountries();
	useEffect(() => {
		if (countries.length <= 0) {
			fetchAllCountries().then((data) => {
				setCountriesHandler(data);
				borderMapper(data, country.borders);
			});
		} else {
			console.log(countries);
		}
	}, [countries]);

	const numberConverter = (num: Number): string => {
		return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	};
	const generateCommaSeparated = (obj: Object): string => {
		if (obj) return Object.values(obj).join(", ");
	};

	const objectFlatter = (obj: Object): ObjectFlatterReturn => {
		return Object.values(obj)[0];
	};

	const borderMapper = (countries, borders) => {
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

	if (countries.length <= 0) return <h1>Loading...</h1>;
	return (
		<CountryDetailsContainer>
			<CountryName>{country.name.official}</CountryName>
			<Details>
				<TextDetails>
					<StyledCountryTextDetails>
						<span>Native Name: </span>
						{country.name.nativeName ? objectFlatter(country.name.nativeName).official : "N/A"}
					</StyledCountryTextDetails>
					<StyledCountryTextDetails>
						<span>Population: </span>
						{numberConverter(country.population)}
					</StyledCountryTextDetails>
					<StyledCountryTextDetails>
						<span>Region: </span>
						{country.region}
					</StyledCountryTextDetails>
					<StyledCountryTextDetails>
						<span>Sub Region: </span>
						{country.subregion}
					</StyledCountryTextDetails>
					<StyledCountryTextDetails>
						<span>Capital: </span>
						{country.capital}
					</StyledCountryTextDetails>
				</TextDetails>
				<TextDetails>
					<StyledCountryTextDetails>
						<span>Top Level Domain: </span>
						{country.tld && country.tld[0] ? country.tld[0] : ""}
					</StyledCountryTextDetails>
					<StyledCountryTextDetails>
						<span>Currencies: </span>
						{country.currencies ? objectFlatter(country.currencies).name : ""}
					</StyledCountryTextDetails>
					<StyledCountryTextDetails>
						<span>Languages: </span>
						{country.languages ? generateCommaSeparated(country.languages) : ""}
					</StyledCountryTextDetails>
				</TextDetails>
			</Details>
			<BorderCountries borders={borderMapper(countries, country.borders)} />
		</CountryDetailsContainer>
	);
};

export default SingleCountryDetailsPage;

const CountryDetailsContainer = styled.div`
	flex-basis: 50%;
	padding: 10px 40px 40px 40px;
	margin-left: 40px;

	@media only screen and (max-width: 800px) {
		flex-basis: 100%;
		margin-left: 0px;
		padding: 10px 0px;
	}
`;

const CountryName = styled.h2`
	margin-bottom: 30px;

	@media only screen and (max-width: 800px) {
		font-size: 6vw;
	}
`;

const Details = styled.div`
	display: flex;
	margin-bottom: 50px;

	@media only screen and (max-width: 800px) {
		flex-direction: column;
	}
`;

const TextDetails = styled.div`
	flex-basis: 50%;
	padding-right: 20px;

	@media only screen and (max-width: 800px) {
		padding-bottom: 10px;
	}
`;
