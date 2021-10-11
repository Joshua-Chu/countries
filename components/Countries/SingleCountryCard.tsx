import Image from "next/image";
import { useRouter } from "next/dist/client/router";
import { Country } from "../../types";
import styled from "styled-components";
import { StyledSingleCountry, CountryFlagContainer, CountryCardDetails, CountryName } from "./SingleCountryCard.styles";
import { CountryTextDetails } from "../../styles/util.styles";
type Props = {
	country: Country;
};

const SingleCountry: React.FC<Props> = ({ country }) => {
	const router = useRouter();
	const flagImage = String(country.flags.svg);

	const numberConverter = (num: Number): string => {
		return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	};

	const routePushHandler = () => {
		const path = `/country/${country.name.official}`;
		router.push(path);
	};

	return (
		<StyledSingleCountry onClick={routePushHandler}>
			<CountryFlagContainer>
				{flagImage && (
					<StyledImage src={flagImage} alt="flag" layout="fill" className="image" objectFit="cover" />
				)}
			</CountryFlagContainer>
			<CountryCardDetails>
				<CountryName>{country.name.official}</CountryName>
				<CountryTextDetails>
					{" "}
					<span>Population: </span> {numberConverter(country.population)}
				</CountryTextDetails>
				<CountryTextDetails>
					{" "}
					<span>Region: </span> {country.region}
				</CountryTextDetails>
				<CountryTextDetails>
					<span>Capital: </span>
					{country.capital}
				</CountryTextDetails>
			</CountryCardDetails>
		</StyledSingleCountry>
	);
};

export default SingleCountry;

export const StyledImage = styled(Image)`
	border-radius: 5px 5px 0 0;
	height: 100%;
`;
