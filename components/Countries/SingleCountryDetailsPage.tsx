import { Country } from "../../types";
import styled from "styled-components";
import { CountryTextDetails } from "../../styles/util.styles";
type Props = {
	country: Country;
};
const SingleCountryDetailsPage: React.FC<Props> = ({ country }) => {
	const numberConverter = (num) => {
		return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	};
	const generateCommaSeparated = (obj) => {
		return Object.values(obj).join(", ");
	};

	const generateNativeName = (obj) => {
		return Object.values(obj)[0];
	};
	return (
		<CountryDetailsContainer>
			<CountryName>{country.name.official}</CountryName>
			<Details>
				<TextDetails>
					<CountryTextDetails>
						<span>Native Name: </span>
						{generateNativeName(country.name.nativeName).official}
					</CountryTextDetails>
					<CountryTextDetails>
						<span>Population: </span>
						{numberConverter(country.population)}
					</CountryTextDetails>
					<CountryTextDetails>
						<span>Region: </span>
						{country.region}
					</CountryTextDetails>
					<CountryTextDetails>
						<span>Sub Region: </span>
						{country.subregion}
					</CountryTextDetails>
					<CountryTextDetails>
						<span>Capital: </span>
						{country.capital}
					</CountryTextDetails>
				</TextDetails>
				<TextDetails>
					<CountryTextDetails>
						<span>Top Level Domain: </span>
						{country.tld[0]}
					</CountryTextDetails>
					<CountryTextDetails>
						<span>Currencies: </span>
						{generateNativeName(country.currencies).name}
					</CountryTextDetails>
					<CountryTextDetails>
						<span>Languages: </span>
						{generateCommaSeparated(country.languages)}
					</CountryTextDetails>
				</TextDetails>
			</Details>
			<h1>Hello</h1>
		</CountryDetailsContainer>
	);
};

export default SingleCountryDetailsPage;

const CountryDetailsContainer = styled.div`
	flex-basis: 50%;
	padding: 40px 40px 40px 0;
`;

const CountryName = styled.h2`
	margin-bottom: 30px;
`;

const Details = styled.div`
	display: flex;
`;

const TextDetails = styled.div`
	flex-basis: 50%;
`;
