import { Country } from "../../types";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";
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

const StyledSingleCountry = styled.div`
	flex-basis: 270px;
	margin-bottom: 70px;
	cursor: pointer;
	transition: all 0.5s ease;

	&:hover {
		transform: scale(1.05);
	}

	@media only screen and (max-width: 620px) {
		flex-basis: 80%;
		min-width: 250px;
	}
`;

const StyledImage = styled(Image)`
	border-radius: 5px 5px 0 0;
	height: 100%;
`;

const CountryCardDetails = styled.div`
	height: 176px;
	background-color: #2b3743;
	padding: 30px 20px 30px 20px;
	border-radius: 0 0 5px 5px;

	@media only screen and (max-width: 620px) {
		height: 230px;
	}
`;

const CountryName = styled.h5`
	margin: 0;
	font-size: 0.7rem;
	margin-bottom: 15px;
`;

const CountryFlagContainer = styled.div`
	position: relative;
	width: 270px;
	height: 162px;

	@media only screen and (max-width: 620px) {
		width: 100%;
		height: 300px;
	}
`;
