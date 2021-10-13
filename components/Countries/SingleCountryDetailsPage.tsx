import { useCountries } from "../../store/CountriesContext";
import { useEffect } from "react";
import BorderCountries from "../BorderCountry";
import { Country } from "../../types";
import { StyledCountryTextDetails } from "../../styles/util.styles";
import { CountryDetailsContainer, CountryName, Details, TextDetails } from "./SingleCountryDetailsPage.styles";
type Props = {
	country: Country;
};

type ObjectFlatterReturn = { name: string; official?: string };

const SingleCountryDetailsPage: React.FC<Props> = ({ country }) => {
	const { countries, numberConverter, generateCommaSeparated, borderMapper } = useCountries();

	const objectFlatter = (obj: Object): ObjectFlatterReturn => {
		return Object.values(obj)[0];
	};

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
